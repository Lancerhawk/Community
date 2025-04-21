import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="title-animation">Create Account</h2>
        <form onSubmit={handleSubmit} className="form-animation">
          <div className="form-group">
            <div className="input-container">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="animated-input"
              />
              <label className="floating-label">Full Name</label>
            </div>
          </div>
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
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">{showPassword ? "🙈" : "👁️"}</button>
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="animated-input"
              />
              <label className="floating-label">Confirm Password</label>
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password">{showConfirmPassword ? "🙈" : "👁️"}</button>
            </div>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
            <span className="button-effect"></span>
          </button>
        </form>
        <p className="login-link">
          Already have an account?{' '}
          <a href="#" onClick={() => navigate('/login')}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;