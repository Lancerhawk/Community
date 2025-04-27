require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const UserModel = require('./models/Users');
const adminRoutes = require('./routes/admin');

const app = express();
const JWT_SECRET = process.env.JWT_SECRET;
app.use(cors());
app.use(express.json());

// Admin routes
app.use('/api/admin', adminRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Storying the OTP in memory for now
const otpStore = {};

// Email Transporter i am using is nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    },
    debug: true, 
    logger: true
});

// ** Check Availability **
app.post('/check-availability', async (req, res) => {
    const { email, username } = req.body;
    try {
        const existingEmail = email ? await UserModel.findOne({ email }) : null;
        const existingUsername = username ? await UserModel.findOne({ username }) : null;

        res.json({
            email: existingEmail ? 'Email already exists' : null,
            username: existingUsername ? 'Username already exists' : null
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error checking availability' });
    }
});

// ** Sending the OTP **
app.post('/send-otp', async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: 'Email is required' });

    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        otpStore[email] = otp;

        console.log('Attempting to send email to:', email);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${otp}. It is valid for 5 minutes.`,
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);

        console.log(`OTP sent to ${email}: ${otp}`);
        res.json({ message: 'OTP sent successfully' });

        setTimeout(() => delete otpStore[email], 5 * 60 * 1000);

    } catch (error) {
        console.error('OTP Sending Error:', error);
        res.status(500).json({ error: 'Failed to send OTP' });
    }
});

// ** Verify OTP **
app.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) return res.status(400).json({ error: 'Email and OTP are required' });

    if (otpStore[email] && otpStore[email] === Number(otp)) {
        delete otpStore[email];
        res.json({ success: true, message: 'OTP Verified' });
    } else {
        res.status(400).json({ error: 'Invalid or expired OTP' });
    }
});

// ** Login User **
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '24h' });
        res.json({
            token,
            userId: user._id,
            username: user.username,
            veri: user.isVerified ? 'verified' : 'unverified',
            roleAdmin: user.roleAdmin? true : false,
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ** Register User **
app.post('/register', async (req, res) => {
    try {
        const { name, username, email, password, collegeName, location } = req.body;
        if (!name || !username || !email || !password || !collegeName || !location) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingEmail = await UserModel.findOne({ email });
        const existingUsername = await UserModel.findOne({ username });

        if (existingEmail) return res.status(409).json({ error: 'Email already exists' });
        if (existingUsername) return res.status(409).json({ error: 'Username already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
            name,
            username,
            email,
            password: hashedPassword,
            collegeName,
            location,
            role: 'User'
        });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '24h' });

        console.log('User created successfully:', user);
        res.status(201).json({ message: 'User registered successfully', token });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ** Send Reset OTP **
app.post('/send-reset-otp', async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: 'Email is required' });

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'No account found with this email' });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);
        otpStore[email] = otp;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your password reset OTP is: ${otp}. It is valid for 5 minutes.`,
        };
        
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Password reset OTP sent successfully' });

        setTimeout(() => delete otpStore[email], 5 * 60 * 1000);

    } catch (error) {
        console.error('Reset OTP Sending Error:', error);
        res.status(500).json({ error: 'Failed to send reset OTP' });
    }
});

// ** Reset Password **
app.post('/reset-password', async (req, res) => {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.status(400).json({ error: 'Email, OTP, and new password are required' });
    }

    try {
        if (!otpStore[email] || otpStore[email] !== Number(otp)) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await UserModel.updateOne({ email }, { password: hashedPassword });

        delete otpStore[email];
        res.json({ message: 'Password reset successful' });

    } catch (error) {
        console.error('Password Reset Error:', error);
        res.status(500).json({ error: 'Failed to reset password' });
    }
});

// ** Server **
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


// ** Close the MongoDB connection when the app is terminated **
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    });
});
