import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import './ForgotPassword.css';
import api from '../../api'

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
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

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await api.post(`./send-reset-otp`, { email });
      setMessage(response.data.message);
      setOtpSent(true);
      // Clear success message after a delay
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!Object.values(passwordRequirements).every(Boolean)) {
      setError('Please meet all password requirements');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post(`/reset-password`, {
        email,
        otp,
        newPassword
      });

      setResetSuccess(true);
      setMessage('Password reset successful!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">Processing...</div>
        </div>
      )}
      <div className={`forgot-password-box ${resetSuccess ? 'success' : ''}`}>
        {resetSuccess && <div className="success-animation">✓</div>}
        <h2 className="title-animation">Reset Password</h2>
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="form-animation">
            <div className="form-group">
              <div className="input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="animated-input"
                />
                <label className="floating-label">Email</label>
              </div>
            </div>
            <button type="submit" className="reset-button" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send OTP'}
              <span className="button-effect"></span>
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="form-animation">
            <div className="form-group">
              <div className="input-container">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="animated-input"
                />
                <label className="floating-label">Enter OTP</label>
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  required
                  className="animated-input"
                />
                <label className="floating-label">New Password</label>
                <button
                  type="button"
                  className="toggle-password1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
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
              </div>
            </div>
            <div className="form-group">
              <div className="input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="animated-input"
                />
                <label className="floating-label">Confirm Password</label>
                <button
                  type="button"
                  className="toggle-password2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            <button type="submit" className="reset-button" disabled={isLoading}>
              {isLoading ? 'Resetting...' : 'Reset Password'}
              <span className="button-effect"></span>
            </button>
          </form>
        )}
        <p className="back-to-login">
          <a href="#" onClick={() => navigate('/login')}>
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
