import { useState } from 'react'
import './Hackathons.css'

function Hackathons() {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [hackathons] = useState([
    {
      id: 1,
      title: "Business Game Hackathon",
      description: "The Business Strategy Hackathon is a premier event where teams analyze real-world business problems, create market-driven solutions, and present strategies to an expert panel. The competition is designed to test innovation, analytical thinking, and strategic execution. ",
      startDate: "11-04-2025",
      endDate: "12-04-2025",
      venue: "IIITDM Campus, Jabalpur",
      prize: "₹60,000",
      level: "Basic",
      category: "business",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi5KLzBMSVql_muIn3IDAn0chN5LeRhhENb2nxT9aoh24mZw/viewform?usp=dialog",
      timeline: [
        { time: "Round 1: 11Apr 6:00PM - 12Apr 12:00AM", event: "Business Case Study & Dashboarding" },
        { time: "Round 2: 12Apr 1:45AM - 12Apr 4:45AM", event: "Pitching & Showcasing" },
      ],
      requirements: "Business Game is a tech free hackathon, But basic Knowledge of creating Presentation and designs is needed."
    },
    {
      id: 2,
      title: "HackSagan",
      description: "HACKSAGON was first launched in 2020 as a collaborative initiative to bring together innovative minds from across the nation. The inaugural edition was successfully organized by ABV-IIITM IEEE Student Branch in partnership with six IIITs, namely IIIT Una, IIIT Ranchi, IIIT Lucknow, IIIT Nagpur, IIITDM Kurnool, and IIIT Bhagalpur which witnessed registration from 293 teams with 1200 students and 95 teams being qualified for the final round. The event features five sub-tracks, each within the Software Track and the Hardware + Software Track, to encourage interdisciplinary learning and innovation.",
      startDate: "15-05-2025",
      endDate: "16-05-2025",
      venue: "IIITDM Campus, Gwalior",
      prize: "₹2,50,000",
      level: "Intermidiate",
      category: "open",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi5KLzBMSVql_muIn3IDAn0chN5LeRhhENb2nxT9aoh24mZw/viewform?usp=dialog",
      timeline: [
        { time: "Phase 1.1 - 28th March", event: "Presentation Upload and Registrations" },
        { time: "Phase 1.2 - Apr 3rd", event: "Idea Review and Results" },
        { time: "Phase 2.1 - Apr 4th to Apr 10th", event: "Form for Round 2 registration" },
        { time: "Phase 2.2 - Presentation Round", event: "Presentation at IIITM in online/offline mode" },
        { time: "Phase 2.3 - 21st Apr", event: "Results of Round 2" },
        { time: "Phase 3.1 - 21st Apr to 5th May", event: "Registration for Round 3" },
        { time: "Phase 3.2 - May 15th", event: "36Hour Hackathon Sprint in campus of IIITM" },
        { time: "Phase 3.3 - May 16th", event: "Finale Results" },
      ],
      requirements: "Unique Idea on any of these domains: Web Development Track, Smart Cities and IoT Solutions, Mobile App Development Track, IoT-Enabled Healthcare and Assistive Technologies, Data Science & Machine Learning, Smart Wearables for Safety, Blockchain & Cryptography Track, Disaster Management and Emergency Response, Open Innovation Track, Agritech and Rural Innovation."
    },
    {
      id: 3,
      title: "Code Nakshatra",
      description: "Code Nakshatra is a 24-hour hackathon hosted by Code Rangers and Geek Room TIIPS, designed to foster innovation and collaboration among tech enthusiasts. Participants will engage in live project presentations, pitch their visions, and receive guidance from expert mentors and judges.",
      startDate: "21-03-2025",
      endDate: "22-03-2025",
      venue: "TIIPS Campus, Greater Noida",
      prize: "₹3,00,000+ (Cash prizes worth over ₹25,000)",
      level: "Intermediate",
      category: "open",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi5KLzBMSVql_muIn3IDAn0chN5LeRhhENb2nxT9aoh24mZw/viewform?usp=dialog",
      timeline: [
        { "time": "21st March 2025", "event": "Hackathon Commencement" },
        { "time": "22nd March 2025", "event": "Hackathon Conclusion and Award Ceremony" }
      ],
      requirements: "Participants are encouraged to bring innovative ideas across various domains. Teams can consist of 1-4 members, and projects should be developed during the hackathon period. Submissions must include a publicly visible GitHub repository link and a brief video demonstration of the hack."
    },
    {
      id: 4,
      title: "HackByte 3.0",
      description: "HackByte 3.0 is a 36-hour in-person hackathon organized by IIITDM Jabalpur, aiming to break barriers and foster a culture of creativity, growth, and innovation. Participants are invited to push their limits and create bold solutions.",
      startDate: "04-04-2025",
      endDate: "06-04-2025",
      venue: "IIITDM Jabalpur Campus",
      prize: "₹85,000",
      level: "Intermediate",
      category: "open",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi5KLzBMSVql_muIn3IDAn0chN5LeRhhENb2nxT9aoh24mZw/viewform?usp=dialog",
      timeline: [
        { time: "4th April 2025", event: "Hackathon Commencement" },
        { time: "6th April 2025", event: "Hackathon Conclusion and Award Ceremony" }
      ],
      requirements: "Teams can consist of 1-4 members. Projects should be developed during the hackathon period. Participants are expected to create innovative projects in accordance with the theme provided."
    },

    {
  id: 5,
  title: "HaccVerse '25",
  description: "HaccVerse '25 is a flagship 32-hour hackathon bringing together developers, designers, and innovators to solve real-world challenges through technology and creativity. The event fosters interdisciplinary collaboration, allowing participants to blend AI/ML, Web3, cybersecurity, IoT, and more to build groundbreaking solutions.",
  startDate: "Date not specified",
  endDate: "Date not specified",
  venue: "Venue not specified",
  prize: "Details not specified",
  level: "Intermediate",
  category: "open",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi5KLzBMSVql_muIn3IDAn0chN5LeRhhENb2nxT9aoh24mZw/viewform?usp=dialog",
  timeline: [
    { time: "Not specified", event: "Hackathon Commencement" },
    { time: "Not specified", event: "Hackathon Conclusion and Award Ceremony" }
  ],
  requirements: "Participants are encouraged to bring innovative ideas across various domains. Teams can consist of 1-4 members, and projects should be developed during the hackathon period."
},
{
  id: 6,
  title: "Hack Genesis '25",
  description: "Hack Genesis '25 is the flagship hackathon of Christ University Delhi NCR Campus, uniting brilliant minds from around the globe for an intensive 24-hour marathon of ideation, development, and problem-solving.",
  startDate: "24-03-2025",
  endDate: "02-04-2025",
  venue: "Christ University Delhi NCR Campus, Ghaziabad, India",
  prize: "$100",
  level: "Intermediate",
  category: "open",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi5KLzBMSVql_muIn3IDAn0chN5LeRhhENb2nxT9aoh24mZw/viewform?usp=dialog",
  timeline: [
    { time: "24th March 2025", event: "Hackathon Commencement" },
    { time: "2nd April 2025", event: "Hackathon Conclusion and Award Ceremony" }
  ],
  requirements: "Teams can consist of 2-4 members. Projects should be developed during the hackathon period. Participants are expected to create innovative projects in accordance with the theme provided."
}

  ])

  const filters = [
    { id: 'all', label: '🌟 All', color: '#6C63FF' },
    { id: 'webdev', label: '💻 Web Dev', color: '#FF6B6B' },
    { id: 'ai', label: '🤖 AI/ML', color: '#4CAF50' },
    { id: 'blockchain', label: '⛓️ Blockchain', color: '#FFA726' },
    { id: 'business', label: '💼 Business', color: '#2196F3' },
    { id: 'open', label: '🎯 Open Innovation', color: '#9C27B0' },
  ]
  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesFilter = activeFilter === 'all' || hackathon.category === activeFilter;
    const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  const openModal = (hackathon) => {
    setSelectedHackathon(hackathon)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedHackathon(null)
  }

  const handleRegisterClick = (registrationLink) => {
    window.open(registrationLink, '_blank');
  };

  return (
    <div className="hackathons">
      <h1 className="page-title">Upcoming Hackathons</h1>


      <input
        type="text"
        placeholder="🔍 Search Hackathons..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />


      <div className="filters">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            style={{ '--filter-color': filter.color }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="hackathons-grid">
        {filteredHackathons.map(hackathon => (
          <div key={hackathon.id} className="hackathon-card">
            <h2>{hackathon.title}</h2>
            <p className="description">
              {hackathon.description.length > 100
                ? hackathon.description.substring(0, 100) + "..."
                : hackathon.description}
            </p>

            <div className="hackathon-details">
              <div className="detail-item">
                <span className="detail-label">📅 Date</span>
                <span className="detail-value">{hackathon.startDate} - {hackathon.endDate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🏆 Prize</span>
                <span className="detail-value">{hackathon.prize}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📍 Venue</span>
                <span className="detail-value">{hackathon.venue}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎯 Level</span>
                <span className="detail-value">{hackathon.level}</span>
              </div>
            </div>
            <div className="card-actions">


            <button
                className="register-btn"
                onClick={() => handleRegisterClick(hackathon.registrationLink)}
              >
                Register Now
              </button>
              <button className="details-btn" onClick={() => openModal(hackathon)}>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedHackathon && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{selectedHackathon.title}</h2>
            <div className="modal-section">
              <h3>Description</h3>
              <p>{selectedHackathon.description}</p>
            </div>

            <div className="modal-section">
              <h3>Requirements</h3>
              <p>{selectedHackathon.requirements}</p>
            </div>
            <div className="modal-section">
              <h3>Timeline</h3>
              <div className="timeline">
                {selectedHackathon.timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <span className="timeline-time">{item.time}</span>
                    <span className="timeline-event">{item.event}</span>
                  </div>
                ))}
              </div>
            </div> 
            <a href={selectedHackathon.registrationLink} target="_blank" rel="noopener noreferrer">
              <button className="register-btn modal-register">Register Now</button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hackathons;