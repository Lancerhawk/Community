import { useState } from "react";
import "./Home.css";
import Logo from '../../assets/logo.jpg';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';

function Home() {
  const [members] = useState([
    {
      id: 1,
      name: "Arin Jain",
      role: "Community Lead",
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
      role: "Community Manager",
      college: "BGIEM, Jabalpur",
      year: "3rd Year",
      avatar: photo2,
      specialties: ["Project Management", "Web Development"],
      achievements: ["Research Publication", "Open Source Contributor"],
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/arpit-s-5207a4253/",
      },
    },
  ]);

  return (
    <div className="home">
      <div className="hero">
        <img
          src={Logo}
          alt="Coding Era Logo"
          className="hero-logo"
        />

        <h1>Welcome to Coding Era!</h1>
        <p>Your gateway to exciting hackathons and tech news</p>
        <a
          href="https://chat.whatsapp.com/HXlBHOhjgnfGiZUOS2erAO"
          target="_blank"
          rel="noopener noreferrer"
          className="join-btn"
        >
          Join Community
        </a>
      </div>

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
                <img src={member.avatar} alt={member.name} />
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
    </div>
  );
}

export default Home;
