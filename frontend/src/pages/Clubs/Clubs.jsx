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
      leader: 'Arin Jain (9301459291)',
   //   contact: '9301459291',
      manager:'Arpit Shukla (9755489508)',
     // contact: '9755489508'
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
      leader: 'Ayushman Gupta (9131674063)',
      manager: 'Veerendra Soni (7489339369)'
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
  leader: 'Parikshit Sharma (8817763021)',
  manager: 'Ishika Chouksey (7000095614)'
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
   {
    id: 5,
    name: 'Java Club',
    domain: 'Java Club',
    shortDescription: 'Java Club is a community for learning, sharing, and building projects with the power of Java programming.',
    leadership: {
      leader: 'Nikita Singh',
      manager: '------Yet to be Choosen-------'
    },
    rules: [
      'Regular attendance in Java coding sessions and workshops',
  'Active participation in team-based Java projects',
  'Adherence to clean coding and best practices in Java',
  'Proper documentation of code and project workflows',
  'Sharing of knowledge, solutions, and learnings with the club'

    ],
    fullDescription: 'Welcome to the Java Club – a community of learners and innovators passionate about mastering Java programming. Our club focuses on building a strong foundation in core Java concepts, exploring advanced topics, and applying skills through projects, hackathons, and collaborative learning. Whether you are a beginner or an experienced coder, Java Club is the place to code, connect, and create together',
    activities: [
  'Java coding workshops',
  'Collaborative project development',
  'Problem-solving and algorithm challenges',
  'Java framework and library exploration',
  'Guest lectures and industry expert sessions'

    ],
    icon: '☕'
  }
  ,
   {
    id: 6,
    name: 'Python Club',
    domain: 'Python Club',
    shortDescription: 'Python Club – Learn, Code, and Innovate with Python.',
    leadership: {
      leader: 'Harsh Raikwar (6260329127)',
      manager: 'Shivansh Gupta (7024801472)'
    },
    rules: [
      'Respect all members and support collaborative learning',
  'Be consistent and participate actively in club activities.',
  'Share knowledge, resources, and coding practices openly.',
  'Keep projects and discussions focused on Python and related technologies',
  'Maintain discipline, integrity, and enthusiasm in every session.'

    ],
    fullDescription: 'The Python Club is a community of learners and enthusiasts exploring Python programming through projects, workshops, and peer learning to build coding skills and solve real-world problems.',
    activities: [
  'The club conducts coding workshops to strengthen Python skills.',
  'Members work on mini projects to apply what they learn.',
  'Hackathons and coding challenges are organized to boost problem-solving.',
  'Guest talks and demos help students explore real-world Python applications.'
   'Peer learning and code reviews encourage collaboration and improvement.'
    ],
  
    icon: '🐍'
  }
  
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
        else if (selectedClub.name === 'Java Club') {
        formUrl = '/JavaClub.pdf';
        fileName = `${selectedClub.name.toLowerCase().replace(/ /g, '_')}_membership_form.pdf`;
      }
          else if (selectedClub.name === 'Python Club') {
        formUrl = '/PythonClub.pdf';
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
            <p><strong>Club Leader:</strong> {selectedClub.leadership.leader}</p>
            <p><strong>Club Manager:</strong> {selectedClub.leadership.manager}</p>
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
                <li>Submit proposal and documentation to the secretary. For any queries please contact :
                ~ kartik jain (7440473074)
                ~ jaya karwani (7389361388)</li>
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














