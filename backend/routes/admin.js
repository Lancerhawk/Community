const express = require('express');
const router = express.Router();
const UserModel = require('../models/Users');

// Get all users with pagination and search
router.get('/users', async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '' } = req.query;
        
        // Create search query
        const searchQuery = search
            ? {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { username: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { collegeName: { $regex: search, $options: 'i' } }
                ]
            }
            : {};

        // Get total count for pagination
        const totalUsers = await UserModel.countDocuments(searchQuery);

        // Fetch users with pagination
        const users = await UserModel
            .find(searchQuery)
            .select('name username email collegeName isVerified')
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // Format response
        const formattedUsers = users.map(user => ({
            name: user.name,
            username: user.username,
            email: user.email,
            college: user.collegeName,
            veri: user.isVerified ? 'verified' : 'unverified'
        }));

        res.json({
            users: formattedUsers,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: page
        });

    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;