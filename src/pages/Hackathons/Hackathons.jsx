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
      timeline: [
        { time: "Round 1: 11Apr 6:00PM - 12Apr 12:00AM", event: "Business Case Study & Dashboarding" },
        { time: "Round 2: 12Apr 1:45AM - 12Apr 4:45AM", event: "Pitching & Showcasing" },
      ],
      requirements: "Business Game is a tech free hackathon, But basic Knowledge of creating Presentation and designs is needed."
    },
  ])

  const filters = [
    { id: 'all', label: '🌟 All', color: '#6C63FF' },
    { id: 'webdev', label: '💻 Web Dev', color: '#FF6B6B' },
    { id: 'ai', label: '🤖 AI/ML', color: '#4CAF50' },
    { id: 'blockchain', label: '⛓️ Blockchain', color: '#FFA726' },
    { id: 'business', label: '💼 Business', color: '#2196F3' },
    { id: 'open', label: '🎯 Open Innovation', color: '#9C27B0' }
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
              <button className="register-btn">Register Now</button>
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
            <button className="register-btn modal-register">Register with Us</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hackathons;
