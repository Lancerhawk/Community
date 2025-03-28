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
      description: "<p>The Business Strategy Hackathon is a premier event where teams analyze real-world business problems, create market-driven solutions, and present strategies to an expert panel. The competition is designed to test innovation, analytical thinking, and strategic execution.</p><h3>About Abhikalpan</h3><p>Abhikalpan is the annual technical fest of PDPM IIITDM Jabalpur, uniting innovators, problem-solvers, and creative minds. It offers a platform for students to showcase their technical and strategic expertise through competitions, workshops, and industry-led sessions.</p><h3>Judging Criteria</h3><ul><li><strong>Innovation (15%)</strong> – Originality and uniqueness of the idea</li><li><strong>Practicality (15%)</strong> – Feasibility and real-world application</li><li><strong>Dashboarding (15%)</strong> – Converts data into visuals and representable form</li><li><strong>Presentation Skills (15%)</strong> – Communication and clarity of ideas</li><li><strong>Analytics (20%)</strong> – Data-driven decision-making and insights</li><li><strong>Teamwork (10%)</strong> – Collaboration and problem-solving approach</li><li><strong>Q&A Handling (10%)</strong> – Ability to defend and refine ideas</li><li><strong>Bonus Points (10%)</strong> – Exceptional creativity or execution</li></ul><h3>Rules</h3><p>To participate in this event, participants must be present on campus and have accommodation. For this, visit Abhikalpan, register for Abhikalpan, and complete the required registration process. Visit the official website for more details: <strong>https://www.abhikalpan.live/</strong></p><h3>Competition Rounds</h3><ul><li><strong>Round 1 (Offline Business Case Study & Dashboarding)</strong>: Teams will develop solutions based on a provided problem statement.</li><li><strong>Round 2 (Final Strategy Pitching & Showcasing)</strong>:<ul><li><strong>Presentation Duration</strong>: 10 minutes per team + 5-minute Q&A (Tentative)</li><li>Only 20 teams that qualify in the first round will participate in this round.</li><li>Judges’ decisions will be final and binding.</li><li>Read the Rulebook for more details.</li></ul></li></ul><h3>Prize Pool</h3><p><strong>Total Prize Pool:</strong> ₹60,000</p>",
      startDate: "11-04-2025",
      endDate: "12-04-2025",
      venue: "IIITDM Campus, Jabalpur",
      prize: "₹10,000",
      level: "Basic",
      category: "business",
      registrationStatus: "closed",
      registrationDeadline: "20-03-2025",
      teamSize: "2-5 members",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi5KLzBMSVql_muIn3IDAn0chN5LeRhhENb2nxT9aoh24mZw/viewform?usp=dialog",
      timeline: [
        { time: "Round 1: 11Apr 6:00PM - 12Apr 12:00AM", event: "Business Case Study & Dashboarding" },
        { time: "Round 2: 12Apr 1:45AM - 12Apr 4:45AM", event: "Pitching & Showcasing" },
      ],
      requirements: "<h3>Prerequisites</h3><ul><li>No technical coding skills required</li><li>Basic knowledge of presentation creation</li><li>Understanding of design principles</li></ul><h3>Important Notes</h3><ul><li>This is a tech-free hackathon</li><li>Focus on business strategy and innovation</li></ul>"
    },
    {
      id: 2,
      title: "HackSagan",
      description: "<h3>About HackSagan</h3><p>HACKSAGON was first launched in 2020 as a collaborative initiative to bring together innovative minds from across the nation.</p><h3>Inaugural Edition Highlights</h3><ul><li>Organized by ABV-IIITM IEEE Student Branch</li><li>Partnership with 6 IIITs: Una, Ranchi, Lucknow, Nagpur, Kurnool, and Bhagalpur</li><li>293 registered teams</li><li>1200+ participating students</li><li>95 teams qualified for finals</li></ul><h3>Event Structure</h3><p>The event features five sub-tracks in two main categories:</p><ul><li><strong>Software Track</strong> - Pure software development</li><li><strong>Hardware + Software Track</strong> - Combined hardware and software solutions</li></ul><p>This structure encourages interdisciplinary learning and innovation.</p>",
      startDate: "15-05-2025",
      endDate: "16-05-2025",
      venue: "IIITDM Campus, Gwalior",
      prize: "₹2,50,000",
      level: "Intermidiate",
      category: "open",
      registrationStatus: "closed",
      registrationDeadline: "14-05-2025",
      teamSize: "2-4 members",
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
      requirements: "<h3>Project Domains</h3><ul><li>Web Development Track</li><li>Smart Cities and IoT Solutions</li><li>Mobile App Development Track</li><li>IoT-Enabled Healthcare and Assistive Technologies</li><li>Data Science & Machine Learning</li><li>Smart Wearables for Safety</li><li>Blockchain & Cryptography Track</li><li>Disaster Management and Emergency Response</li><li>Open Innovation Track</li><li>Agritech and Rural Innovation</li></ul><h3>Submission Requirements</h3><ul><li>Project must be unique and innovative</li><li>Solution should address real-world problems</li><li>Complete documentation is mandatory</li></ul>"
    },
    

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
          <div key={hackathon.id} className={`hackathon-card ${hackathon.registrationStatus === 'closed' ? 'closed' : ''}`}>
            <div className={`registration-status ${hackathon.registrationStatus}`}>
              {hackathon.registrationStatus === 'closed' ? '🔒 Registration Closed' : '🔓 Registration Open'}
            </div>
            <h2>{hackathon.title}</h2>
            <p className="description">
              <div dangerouslySetInnerHTML={{
                __html: hackathon.description.replace(/<[^>]*>/g, '').substring(0, 100) + (hackathon.description.length > 100 ? '...' : '')
              }} />
            </p>

            <div className="hackathon-details">
              <div className="detail-item">
                <span className="detail-label">📅 Event Date</span>
                <span className="detail-value">{hackathon.startDate} - {hackathon.endDate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">⏰ Registration Deadline</span>
                <span className="detail-value">{hackathon.registrationDeadline}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🏆 Prize Pool</span>
                <span className="detail-value">{hackathon.prize}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📍 Venue</span>
                <span className="detail-value">{hackathon.venue}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">👥 Team Size</span>
                <span className="detail-value">{hackathon.teamSize}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎯 Level</span>
                <span className="detail-value">{hackathon.level}</span>
              </div>
            </div>
            <div className="card-actions">


            <button
                className={`register-btn ${hackathon.registrationStatus === 'closed' ? 'closed' : ''}`}
                onClick={() => handleRegisterClick(hackathon.registrationLink)}
                disabled={hackathon.registrationStatus === 'closed'}
              >
                {hackathon.registrationStatus === 'closed' ? '🔒 Registration Closed' : 'Register Now'}
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
              <div className="rich-text" dangerouslySetInnerHTML={{ __html: selectedHackathon.description }} />
            </div>

            <div className="modal-section">
              <h3>Requirements</h3>
              <div className="rich-text" dangerouslySetInnerHTML={{ __html: selectedHackathon.requirements }} />
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
            <a href={selectedHackathon.registrationStatus === 'closed' ? '#' : selectedHackathon.registrationLink} target="_blank" rel="noopener noreferrer">
              <button 
                className={`register-btn modal-register ${selectedHackathon.registrationStatus === 'closed' ? 'closed' : ''}`}
                disabled={selectedHackathon.registrationStatus === 'closed'}
              >
                {selectedHackathon.registrationStatus === 'closed' ? '🔒 Registration Closed' : 'Register Now'}
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hackathons;