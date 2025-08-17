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
      status: 'open',
      title: "MetaMorph 2025",
      description: "<p>MetaMorph is a 36-hour cosmic coding adventure where innovators come together to build groundbreaking projects. Hosted by Guru Nanak Institute of Technology, Kolkata, this hackathon offers a collaborative environment for participants to showcase their skills, gain hands-on experience with new technologies, and create impactful solutions.</p><h3>About MetaMorph</h3><p>MetaMorph brings together participants from across the country to develop futuristic solutions in fields such as AI & ML, Web Technologies, Blockchain Revolution, and more. This event provides access to cutting-edge resources, mentorship from industry experts, and opportunities to network with peers.</p><h3>Game Zones</h3><ul><li><strong>AI & ML</strong> – Build intelligent systems that solve real-world problems using machine learning and artificial intelligence.</li><li><strong>Web Technologies</strong> – Create innovative web solutions that address modern challenges.</li><li><strong>Blockchain Revolution</strong> – Develop decentralized applications and blockchain-powered solutions.</li><li><strong>Open Innovation</strong> – Work on creative ideas beyond domain boundaries.</li></ul><h3>Event Details</h3><ul><li><strong>Idea Submission Deadline</strong>: TBA</li><li><strong>Finals Date</strong>: September 6-7, 2025 (Offline Round at Guru Nanak Institute of Technology, Kolkata)</li><li><strong>Team Size</strong>: 1-4 members</li><li><strong>Registration Fee</strong>: Free</li><li><strong>Eligibility</strong>: Open to students from anywhere in the world</li></ul><h3>Why Join?</h3><ul><li><strong>Innovation & Learning</strong></li><li><strong>Cash Prizes</strong> across multiple categories</li><li><strong>Global Participation</strong>: Join from anywhere</li></ul><h3>How to Participate?</h3><ol><li>Register Now (Free Entry)</li><li>Form a Team (1-4 members)</li><li>Submit Your Ideas</li><li>Join the Hackathon on September 6-7, 2025</li></ol><h3>Competition Rounds</h3><ul><li><strong>Round 1 (Idea Submission)</strong>: Teams submit ideas and receive feedback from mentors.</li><li><strong>Round 2 (Hackathon Weekend)</strong>: 36 hours of coding, workshops, mentorship, and project building at GNIT, Kolkata.</li><li><strong>Round 3 (Presentations)</strong>: Teams present projects to judges and participants.</li></ul><h3>Prize Pool</h3><p><strong>Total Prize Pool:</strong> $1100</p>",
      startDate: "06-09-2025",
      endDate: "07-09-2025",
      venue: "GNIT, Nilgunj Road, Panihati, Kolkata",
      prize: "$1100",
      level: "Intermediate",
      category: "open",
      registrationStatus: "open",
      registrationDeadline: "18-08-2025",
      teamSize: "1-4 members",
      registrationLink: "https://forms.gle/by88nyPQrfR5NfMDA",
 "timeline": [
  { "time": "15 Jul 25, 12:00 AM IST", "event": "Registrations begin" },
  { "time": "20 Aug 25, 11:59 PM IST", "event": "Registrations end" },
  { "time": "06 Sep 25, 08:00 AM IST", "event": "Hackathon starts" },
  { "time": "07 Sep 25, 03:00 AM IST", "event": "Hackathon ends" }
],


      requirements: "Open to All"
    },
    
   {
      id: 2,
      status: 'open',
      title: "CyberShield Hackathon 2025 – Tackle Real-World Cybercrime!",
      description: "<p>CyberShield Hackathon 2025 is a real-world challenge where innovators come together to tackle cybercrime and build impactful solutions. This hackathon provides a collaborative environment for students to showcase their skills, gain hands-on experience, and contribute to digital security.</p><h3>About CyberShield Hackathon</h3><p>CyberShield brings together UG and PG engineering students to develop innovative solutions in fields such as cybercrime, digital investigation, and law enforcement support. This event offers mentorship, exposure, and the opportunity to present projects at CIIS 2025.</p><h3>Game Zones</h3><ul><li><strong>Cybercrime</strong> – Design tools and systems to prevent and detect cyber threats.</li><li><strong>Digital Investigation</strong> – Build solutions for forensics, evidence gathering, and analysis.</li><li><strong>Law Enforcement Solutions</strong> – Create technologies that empower agencies in combating cybercrime.</li></ul><h3>Event Details</h3><ul><li><strong>Registration Deadline</strong>: August 18, 2025</li><li><strong>Final Round Dates</strong>: September 9-11, 2025</li><li><strong>Final Round Venues</strong>: SGSITS Indore (Sept 9), MANIT Bhopal (Sept 10), JEC Jabalpur (Sept 11)</li><li><strong>Team Size</strong>: 3-5 members (at least one female participant required)</li><li><strong>Registration Fee</strong>: Free</li><li><strong>Eligibility</strong>: Open to all UG/PG Engineering Students</li></ul><h3>Why Join?</h3><ul><li><strong>Innovation & Impact</strong></li><li><strong>Cash Prizes</strong> for top teams</li><li><strong>Showcase Opportunity</strong> at CIIS 2025</li><li><strong>Pre-Placement Offers</strong> from ClearTrail Technologies</li></ul><h3>How to Participate?</h3><ol><li>Register before August 18, 2025</li><li>Form a Team (3-5 members with at least one female participant)</li><li>Submit your Application</li><li>Join the Final Round on September 9-11, 2025</li></ol><h3>Competition Rounds</h3><ul><li><strong>Team Formation</strong>: Teams formed based on skills or self-formed (no changes once finalized).</li><li><strong>Final Round (Offline Presentations)</strong>: Teams present solutions at SGSITS Indore, MANIT Bhopal, or JEC Jabalpur.</li></ul><h3>Prize Pool</h3><p><strong>Rewards:</strong> Substantial Cash Prizes, Showcase at CIIS 2025, and Pre-Placement Offers from ClearTrail Technologies.</p>",
      startDate: "09-09-2025",
      endDate: "11-09-2025",
     venue: "JEC, Jabalpur",
      prize: "Substantial Cash Prizes, Showcase Opportunity at CIIS 2025 & Pre-Placement Offers from ClearTrail Technologies.
",
      level: "Intermediate",
      category: "open",
      registrationStatus: "open",
      registrationDeadline: "18-08-2025",
      teamSize: "3-5 members",
      registrationLink: "https://forms.gle/isJ53CXWSMH7QYWWA",
 "timeline": [
  { "time": "18 Aug 25", "event": "Student briefing session + Q&A (online)" },
  { "time": "22 Aug 25", "event": "Team members briefing session + Q&A (online)" },
  { "time": "01 Sept 25", "event": "Last date for PPT submissions" },
  { "time": "04 Sept 25", "event": "Selection of teams" },
  { "time": "05 Sept 25", "event": "Doubt clearing session for selected teams" },
  { "time": "09 Sept 25", "event": "Finale – SGSITS, Indore" },
  { "time": "10 Sept 25", "event": "Finale – MANIT, Bhopal" },
  { "time": "11 Sept 25", "event": "Finale – JEC, Jabalpur" },
  { "time": "17 Sept 25", "event": "Winners’ presentation at CIIS 2025, Bhopal" }
],
     
      requirements: "Open to All"
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
  id: 4,
  status: 'closed',
  title: "HackOrbit 2025",
  description: "<p><strong>HackOrbit 2025</strong> is a National-Level Online Hackathon organized by the Digital Learning Group (DLG) in collaboration with Madhav Institute of Technology & Science – Deemed University (MITS-DU), Gwalior.</p><h3>Guidelines</h3><ul><li><strong>Team size:</strong> 2 – 4 members</li><li>Open to participants across India</li><li>Fully online event</li><li>Two rounds: 1st round is free; 2nd round has a fee of ₹100</li><li>Duration: 36 Hours</li><li>Last date to register: 3rd July 2025</li><li>Hackathon dates: 5th – 7th July 2025</li><li>Participation certificates for all registered participants</li><li>Glorious rewards and recognition for top performers</li><li>Networking opportunities with peers and professionals</li></ul><h3>Round 1: Preliminary Screening</h3><ul><li>Free registration</li><li>Initial evaluation based on submitted details</li></ul><h3>Round 2: Main Hackathon</h3><ul><li>Held from 6th July 2025</li><li>36-hour intense coding and innovation challenge</li><li>₹100 fee applicable</li></ul><h3>Rules</h3><ul><li>Participants may use any development tools, frameworks, or programming languages</li><li>Only original work created during the hackathon is allowed</li><li>Use of licensed tools must comply with team-wide accessibility</li><li>Projects violating ethical or community guidelines will be disqualified</li><li>Finalist projects will be subjected to random code reviews</li><li>Judges’ decisions will be final in all matters</li></ul><p><strong>Think. Strategize. Dominate.</strong> This isn’t just a hackathon—it’s a battle of wits where your business acumen and tech prowess will be put to the test. Step up and prove it!</p>",
  startDate: "05-07-2025",
  endDate: "07-07-2025",
  venue: "Madhav Institute of Technology and Science (MITS), Gwalior",
  prize: "₹25,000",
  level: "Intermediate",
  category: ["track", "open"],
  registrationStatus: "closed",
  registrationDeadline: "27-06-2025",
  teamSize: "1-4 members",
  registrationLink: "https://forms.gle/xZtH8qivCJK2B6rFA",
  "timeline": [
    { "time": "5 Jul 25, 11:59 PM IST", "event": "Round 1 – PPT Submission Deadline" },
    { "time": "6 Jul 25, 10:00 AM IST", "event": "Round 2 – Final Showdown Begins" },
    { "time": "10 Jul 25, 06:00 PM IST", "event": "Results Announcement & Winner Declaration" }
  ],
  requirements: "<h3>Project Domains</h3><ul><li>AI/ML Learning</li><li>Web3 and BlockChain</li><li>Data Analytics & Visualization</li><li>Cybersecurity & Privacy</li><li>Open Innovation Track</li></ul>"
},

  ]);

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
