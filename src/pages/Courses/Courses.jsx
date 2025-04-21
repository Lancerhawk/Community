
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const courseCategories = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Learn to build modern web applications from front to back',
    technologies: [
      { name: 'HTML', icon: '🌐', level: 'Beginner', description: 'The standard markup language for web pages' },
      { name: 'CSS', icon: '🎨', level: 'Beginner', description: 'Style sheet language for designing web pages' },
      { name: 'JavaScript', icon: '⚡', level: 'Intermediate', description: 'Programming language for interactive web development' },
      { name: 'React', icon: '⚛️', level: 'Intermediate', description: 'JavaScript library for building user interfaces' },
      { name: 'Node.js', icon: '🟢', level: 'Advanced', description: 'JavaScript runtime for server-side development' }
    ]
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications',
    technologies: [
      { name: 'React Native', icon: '📱', level: 'Intermediate', description: 'Build native apps using React' },
      { name: 'Swift', icon: '🍎', level: 'Advanced', description: 'Programming language for iOS development' },
      { name: 'Kotlin', icon: '🤖', level: 'Advanced', description: 'Modern programming language for Android development' }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Master data analysis, machine learning, and AI',
    technologies: [
      { name: 'Python', icon: '🐍', level: 'Beginner', description: 'Versatile programming language for data science' },
      { name: 'R', icon: '📊', level: 'Intermediate', description: 'Statistical computing and graphics' },
      { name: 'TensorFlow', icon: '🧠', level: 'Advanced', description: 'Open-source platform for machine learning' }
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Learn cloud platforms and DevOps practices',
    technologies: [
      { name: 'AWS', icon: '☁️', level: 'Intermediate', description: 'Amazon Web Services cloud platform' },
      { name: 'Docker', icon: '🐳', level: 'Intermediate', description: 'Platform for containerized applications' },
      { name: 'Kubernetes', icon: '⚓', level: 'Advanced', description: 'Container orchestration platform' }
    ]
  }
];

function Courses() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filterCourses = (category) => {
    return category.technologies.filter(tech => 
      selectedLevel === 'all' || tech.level.toLowerCase() === selectedLevel
    );
  };

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1 className="courses-title">Explore Learning Paths</h1>
        <div className="filters">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            {courseCategories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <select 
            value={selectedLevel} 
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="categories-container">
        {(selectedCategory === 'all' ? courseCategories : 
          courseCategories.filter(cat => cat.id === selectedCategory)
        ).map(category => (
          <div key={category.id} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{category.name}</h2>
              <p className="category-description">{category.description}</p>
            </div>
            <div className="courses-grid">
              {filterCourses(category).map((tech, index) => (
                <div key={index} className="course-card">
                  <div className="course-icon">{tech.icon}</div>
                  <h3 className="course-name">{tech.name}</h3>
                  <span className={`course-level ${tech.level.toLowerCase()}`}>{tech.level}</span>
                  <p className="course-description">{tech.description}</p>
                  <button 
                    className={`course-button ${(tech.name !== 'HTML' && tech.name !== 'CSS') ? 'disabled' : ''}`}
                    disabled={tech.name !== 'HTML' && tech.name !== 'CSS'}
                    onClick={() => {
                      if (tech.name === 'HTML') {
                        navigate('/learning/html');
                      } else if (tech.name === 'CSS') {
                        navigate('/learning/css');
                      }
                    }}
                  >
                    {tech.name === 'HTML' || tech.name === 'CSS' ? 'Learn Now!' : 'Coming Soon'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;