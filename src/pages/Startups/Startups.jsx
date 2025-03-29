import { useState } from 'react';
import './Startups.css';
import { FaEnvelope, FaWhatsapp, FaUser, FaBriefcase, FaClock } from 'react-icons/fa';

const startupData = [
  {
    id: 1,
    name: 'Dev-A-Dims',
    project: 'MedicKit',
    description: 'Building innovative healthcare solutions for modern medical Pharmacies to provide a Platform for Drugs Inventory Management and Supply Chain Tracking System.',
    teamSize: 9,
    openPositions: 2,
    techStack: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS', 'Flutter', 'Node.js', 'Express.js'],
    contactInfo: {
      leader: {
        name: 'Arin Jain',
        role: 'Full Stack Lead',
        email: '70001933arin@gmail.com',
        whatsapp: '+91 9301459291',
        availableHours: '9:00 AM - 6:00 PM EST',
        preferredContact: 'email'
      }
    },
    teamMembers: [
      { name: 'Arin Jain', role: 'Full Stack Lead', focus: 'Architecture & Backend' },
      { name: 'Arpit Shukla', role: 'Frontend Developer', focus: 'UI/UX Framing' },
      { name: 'Vikshit Sharma', role: 'Frontend Developer', focus: 'Frontend Designing Components' },
      { name: 'Shekh Khwaja', role: 'Backend Developer', focus: 'API Handling' },
      { name: 'Ayushman Gupta', role: 'AI Developer', focus: 'Development of AI' },
      { name: 'Aastha Singh', role: 'Data Analyst', focus: 'Dataset for AI' },
      { name: 'Mradul Deodhiya', role: 'DataBase Admisnistrator', focus: 'Create Database' },
      { name: 'Kartik Jain', role: 'DataBase Admisnistrator', focus: 'Handle Database' },
      { name: 'Kapil Lakhera', role: 'UI/UX Developer', focus: 'Designs the UI' },
    ]
  }
];

function Startups() {
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showStartupApplicationModal, setShowStartupApplicationModal] = useState(false);

  const handleViewDetails = (startup) => {
    setSelectedStartup(startup);
    setShowModal(true);
  };

  const handleApplyClick = (startup) => {
    setSelectedStartup(startup);
    setShowStartupApplicationModal(true);
  };

  const handleRegisterStartup = () => {
    setShowApplicationModal(true);
  };

  const downloadApplicationForm = () => {
    const formUrl = '/src/assets/registerstartup.pdf';
    const fileName = 'startup_registration_form.pdf';
    const link = document.createElement('a');
    link.href = formUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="startups-container">
      <div className="startups-hero">
        <h1>Community Startups</h1>
        <p>Explore innovative projects and join amazing teams building the future</p>
      </div>

      <div className="startups-grid">
        {startupData.map((startup) => (
          <div key={startup.id} className="startup-card">
            <h2>{startup.name}</h2>
            <h3>{startup.project}</h3>
            <p>{startup.description}</p>
            <div className="startup-stats">
              <span>Team Size: {startup.teamSize}</span>
              <span>Open Positions: {startup.openPositions}</span>
            </div>
            <div className="startup-actions">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails(startup)}
              >
                View Details
              </button>
              <button className="apply-btn" onClick={() => handleApplyClick(startup)}>
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Apply for Startup Section */}
      <div className="apply-startup-section">
        <h2>Start Your Own Startup</h2>
        <p>Have an innovative idea? Join our community and turn it into reality!</p>
        <button className="apply-startup-btn" onClick={handleRegisterStartup}>
          Register your Startup
        </button>
      </div>

      {/* Startup Details Modal */}
      {showModal && selectedStartup && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedStartup.name} - {selectedStartup.project}</h2>
            <div className="modal-section">
              <h3>Project Overview</h3>
              <p>{selectedStartup.description}</p>
            </div>
            <div className="modal-section">
              <h3>Technology Stack</h3>
              <div className="tech-stack-tags">
                {selectedStartup.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="modal-section">
              <h3>Team Members</h3>
              <div className="team-members-list">
                {selectedStartup.teamMembers.map((member, index) => (
                  <div key={index} className="team-member-card">
                    <h4>{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <p className="member-focus">{member.focus}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Startup Application Modal */}
      {showStartupApplicationModal && selectedStartup && (
        <div className="modal-overlay" onClick={() => setShowStartupApplicationModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Apply to {selectedStartup.name}</h2>
            <div className="modal-section">
              <h3>Contact Information</h3>
              <div className="leader-info">
                <div className="leader-header">
                  <FaUser className="leader-icon" />
                  <h4>{selectedStartup.contactInfo.leader.name}</h4>
                </div>
                <div className="leader-role">
                  <FaBriefcase className="role-icon" />
                  <span>{selectedStartup.contactInfo.leader.role}</span>
                </div>
                <div className="leader-availability">
                  <FaClock className="availability-icon" />
                  <span>Available: {selectedStartup.contactInfo.leader.availableHours}</span>
                </div>
              </div>
              <p>To apply for this startup, please reach out through:</p>
              <div className="contact-info">
                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <span>{selectedStartup.contactInfo.leader.email}</span>
                  {selectedStartup.contactInfo.leader.preferredContact === 'email' && 
                    <span className="preferred-badge">Preferred</span>}
                </div>
                <div className="contact-method">
                  <FaWhatsapp className="contact-icon" />
                  <span>{selectedStartup.contactInfo.leader.whatsapp}</span>
                  {selectedStartup.contactInfo.leader.preferredContact === 'whatsapp' && 
                    <span className="preferred-badge">Preferred</span>}
                </div>
              </div>
              <p>Please include your resume and a brief introduction when contacting.</p>
            </div>
            <button
              className="modal-close"
              onClick={() => setShowStartupApplicationModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showApplicationModal && (
        <div className="modal-overlay" onClick={() => setShowApplicationModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Startup Registration Process</h2>
            <div className="rules-section">
              <h3>Requirements:</h3>
              <ul className="rules-list">
                <li>Minimum 3 core team members</li>
                <li>Viable product/service idea</li>
                <li>Business plan draft</li>
                <li>Technical feasibility assessment</li>
                <li>Market research outline</li>
              </ul>
              <h3>Process:</h3>
              <ol className="process-list">
                <li>Download and complete the application form</li>
                <li>Prepare required documentation</li>
                <li>Submit business proposal at the C-211 class beside the Incubation Center</li>
                <li>Present your idea to the incubation committee</li>
                <li>Complete registration if approved</li>
              </ol>
            </div>
            <div className="modal-actions">
              <button className="download-btn" onClick={downloadApplicationForm}>
                Download Application Form
              </button>
              <button
                className="modal-close"
                onClick={() => setShowApplicationModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Startups;