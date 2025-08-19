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
    leadership: {
      leader: {name: "Arin Jain",
               contact: "9301459291"
              },
      manager: {name: "Arpit Shukla",
                contact: "9755489508"
               }
    },
    rules: [
      'Weekly offline sessions mandatory for all members',
      'Hybrid learning with online resources available',
      'Project implementation after each module',
      'Regular progress tracking and updates required',
      'Zero tolerance for misconduct or disruption'
    ],
    fullDescription: 'Our Web Development Club is a dynamic community of aspiring developers who are passionate about creating innovative web solutions. We focus on both frontend and backend technologies, organizing workshops, coding sessions, and collaborative projects. The club follows a structured curriculum with defined milestones and emphasizes practical learning.',
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
    leadership: {
      leader: 'Ayushman Gupta',
      manager: 'Veerendra Soni'
    },
    rules: [
      'Mandatory participation in weekly problem-solving sessions',
      'Regular code reviews and optimization discussions',
      'Structured learning path from basic to advanced algorithms',
      'Collaborative problem-solving encouraged',
      'Active participation in coding competitions'
    ],
    fullDescription: 'Our DSA Club is dedicated to mastering the fundamentals of data structures and algorithms. We organize coding challenges, algorithmic problems, and workshops to enhance problem-solving skills. Members follow a systematic approach to learning with hands-on implementation.',
    activities: [
      'Weekly coding challenges',
      'Algorithm design sessions',
      'Data structure visualization',
      'Code optimization challenges',
      'Algorithm design contests'
    ],
    icon: '📝'
  },
  {
    id: 3,
    name: 'Data Science Club',
    domain: 'Data Science',
    shortDescription: 'Exploring data analytics and machine learning solutions',
    leadership: {
      leader: '------Yet to be Choosen-------',
      manager: '------Yet to be Choosen-------'
    },
    rules: [
      'Regular attendance in data analysis workshops',
      'Participation in team-based data projects',
      'Adherence to data ethics guidelines',
      'Proper documentation of analysis methods',
      'Sharing of insights and findings with the club'
    ],
    fullDescription: 'The Data Science Club is a vibrant community focused on exploring and implementing data analytics, machine learning, and statistical analysis. We work with real-world datasets, develop predictive models, and learn industry-standard tools and techniques. Our goal is to help members build strong foundations in data science while working on practical projects.',
    activities: [
      'Data analysis workshops',
      'Machine learning projects',
      'Statistical modeling sessions',
      'Data visualization challenges',
      'Industry expert seminars'
    ],
    icon: '📊'
  },
  {
    id: 4,
    name: 'Trading Club',
domain: 'Trading and Finance',
shortDescription: 'Unlocking financial literacy through hands-on trading and investment education',
leadership: {
  leader: 'Parikshit Sharma',
  manager: 'Ishika Chouksey'
},
rules: [
  'Mandatory participation in weekly doubt-solving sessions',
  'Regular reviews and optimization discussions',
  'Structured learning from basics to advanced topics',
  'Collaborative work and engagement encouraged',
  'Active involvement in competitions'
],
fullDescription: 'The Trading Club is a hub for students passionate about finance, trading, and wealth management. We offer a comprehensive platform for learning about stocks, forex, and commodities through theory, quizzes, and live sessions. Members grow together in a collaborative community dedicated to financial empowerment and problem-solving.',
activities: [
  'Live trading sessions',
  'Basic to advanced trading theory',
  'Interactive quizzes and discussions',
  'Forex, stocks, and commodities trading',
  'Exam-oriented trading modules'
],
 icon: '📈'
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
      }else if (selectedClub.name === 'DSA Club') {
        formUrl = '/DSAclub.pdf';
        fileName = `${selectedClub.name.toLowerCase().replace(/ /g, '_')}_membership_form.pdf`;
      }else if (selectedClub.name === 'Data Science Club') {
        formUrl = '/DataScienceClub.pdf';
        fileName = `${selectedClub.name.toLowerCase().replace(/ /g, '_')}_membership_form.pdf`;
      }else if (selectedClub.name === 'Trading Club') {
        formUrl = '/TradingClub.pdf';
        fileName = `${selectedClub.name.toLowerCase().replace(/ /g, '_')}_membership_form.pdf`;
      }
       else {
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
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{selectedClub.name}</h2>
          <div className="club-leadership">
            <h3>Club Leadership</h3>
            <p><strong>Club Leader:</strong> {selectedClub.leadership.leader.name}({selectedClub.leadership.leader.contact})</p>
            <p><strong>Club Manager:</strong> {selectedClub.leadership.manager.name}({selectedClub.leadership.manager.contact})</p>
          </div>
          <p className="modal-description">{selectedClub.fullDescription}</p>
          <h3>Club Rules</h3>
          <ul>
            {selectedClub.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
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
            >×</button>
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


