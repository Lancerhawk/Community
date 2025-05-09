import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import api from '../../api'; // or adjust the path accordingly

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await api.post('/login', formData);

      const data = response.data;

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('username', data.username);
      localStorage.setItem('isVerified', data.veri === 'verified' ? 'true' : 'false');
      localStorage.setItem('roleAdmin', data.roleAdmin ? 'true' : 'false');

      setLoginSuccess(true);
      setTimeout(() => {
        navigate('/courses');
        window.location.reload();
      }, 1000);
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <div className={`login-box ${loginSuccess ? 'success' : ''}`}>
        {loginSuccess && <div className="success-animation">✓</div>}
        <h2 className="title-animation">Welcome Back</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="form-animation">
          <div className="form-group">
            <div className="input-container">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Email</label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required className="animated-input" />
              <label className="floating-label">Password</label>
              <button type="button" className="toggle-password2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="form-actions">
            <a href="#" onClick={() => navigate('/forgot-password')} className="forgot-password-link">
              Forgot Password?
            </a>
            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
              <span className="button-effect"></span>
            </button>
          </div>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="#" onClick={() => navigate('/register')}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
