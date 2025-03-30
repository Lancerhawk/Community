import { useState } from 'react';
import './Clubs.css';

const comingSoonClubs = [
  {
    id: 'cs1',
    name: 'Game Development Club',
    domain: 'Game Development',
    shortDescription: 'Creating immersive gaming experiences',
    icon: '🎮'
  },
  {
    id: 'cs2',
    name: 'Blockchain Club',
    domain: 'Blockchain Technology',
    shortDescription: 'Exploring decentralized solutions',
    icon: '⛓️'
  },
  {
    id: 'cs3',
    name: 'IoT Club',
    domain: 'Internet of Things',
    shortDescription: 'Connecting the physical and digital worlds',
    icon: '🔌'
  }
];

const clubsData = [
  {
    id: 1,
    name: 'Web Development Club',
    domain: 'Web Development',
    shortDescription: 'Crafting modern web experiences and solutions',
    fullDescription: 'Our Web Development Club is a dynamic community of aspiring developers who are passionate about creating innovative web solutions. We focus on both frontend and backend technologies, organizing workshops, coding sessions, and collaborative projects.',
    activities: [
      'Weekly coding workshops',
      'Project collaborations',
      'Tech talks and seminars',
      'Hackathon preparations',
      'Industry expert sessions'
    ],
    icon: '🌐'
  },{
    id: 2,
    name: 'DSA Club',
    domain: 'Data Structures and Algorithms',
    shortDescription: 'Solving complex problems through efficient algorithms',
    fullDescription: 'Our DSA Club is dedicated to mastering the fundamentals of data structures and algorithms. We organize coding challenges, algorithmic problems, and workshops to enhance problem-solving skills.',
    activities: [
      'Weekly coding challenges',
      'Algorithm design sessions',
      'Data structure visualization',
      'Code optimization challenges',
      'Algorithm design contests'
    ],
    icon: '📝'
  },
//   {
//     id: 2,
//     name: 'AI/ML Club',
//     domain: 'Artificial Intelligence',
//     shortDescription: 'Exploring the frontiers of AI and Machine Learning',
//     fullDescription: 'The AI/ML Club is dedicated to exploring and implementing cutting-edge artificial intelligence and machine learning solutions. We work on real-world problems and stay updated with the latest developments in the field.',
//     activities: [
//       'ML model development workshops',
//       'AI research paper discussions',
//       'Data science projects',
//       'Algorithm implementation sessions',
//       'Industry collaboration projects'
//     ],
//     icon: '🤖'
//   },
//   {
//     id: 3,
//     name: 'Cybersecurity Club',
//     domain: 'Security',
//     shortDescription: 'Securing the digital frontier',
//     fullDescription: 'Our Cybersecurity Club focuses on understanding and implementing security measures in the digital world. We conduct practical sessions on ethical hacking, network security, and cyber defense mechanisms.',
//     activities: [
//       'CTF competitions',
//       'Security audit workshops',
//       'Penetration testing practice',
//       'Security tool development',
//       'Cyber awareness campaigns'
//     ],
//     icon: '🔒'
//   }
];

function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleViewDetails = (club) => {
    setSelectedClub(club);
  };

  const handleJoinClub = (club) => {
    setSelectedClub(club);
    setShowJoinModal(true);
  };

  const closeModal = () => {
    setSelectedClub(null);
    setShowJoinModal(false);
  };

  const downloadForm = () => {
    let formUrl;
    let fileName;

    if (showRegisterModal) {
      formUrl = '/registerclub.pdf';
      fileName = 'club_registration_form.pdf';
    } else if (showJoinModal && selectedClub) {
      if (selectedClub.name === 'Web Development Club') {
        formUrl = '/Web Development Club Approval Form.pdf';
        fileName = `${selectedClub.name.toLowerCase().replace(/ /g, '_')}_membership_form.pdf`;
      } else {
        alert('Form not available yet for this club. Please check back later.');
        return;
      }
    } else {
      alert('Form not available. Please try again.');
      return;
    }

    const link = document.createElement('a');
    link.href = formUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="clubs-container">
      <h1 className="clubs-title">Our Technical Clubs</h1>
      <div className="clubs-grid">
        {clubsData.map((club) => (
          <div key={club.id} className="club-card">
            <div className="club-icon">{club.icon}</div>
            <h2>{club.name}</h2>
            <p className="club-domain">{club.domain}</p>
            <p className="club-description">{club.shortDescription}</p>
            <div className="club-actions">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails(club)}
              >
                View Details
              </button>
              <button
                className="join-club-btn"
                onClick={() => handleJoinClub(club)}
              >
                Join Club
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedClub && !showJoinModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>Close</button>
            <h2>{selectedClub.name}</h2>
            <p className="modal-description">{selectedClub.fullDescription}</p>
            <div className="activities-section">
              <h3>Club Activities</h3>
              <ul className="activities-list">
                {selectedClub.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* Coming Soon Section */}
      <h2 className="clubs-title" style={{ fontSize: '2rem', marginTop: '4rem' }}>Coming Soon</h2>
      <div className="clubs-grid">
        {comingSoonClubs.map((club) => (
          <div key={club.id} className="club-card coming-soon-card">
            <div className="club-icon">{club.icon}</div>
            <h2>{club.name}</h2>
            <p className="club-domain">{club.domain}</p>
            <p className="club-description">{club.shortDescription}</p>
            <div className="coming-soon-overlay">
              <span>Coming Soon</span>
            </div>
          </div>
        ))}
      </div>

      {/* Apply for Club Section */}
      <div className="apply-startup-section">
        <h2>Start Your Own Club</h2>
        <p>Have an innovative idea for a technical club? Join and Create Clubs in our community and make it happen!</p>
        <button className="apply-startup-btn" onClick={() => setShowRegisterModal(true)}>
          Register Your Club
        </button>
      </div>

      {/* Register Club Modal */}
      {showRegisterModal && (
        <div className="modal-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setShowRegisterModal(false)}
            >Close</button>
            <h2>Club Registration Process</h2>
            <div className="rules-section">
              <h3>Requirements:</h3>
              <ul className="rules-list">
                <li>Minimum 10 active student members</li>
                <li>At least one faculty advisor</li>
                <li>Clear mission and objectives</li>
                <li>Detailed semester activity plan</li>
                <li>No overlap with existing clubs</li>
              </ul>
              <h3>Process:</h3>
              <ol className="process-list">
                <li>Download and fill the registration form</li>
                <li>Gather required info about your management Teams</li>
                <li>Submit proposal and documentation to the C-211 beside Incubation Center at any Working Day</li>
                {/* <li>Presen</li> */}
                <li>Await approval notification</li>
              </ol>
            </div>
            <div className="modal-actions">
              <button className="download-form-btn" onClick={downloadForm}>
                Download Registration Form
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Join Modal */}
      {selectedClub && showJoinModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content join-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Join {selectedClub.name}</h2>
            <div className="join-instructions">
              <p>To join the {selectedClub.name}, please follow these steps:</p>
              <ol>
                <li>Download the membership form below</li>
                <li>Fill out all required information in the form</li>
                <li>Visit the C-211 Class Beside the Incubation center during college working hours</li>
                <li>Submit the completed form to the club coordinators or Community Secretary</li>
              </ol>
            </div>
            <button className="download-form-btn" onClick={downloadForm}>
              Download Form
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Clubs;