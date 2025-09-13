import { useState, useEffect } from "react";
import "./Home.css";
import Logo from '../../assets/logo.png';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import { FaCode, FaUsers, FaLaptopCode, FaTrophy, FaInstagram, FaLinkedin } from 'react-icons/fa';
import kartik from '../../assets/photo3.png';
import ayushman from '../../assets/photo4.png';
import jaya from '../../assets/photo5.jpg';
import kapil from '../../assets/photo6.jpg';
import khwaja from '../../assets/photo7.png';
import deepanshi from '../../assets/photo8.jpg';
import shanti from '../../assets/photo9.png';
import suneha from '../../assets/photo10.png';
import viksit from '../../assets/photo11.jpg';

function Home() {
  const [stats, setStats] = useState({
    members: 0,
    hackathons: 0,
    projects: 0,
    awards: 0
  });

  useEffect(() => {
    const targetStats = {
      members: 500,
      hackathons: 1,
      projects: 10,
      awards: 2
    };

    const interval = setInterval(() => {
      setStats(prev => {
        const newStats = { ...prev };
        let completed = true;

        Object.keys(targetStats).forEach(key => {
          if (prev[key] < targetStats[key]) {
            newStats[key] = prev[key] + Math.ceil((targetStats[key] - prev[key]) / 20);
            completed = false;
          }
        });

        if (completed) clearInterval(interval);
        return newStats;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FaCode />,
      title: "Coding Excellence",
      description: "Learn from expert developers and enhance your coding skills through hands-on projects."
    },
    {
      icon: <FaUsers />,
      title: "Vibrant Community",
      description: "Join a thriving community of passionate developers, share knowledge, and grow together."
    },
    {
      icon: <FaLaptopCode />,
      title: "Hackathon Events",
      description: "Participate in exciting hackathons and turn your innovative ideas into reality."
    },
    {
      icon: <FaUsers />,
      title: "Clubs",
      description: "Join or Create vibrant clubs and communities to network, collaborate, and grow with like-minded individuals."
    }

  ];

  const testimonials = [
    {
      text: "Coding Era! has been instrumental in my growth as a developer. The community is incredibly supportive!",
      author: "Veerendra Soni",
      role: "Mobile App Developer"
    },
    {
      text: "The hackathons organized by Coding Era are top-notch. I've learned so much and made great connections.",
      author: "Mradul Deodhiya",
      role: "Web Developer"
    },
    {
      text: "An amazing platform that helped me transition from a beginner to a confident developer.",
      author: "Siddharth Yadav",
      role: "Fullstack Developer"
    }
  ];

  const [members] = useState([
    {
      id: 1,
      name: "Arin Jain",
      role: "President",
      college: "BGIEM, Jabalpur",
      year: "3rd Year",
      avatar: photo1,
      specialties: ["FullStack Developer", "Game Developer", "UI/UX Designer"],
      achievements: [
        "Smart India Hackathon 2024 Finalist",
        "AI for HealthCare Hackathon Winner",
        "Open Source Contributor",
      ],
      socialLinks: {
        github: "https://portfolio-new-git-master-lancerhawks-projects.vercel.app/",
        linkedin: "https://www.linkedin.com/in/arin-jain-782098258/",
      },
    },
    {
      id: 2,
      name: "Arpit Shukla",
      role: "Vice President",
      college: "BGIEM, Jabalpur",
      year: "3rd Year",
      avatar: photo2,
      specialties: ["Project Management", "Web Development", "UI/UX Desinger"],
      achievements: ["Research Publication", "Open Source Contributor", "Project Manager"],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/arpit-s-5207a4253/",
      },

    },
  ]);

  return (
    <div className="home">
      <div className="hero">
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <img
          src={Logo}
          alt="Coding Era Logo"
          className="hero-logo"
          draggable="false"
        />

        <h1>Welcome to Coding Era!</h1>
        <p>Your gateway to exciting hackathons and tech news</p>
        <a
          href="https://chat.whatsapp.com/HXlBHOhjgnfGiZUOS2erAO"
          target="_blank"
          rel="noopener noreferrer"
          className="join-btn"
        >
          Join Our Community on Whatsapp
        </a>
        <div className="community-social-links">
          <a
            href="https://www.instagram.com/codingeracommunity/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/106917834/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <section className="features-section">
        <h2 className="section-title">Why Choose Coding Era!?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <div className="stat-number">{stats.members}+</div>
            <div className="stat-label">Community Members</div>
          </div>
          <div className="stat-card">
            <FaLaptopCode className="stat-icon" />
            <div className="stat-number">{stats.hackathons}+</div>
            <div className="stat-label">Hackathons Hosted</div>
          </div>
          <div className="stat-card">
            <FaCode className="stat-icon" />
            <div className="stat-number">{stats.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <FaTrophy className="stat-icon" />
            <div className="stat-number">{stats.awards}+</div>
            <div className="stat-label">Awards Won</div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Members Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="community-section">
        <h2 className="section-title">Our Community Head</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="member-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-college">{member.college}</p>
              <p className="member-year">{member.year}</p>

              <div className="member-specialties">
                {member.specialties.map((specialty, i) => (
                  <span key={i} className="specialty">{specialty}</span>
                ))}
              </div>

              <div className="member-achievements">
                {member.achievements.map((achievement, i) => (
                  <span key={i} className="achievement">{achievement}</span>
                ))}
              </div>

              <div className="social-links">
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Portfolio
                </a>
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Our Team Members</h2>

        <div className="team-category">Secretaries</div>
        <div className="members-grid">
          {[
            {
              id: 3,
              name: "Kartik Jain",
              role: "Technical Secretary",
              skills: ["Project Management", "Documentation", "Team Coordination"],
              linkedin: "https://www.linkedin.com/in/kartik-jain-b24342316/",
              avatar: kartik,
            },
            {
              id: 4,
              name: "Jaya Karwani",
              role: "Administrative Secretary",
              skills: ["Event Planning", "Communication", "Resource Management"],
              linkedin: "https://www.linkedin.com/in/jaya-karwani-3088b1314/",
              avatar: jaya,
            }
          ].map((member, index) => (
            <div key={member.id} className="member-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-specialties">
                {member.skills.map((skill, i) => (
                  <span key={i} className="specialty">{skill}</span>
                ))}
              </div>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>

        <div className="team-category">Technical Heads</div>
        <div className="members-grid">
          {[
            {
              id: 5,
              name: "Shekh Khwaja",
              role: "Technical Master",
              skills: ["Team Management", "UI/UX Design", "Data Handling"],
              linkedin: "https://linkedin.com",
              avatar: khwaja,
            },
            {
              id: 6,
              name: "Viksit Sharma",
              role: "Web Master",
              skills: ["Web Development", "DB Designer", "UI/UX Design"],
              linkedin: "https://linkedin.com",
              avatar: viksit,
            },
            {
              id: 7,
              name: "Deepanshi Gupta",
              role: "Web Master 2",
              skills: ["Web Development", "Data Handling", "Java"],
              linkedin: "https://linkedin.com",
              avatar: deepanshi,
            },
            {
              id: 8,
              name: "Veerendra Soni",
              role: "Mobile App Developer",
              skills: ["Flutter", "Nodejs", "PostgreSQL"],
              linkedin: "https://linkedin.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
            }
          ].map((member, index) => (
            <div key={member.id} className="member-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-specialties">
                {member.skills.map((skill, i) => (
                  <span key={i} className="specialty">{skill}</span>
                ))}
              </div>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>

        <div className="team-category">Operations Heads</div>
        <div className="members-grid">
          {[
            {
              id: 9,
              name: "Aastha Singh",
              role: "Social Media Handler",
              skills: ["Event Management", "Marketing", "Social Media"],
              linkedin: "https://linkedin.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan"
            },
            {
              id: 10,
              name: "Ayushman Gupta",
              role: "Content Writer, Events Head",
              skills: ["Event Management", "Partnership Management", "AI Developer"],
              linkedin: "https://linkedin.com",
              avatar: ayushman,
            }
          ].map((member, index) => (
            <div key={member.id} className="member-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-specialties">
                {member.skills.map((skill, i) => (
                  <span key={i} className="specialty">{skill}</span>
                ))}
              </div>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>

        <div className="team-category">Design Team</div>
        <div className="members-grid">
          {[
            {
              id: 11,
              name: "Kapil Lakhera",
              role: "Designer Lead",
              skills: ["Frontend Dev", "UI/UX Designer", "Figma"],
              linkedin: "https://linkedin.com",
              avatar: kapil,
            },
            {
              id: 12,
              name: "Shanti Mishra",
              role: "Designer",
              skills: ["Canva Designer", "UI/UX"],
              linkedin: "https://linkedin.com",
              avatar: shanti,
            }
          ].map((member, index) => (
            <div key={member.id} className="member-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-specialties">
                {member.skills.map((skill, i) => (
                  <span key={i} className="specialty">{skill}</span>
                ))}
              </div>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>

        <div className="team-category">Organizers</div>
        <div className="members-grid">
          {[
            {
              id: 13,
              name: "Suneha Shrivastava",
              role: "Event Coordinator",
              skills: ["Entrepreneur", "Event Organizer", "Sponsorship Management"],
              linkedin: "https://linkedin.com",
              avatar: suneha,
            },
            {
              id: 14,
              name: "Mradul Deodhiya",
              role: "Event Coordinator",
              skills: ["TroubleShooting", "Event Organizer", "Event Handling"],
              linkedin: "https://linkedin.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina"
            }
          ].map((member, index) => (
            <div key={member.id} className="member-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-specialties">
                {member.skills.map((skill, i) => (
                  <span key={i} className="specialty">{skill}</span>
                ))}
              </div>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
