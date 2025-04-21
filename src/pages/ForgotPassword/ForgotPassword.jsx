import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setMessage('If an account exists with this email, you will receive password reset instructions.');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2 className="title-animation">Reset Password</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="form-animation">
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
            <button type="submit" className="reset-button">
              Send Reset Link
              <span className="button-effect"></span>
            </button>
          </form>
        ) : (
          <div className="message-container">
            <p className="success-message">{message}</p>
          </div>
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