import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title-animation">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="form-animation">
          <div className="form-group">
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="animated-input"
              />
              <label className="floating-label">Email</label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="animated-input"
              />
              <label className="floating-label">Password</label>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="form-actions">
            <a href="#" onClick={() => navigate('/forgot-password')} className="forgot-password-link">
              Forgot Password?
            </a>
            <button type="submit" className="login-button">
              Login
              <span className="button-effect"></span>
            </button>
          </div>
        </form>
        <p className="signup-link">
          Dont have an account? <a href="#" onClick={() => navigate('/signup')}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;