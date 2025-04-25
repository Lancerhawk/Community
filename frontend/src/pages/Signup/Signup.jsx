import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import api from '../../api';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    collegeName: '',
    location: ''
  });

  const [errors, setErrors] = useState({});
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    capital: false,
    numbers: false,
    lowercase: false
  });

  const validatePassword = (password) => {
    setPasswordRequirements({
      length: password.length >= 8,
      capital: /[A-Z]/.test(password),
      numbers: /[0-9]/.test(password),
      lowercase: (password.match(/[a-z]/g) || []).length >= 4
    });
  };
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'password') {
      validatePassword(value);
    } else if (name === 'email' || name === 'username') {
      checkAvailability(name, value);
    }
  };

  const checkAvailability = async (field, value) => {
    if (!value) return;
    try {
      const response = await api.post('./check-availability', {
        [field]: value
      });
      setErrors(prevErrors => ({
        ...prevErrors,
        [field]: response.data[field]
      }));
    } catch (error) {
      console.error(`Error checking ${field} availability:`, error);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors({ submit: 'Passwords do not match!' });
      return;
    }

    // Check if all password requirements are met
    if (!Object.values(passwordRequirements).every(Boolean)) {
      setErrors({ submit: 'Please meet all password requirements' });
      return;
    }

    // Check for existing email and username
    try {
      const availabilityResponse = await api.post('./check-availability', {
        email: formData.email,
        username: formData.username
      });

      if (availabilityResponse.data.email || availabilityResponse.data.username) {
        setErrors({
          ...errors,
          email: availabilityResponse.data.email,
          username: availabilityResponse.data.username
        });
        return;
      }

      setIsLoading(true);
      const response = await api.post('./send-otp', {
        email: formData.email
      });

      console.log('OTP Sent:', response.data.message);
      setOtpSent(true);
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      setErrors({ submit: errorMessage });
      console.error('OTP Send Failed:', errorMessage);
      setIsLoading(false);
    }
  };

  const handleVerifyOtpAndRegister = async (e) => {
    e.preventDefault();

    try {
      const verifyResponse = await api.post('./verify-otp', {
        email: formData.email,
        otp
      });

      if (verifyResponse.data.success) {
        const registerResponse = await api.post('./register', {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          collegeName: formData.collegeName,
          location: formData.location
        });

        console.log('Registration successful:', registerResponse.data);
        setSignupSuccess(true);

        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        setErrors({ otp: 'Invalid OTP. Please try again.' });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      setErrors({ submit: errorMessage });
      console.error('Registration failed:', errorMessage);
    }
  };

  return (
    <div className="signup-container">
      {signupSuccess && <div className="success-animation">✓</div>}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">Sending OTP...</div>
        </div>
      )}

      <div className={`signup-box ${signupSuccess ? 'success' : ''}`}>
        <h2 className="title-animation">{otpSent ? 'Verify OTP' : 'Create Account'}</h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="form-animation">
            {errors.submit && <div className="error-message">{errors.submit}</div>}
            <div className="form-group"><div className="input-container">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Full Name</label>
            </div></div>
            <div className="form-group"><div className="input-container">
              <input type="text" name="username" value={formData.username} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Username</label>
              {errors.username && <div className="error-message">{errors.username}</div>}
            </div></div>
            <div className="form-group"><div className="input-container">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Email</label>
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div></div>
            <div className="form-group"><div className="input-container">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Password</label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password1">{showPassword ? "🙈" : "👁️"}</button>
              <div className="password-requirements">
                <div className="password-requirement">
                  <span className={`requirement-icon ${passwordRequirements.length ? 'valid' : 'invalid'}`}>
                    {passwordRequirements.length ? '✓' : '·'}
                  </span>
                  At least 8 characters
                </div>
                <div className="password-requirement">
                  <span className={`requirement-icon ${passwordRequirements.capital ? 'valid' : 'invalid'}`}>
                    {passwordRequirements.capital ? '✓' : '·'}
                  </span>
                  One capital letter
                </div>
                <div className="password-requirement">
                  <span className={`requirement-icon ${passwordRequirements.numbers ? 'valid' : 'invalid'}`}>
                    {passwordRequirements.numbers ? '✓' : '·'}
                  </span>
                  One or more numbers
                </div>
                <div className="password-requirement">
                  <span className={`requirement-icon ${passwordRequirements.lowercase ? 'valid' : 'invalid'}`}>
                    {passwordRequirements.lowercase ? '✓' : '·'}
                  </span>
                  Four or more lowercase letters
                </div>
              </div>
            </div></div>
            <div className="form-group"><div className="input-container">
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Confirm Password</label>
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password2">{showConfirmPassword ? "🙈" : "👁️"}</button>
            </div></div>
            <div className="form-group"><div className="input-container">
              <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">College Name</label>
            </div></div>
            <div className="form-group"><div className="input-container">
              <input type="text" name="location" value={formData.location} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Location</label>
            </div></div>

            <button type="submit" className="signup-button">
              Send OTP
              <span className="button-effect"></span>
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtpAndRegister} className="form-animation">
            <div className="form-group"><div className="input-container">
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required className="animated-input" />
              <label className="floating-label1">Enter OTP sent to {formData.email}</label>
            </div></div>
            {errors.otp && <div className="error-message">{errors.otp}</div>}
            <button type="submit" className="signup-button">
              Verify & Register
              <span className="button-effect"></span>
            </button>
          </form>
        )}

        {!signupSuccess && (
          <p className="login-link">
            Already have an account?{' '}
            <a href="#" onClick={() => navigate('/login')}>
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
