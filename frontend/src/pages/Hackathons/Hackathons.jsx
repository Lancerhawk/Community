import { useState } from 'react'
import './Hackathons.css'

function Hackathons() {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [hackathons] = useState([
  
  
   

    {
      "id": 1,
      "status": 'closed',
      "title": "Ease the Error 5.0",
      "description": "<p><strong>Ease The Error 5.0</strong> is a 24-Hours Intercollegiate Hackathon conducted in Sri Venkateswara College of Engineering (SVCE), Sriperumbudur.</p><h3>Guidelines</h3><ul><li><strong>Team size:</strong> 4 - 6 members</li><li>Inter-college team members are not allowed (Members of the same college only)</li><li>Inter-specialization team members allowed</li><li>Problem Statements in over 5 Domains (Check our website)</li><li>2 reviews + Final judging</li><li>Software Hackathon</li><li>Registration only through our official website is taken under consideration</li><li>https://ease-the-error-sage.vercel.app</li></ul><h3>Round 1: Abstract Selection</h3><ul><li>Choose a problem statement and create an Abstract</li><li>The abstract template is provided on our website</li></ul><h3>Round 2: 24-Hour Hackathon</h3><ul><li>35 teams are shortlisted</li></ul><h3>Rules</h3><ul><li>Any software development tools, game engine, IDE, and/or programming language can be used for the event. If a team member uses a purchased tool licensed to them and the license is not transferable to other members, the team must choose one available to all developers.</li><li>Lightweight APIs like Google Maps, weather API, and addressing APIs are allowed. Heavyweight APIs are not allowed. In case of exceptions, judges will take the final call.</li><li>A team may not code applications that violate the code of conduct. For example, racially insensitive ideas for an application will automatically be disqualified.</li><li>All project submissions will be randomly code-reviewed. Applications will be spot-checked by code reviewers. All projects selected by the judges as finalists will be code-reviewed to confirm that the code is original work created at the hackathon and that all components and assets conform to the licenses allowed in these rules.</li></ul>",
      "startDate": "18-03-2025",
      "endDate": "18-04-2025",
      "venue": "Sri Venkateswara College of Engineering (SVCE), Chennai, Tamil Nadu",
      "prize": "₹50,000",
      "level": "Intermediate",
      "category": ["track", "open"],
      "registrationStatus": "closed",
      "registrationDeadline": "05-04-2025",
      "teamSize": "4-6 members",
      "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfScUfRx7W7K1W018OcqFowQyEtYs09A7rzPOrQJ1Q5IhEfyQ/viewform?usp=header",
      "timeline": [
        { "time": "24 Mar 25, 06:00 PM IST", "event": "Problem Statements & Registration Open" },
        { "time": "11 Apr 25, 12:00 AM IST", "event": "Submission Deadline" },
        { "time": "13 Apr 25, 11:00 PM IST", "event": "Shortlist & Waitlist Announcement" },
        { "time": "18 Apr 25, 10:00 AM IST", "event": "Hackathon Kickoff" },
        { "time": "18 Apr 25, 04:00 PM IST", "event": "First Round Judging" },
        { "time": "18 Apr 25, 10:00 PM IST", "event": "Second Round Judging" },
        { "time": "19 Apr 25, 09:00 AM IST", "event": "Final Round Judging" },
        { "time": "19 Apr 25, 01:30 PM IST", "event": "Valedictory & Prize Distribution" }
      ],
      "requirements": "<h3>Project Domains</h3><ul><li>AI/ML Learning</li><li>Web3 and BlockChain</li><li>Data Analytics & Visualization</li><li>Cybersecurity & Privacy</li><li>Open Innovation Track</li>"
    },
    {
      "id": 2,
      "status": 'closed',
      "title": "HACKHAZARDS '25",
      "description": "<p><strong>HACKHAZARDS '25</strong> is one of India's largest and premier community-run hackathons, making a comeback with more surprises than ever.</p><h3>Why Join HACKHAZARDS?</h3><ul><li><strong>Biggest Prize Pool:</strong> $10,000+ in cash, $250,000+ in credits & vouchers</li><li><strong>Exclusive Tracks:</strong> Monad, Base, Fluvio, Groq & RB Labs – making their India debut at HACKHAZARDS ‘25!</li><li><strong>Beginner-Friendly:</strong> Free workshops & bootcamps for all participants</li><li><strong>No Shortlisting:</strong> Everyone gets to hack!</li><li><strong>210 Hours of Hacking:</strong> Build something amazing</li><li><strong>Global Participation:</strong> Join from anywhere in the world</li><li><strong>Expert Guidance:</strong> 50+ global mentors & judges from top companies</li><li><strong>Exciting Rewards:</strong> Swags & cash prizes for the Top 100 teams</li><li><strong>Career Opportunities:</strong> Internship & incubation opportunities for standout teams</li><li><strong>Certificates:</strong> Provided for all successful project submissions</li></ul>",
      "startDate": "11-04-2025",
      "endDate": "20-04-2025",
      "venue": "Online",
      "prize": "$8,770",
      "level": "Beginner",
      "category": ["track"],
      "registrationStatus": "closed",
      "registrationDeadline": "05-04-2025",
      "teamSize": "1 - 4 members",
      "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfJMwKGe_sHJJiJ4dSHNJD__KITVUC57gSg8MB9UXYCnON40w/viewform?usp=header",
"timeline": [
  { "time": "31 Mar 25, 11:59 PM IST", "event": "Registration Deadline" },
  { "time": "04 Apr 25, 10:00 AM IST", "event": "Problem Statements Announced" },
  { "time": "11 Apr 25, 12:00 AM IST", "event": "Hackathon Begins" },
  { "time": "12 Apr 25, 11:59 PM IST", "event": "Problem Statement Selection Deadline" },
  { "time": "13 Apr 25, 06:00 PM IST", "event": "Mentor Call 1 - Idea Discussion" },
  { "time": "15 Apr 25, 06:00 PM IST", "event": "Mentor Call 2 - Prototype Discussion" },
  { "time": "20 Apr 25, 11:59 PM IST", "event": "Final Submission Deadline" },
  { "time": "27 Apr 25, 05:00 PM IST", "event": "Results Announcement" }
],

      "requirements": "Open to All"
    },
        {
      id: 3,
      status: 'closed',
      title: "INNOFUSION 2.O",
      description: "<p>INNOFUSION 2.O! is Kolkata's premier software and hardware hackathon, an open innovation event where students come together to create innovative solutions for real-world problems. Hosted by the University of Engineering and Management, Kolkata, this 30-hour hackathon provides a collaborative space for students to showcase their skills, gain hands-on experience with new technologies, and create projects that have societal impact.</p><h3>About INNOFUSION 2.O!</h3><p>INNOFUSION 2.O! is a hackathon that brings together students from across the country to develop cutting-edge solutions in fields such as AI & ML, Blockchain, Web & App Development, AR & VR, Health Tech, and Open Innovation. This event offers a unique opportunity to work on impactful projects and network with industry experts and peers.</p><h3>Game Zones</h3><ul><li><strong>AI & ML</strong> – Build projects that leverage machine learning and artificial intelligence to solve real-world problems.</li><li><strong>Blockchain & Web3</strong> – Develop decentralized solutions using blockchain and Web3 technologies.</li><li><strong>Web & App Development</strong> – Create innovative web and mobile applications that address contemporary challenges.</li><li><strong>AR & VR</strong> – Develop immersive augmented and virtual reality experiences.</li><li><strong>Health Tech</strong> – Design technological solutions in healthcare that improve lives and wellbeing.</li><li><strong>Open Innovation</strong> – Solve challenges that are not limited to specific domains, encouraging cross-disciplinary solutions.</li></ul><h3>Event Details</h3><ul><li><strong>Idea Submission Deadline</strong>: April 30 (Online)</li><li><strong>Finals Date</strong>: July 26 (Offline Round at University of Engineering and Management, Kolkata)</li><li><strong>Team Size</strong>: 1-4 members</li><li><strong>Registration Fee</strong>: Free</li><li><strong>Eligibility</strong>: Open to intercollege students from anywhere in the world</li></ul><h3>Why Join?</h3><ul><li><strong>Unmatched Rewards & Opportunities</strong></li><li><strong>Cash Prize:</strong> ₹50,000+</li><li><strong>Global Participation:</strong> Join from anywhere in the world</li></ul><h3>How to Participate?</h3><ol><li>Register Now (Free Entry)</li><li>Form a Team (1-4 members)</li><li>Join the Discord Community (for updates & networking)</li><li>Submit Your Ideas Before April 30</li></ol><h3>Competition Rounds</h3><ul><li><strong>Round 1 (Online Idea Submission)</strong>: Teams will submit their innovative ideas before April 30, and the selected teams will advance to the finals.</li><li><strong>Round 2 (Finals - Offline Round)</strong>: Teams that qualify will compete in the offline round at the University of Engineering and Management, Kolkata, on July 26.</li></ul><h3>Prize Pool</h3><p><strong>Total Prize Pool:</strong> ₹50,000+</p>",
      startDate: "26-07-2025",
      endDate: "27-07-2025",
      venue: "University of Engineering and Management, Kolkata",
      prize: "₹25,000",
      level: "Intermediate",
      category: "open",
      registrationStatus: "closed",
      registrationDeadline: "16-05-2025",
      teamSize: "1-4 members",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe1xUxa8uoTmXetSatUCpSy98ivAsapwrIV5JHWPS7CiuulWQ/viewform?usp=header",
 "timeline": [
  { "time": "22 Apr 25, 12:00 AM IST", "event": "The Games are Opened" },
  { "time": "30 Apr 25, 11:59 PM IST", "event": "The Games are Sealed" },
  { "time": "TBA", "event": "The Judgemental Round" },
  { "time": "TBA", "event": "The Survivors Revealed" },
  { "time": "TBA", "event": "The Guidance Circle" },
  { "time": "26 Jul 25, 12:00 AM IST", "event": "The Ultimate Showdown Begins" },
  { "time": "27 Jul 25, 11:59 PM IST", "event": "The Ultimate Showdown Ends" }
],

      requirements: "Open to All"
    },
        {
      "id": 4,
      "status": 'open',
      "title": "BrahmaX 1.0",
      "description": "<p><strong>BrahmaX 1.0 – The Creation of Tomorrow</strong> is a multi-phase national hackathon hosted at BGIEM, Jabalpur (M.P.), where students across India unite to solve real-world challenges through innovation and technology.</p><h3>Guidelines</h3><ul><li><strong>Team size:</strong> 3 – 4 members</li><li>Open to UG/PG/MBA engineering students from any college</li><li>Team formation assistance provided based on skillset</li><li>Domains include AI & ML, Web & App Dev, FinTech, EdTech, Health Tech, Sustainability, and Open Innovation</li><li>Multi-phase hackathon with idea submission, prototype, and grand finale</li><li>Offline final round at BGIEM Jabalpur</li><li>Registration Fee: ₹400 per team</li></ul><h3>Phase 1: Prarambh (Online Idea Submission)</h3><ul><li>Submit a PPT outlining your idea and approach</li><li>Idea submission open from April 13 – April 25</li></ul><h3>Phase 2: Srishti (Prototype Submission)</h3><ul><li>Teams shortlisted from Phase 1 will submit a 3–5 minute demo video</li><li>Prototype submission window: April 27 – April 29</li></ul><h3>Phase 3: Moksha (Offline Grand Finale)</h3><ul><li>24-hour hackathon held at BGIEM, Jabalpur</li><li>Top teams present final working projects</li><li>Date: May 9 – May 10</li></ul><h3>Rules</h3><ul><li>Any programming language, IDE, or framework can be used</li><li>Open to innovative, original solutions only</li><li>Participants must follow ethical development practices</li><li>Projects will be reviewed for originality, functionality, and relevance to the problem statement</li><li>Mentorship and guidance will be provided throughout the hackathon phases</li></ul>",
      "startDate": "09-05-2025",
      "endDate": "10-05-2025",
      "venue": "Baderia Global Institute of Engineering and Management, Jabalpur, Madhya Pradesh",
      "prize": "₹30,000",
      "level": "Beginner",
      "category": ["open"],
      "registrationStatus": "open",
      "registrationDeadline": "23-04-2025",
      "teamSize": "3 - 4 members",
      "registrationLink": "https://forms.gle/BA6td61siA4kYRQAA",
"timeline": [
  { "time": "13 Apr 25, 12:00 AM IST", "event": "Phase 1: Prarambh Begins – Idea Submission Starts" },
  { "time": "23 Apr 25, 11:59 PM IST", "event": "Club Registration Deadline" },
  { "time": "25 Apr 25, 11:59 PM IST", "event": "Phase 1: Prarambh Ends – Last Day to Submit PPT" },
  { "time": "27 Apr 25, 12:00 AM IST", "event": "Phase 2: Srishti Begins – Prototype Submission Starts" },
  { "time": "29 Apr 25, 11:59 PM IST", "event": "Phase 2: Srishti Ends – Prototype Submission Deadline" },
  { "time": "09 May 25, 12:00 PM IST", "event": "Phase 3: Moksha Begins – 24-Hour Hackathon Starts (Offline)" },
  { "time": "10 May 25, 12:00 PM IST", "event": "Phase 3: Moksha Ends – Hackathon Concludes" }
]
,

      "requirements": "Open to All"
    },
  ])

  const filters = [
    { id: 'all', label: '🌟 All', color: '#6C63FF' },
    { id: 'webdev', label: '💻 Web Dev', color: '#FF6B6B' },
    { id: 'ai', label: '🤖 AI/ML', color: '#4CAF50' },
    { id: 'blockchain', label: '⛓️ Blockchain', color: '#FFA726' },
    { id: 'business', label: '💼 Business', color: '#2196F3' },
    { id: 'open', label: '🎯 Open Innovation', color: '#9C27B0' },
    { id: 'track', label: '🏁 Tracks', color: '#FF4081' },
  ];

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesFilter = activeFilter === 'all' || hackathon.category.includes(activeFilter);
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
            <div className={`registration-status ${hackathon.status}`}>
              {hackathon.status === 'closed' ? '🔒 Registration Closed' : 
               hackathon.status === 'coming_soon' ? '⏳ Coming Soon' : 
               '🔓 Registration Open'}
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
                className={`register-btn ${hackathon.status !== 'open' ? 'closed' : ''}`}
                onClick={() => handleRegisterClick(hackathon.registrationLink)}
                disabled={hackathon.status !== 'open'}
              >
                {hackathon.status === 'closed' ? '🔒 Registration Closed' : 
                 hackathon.status === 'coming_soon' ? '⏳ Coming Soon' : 
                 'Register with Us Now'}
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
            <a href={selectedHackathon.status !== 'open' ? '#' : selectedHackathon.registrationLink} target="_blank" rel="noopener noreferrer">
              <button
                className={`register-btn modal-register ${selectedHackathon.status !== 'open' ? 'closed' : ''}`}
                disabled={selectedHackathon.status !== 'open'}
              >
                {selectedHackathon.status === 'closed' ? '🔒 Registration Closed' : 
                 selectedHackathon.status === 'coming_soon' ? '⏳ Coming Soon' : 
                 'Register with Us Now'}
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hackathons;
