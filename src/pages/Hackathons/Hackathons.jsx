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
      status: 'closed',
      title: "Business Game Hackathon",
      description: "<p>The Business Strategy Hackathon is a premier event where teams analyze real-world business problems, create market-driven solutions, and present strategies to an expert panel. The competition is designed to test innovation, analytical thinking, and strategic execution.</p><h3>About Abhikalpan</h3><p>Abhikalpan is the annual technical fest of PDPM IIITDM Jabalpur, uniting innovators, problem-solvers, and creative minds. It offers a platform for students to showcase their technical and strategic expertise through competitions, workshops, and industry-led sessions.</p><h3>Judging Criteria</h3><ul><li><strong>Innovation (15%)</strong> – Originality and uniqueness of the idea</li><li><strong>Practicality (15%)</strong> – Feasibility and real-world application</li><li><strong>Dashboarding (15%)</strong> – Converts data into visuals and representable form</li><li><strong>Presentation Skills (15%)</strong> – Communication and clarity of ideas</li><li><strong>Analytics (20%)</strong> – Data-driven decision-making and insights</li><li><strong>Teamwork (10%)</strong> – Collaboration and problem-solving approach</li><li><strong>Q&A Handling (10%)</strong> – Ability to defend and refine ideas</li><li><strong>Bonus Points (10%)</strong> – Exceptional creativity or execution</li></ul><h3>Rules</h3><p>To participate in this event, participants must be present on campus and have accommodation. For this, visit Abhikalpan, register for Abhikalpan, and complete the required registration process. Visit the official website for more details: <strong>https://www.abhikalpan.live/</strong></p><h3>Competition Rounds</h3><ul><li><strong>Round 1 (Offline Business Case Study & Dashboarding)</strong>: Teams will develop solutions based on a provided problem statement.</li><li><strong>Round 2 (Final Strategy Pitching & Showcasing)</strong>:<ul><li><strong>Presentation Duration</strong>: 10 minutes per team + 5-minute Q&A (Tentative)</li><li>Only 20 teams that qualify in the first round will participate in this round.</li><li>Judges’ decisions will be final and binding.</li><li>Read the Rulebook for more details.</li></ul></li></ul><h3>Prize Pool</h3><p><strong>Total Prize Pool:</strong> ₹60,000</p>",
      startDate: "11-04-2025",
      endDate: "12-04-2025",
      venue: "IIITDM Campus, Jabalpur",
      prize: "₹10,000",
      level: "Basic",
      category: "business",
      registrationStatus: "closed",
      registrationDeadline: "19-03-2025",
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
      status: 'closed',
      title: "HackSagan",
      description: "<h3>About HackSagan</h3><p>HACKSAGON was first launched in 2020 as a collaborative initiative to bring together innovative minds from across the nation.</p><h3>Inaugural Edition Highlights</h3><ul><li>Organized by ABV-IIITM IEEE Student Branch</li><li>Partnership with 6 IIITs: Una, Ranchi, Lucknow, Nagpur, Kurnool, and Bhagalpur</li><li>293 registered teams</li><li>1200+ participating students</li><li>95 teams qualified for finals</li></ul><h3>Event Structure</h3><p>The event features five sub-tracks in two main categories:</p><ul><li><strong>Software Track</strong> - Pure software development</li><li><strong>Hardware + Software Track</strong> - Combined hardware and software solutions</li></ul><p>This structure encourages interdisciplinary learning and innovation.</p>",
      startDate: "15-05-2025",
      endDate: "16-05-2025",
      venue: "IIITDM Campus, Gwalior",
      prize: "₹2,50,000",
      level: "Intermidiate",
      category: "open",
      registrationStatus: "closed",
      registrationDeadline: "22-03-2025",
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

    {
      "id": 3,
      "status": 'coming_soon',
      "title": "Web Dash",
      "description": "<p>Web Dash is an exciting web development challenge organized by the IEEE Computer Society JMI and IEEE JMI. Participants will be given three themes to choose from, and within 48 hours, they must develop a full-stack website based on their selected theme. The project must be fully functional and deployed by the end of the hackathon, making it a fast-paced and challenging event designed to push participants’ web development skills to the limit.</p><h3>Eligibility</h3><ul><li>Open to all undergraduate students.</li><li>Solo participation or teams of a maximum of 3 members.</li><li>Inter-college teams are allowed.</li><li>Inter-specialization teams are allowed.</li></ul><h3>Competition Format</h3><ul><li><strong>Round 1: Website Development Challenge (48 Hours)</strong><ul><li>Themes will be revealed 1 hour before the competition starts.</li><li>Participants must select one theme and build a fully deployed website within 48 hours.</li><li>The website should align with the provided theme.</li></ul></li><li><strong>Round 2: Finale at Jamia Millia Islamia</strong><ul><li>The top 8 teams will be invited to Jamia Millia Islamia on 26th April (tentative) for the final presentation round.</li></ul></li></ul><h3>Submission Requirements</h3><ul><li>A deployed website link (must be publicly accessible).</li><li>A GitHub repository link containing the project code along with a README file explaining the project.</li><li>A short video demonstration (maximum 3 minutes) explaining the website’s functionality (Mandatory).</li></ul><h3>Themes & Problem Statements</h3><p>Themes will be revealed 1 hour before the competition begins.</p><h3>Rules & Regulations</h3><ul><li>Participants must choose one theme and develop a website within 48 hours.</li><li>No extra time will be given beyond the 48-hour window.</li><li>Websites must be fully deployed and accessible via a live link.</li><li>No restrictions on technology—participants can use any tech stack.</li></ul><h3>Judging Criteria</h3><ul><li><strong>Functionality (30%)</strong> – The website must be fully functional with minimal bugs.</li><li><strong>Design & UI/UX (20%)</strong> – Aesthetic appeal and user experience matter.</li><li><strong>Innovation & Creativity (20%)</strong> – Unique and creative implementations will be rewarded.</li><li><strong>Problem-Solving & Real-World Applicability (20%)</strong> – How well the solution addresses a real problem within the chosen theme.</li><li><strong>Deployment & Presentation (10%)</strong> – The website must be accessible, properly deployed, and explained clearly in the video.</li></ul><h3>Competition Duration</h3><p><strong>Total Duration:</strong> 48 hours</p>",
      "startDate": "28-03-2025",
      "endDate": "26-04-2025",
      "venue": "Jamia Millia Islamia, Delhi",
      "prize": "₹--,---",
      "level": "Intermediate",
      "category": "webdev",
      "registrationStatus": "open",
      "registrationDeadline": "06-04-2025",
      "teamSize": "1-3 members",
      "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdE4nyXne9IobsHX0w1WgSh7uRpbe0CsnAOaUj6SjrqMB32dQ/viewform",
      "timeline": [
        { "time": "28 Mar 25, 12:00 PM IST", "event": "Registration Begins" },
        { "time": "17 Apr 25, 12:00 AM IST", "event": "Registration Deadline" },
        { "time": "18 Apr 25, 12:00 PM IST", "event": "Hackathon Begins" },
        { "time": "20 Apr 25, 12:00 PM IST", "event": "Hackathon Ends" },
        { "time": "26 Apr 25, 09:00 AM IST", "event": "Finale" }
      ],
      "requirements": "None"
    },
    {
      "id": 4,
      "status": 'coming_soon',
      "title": "Splunk Build-a-thon!",
      "description": "<p><strong>Track 1: Splunk App Development</strong></p><p>Build innovative apps that extend Splunk’s capabilities. This track focuses on creating impactful solutions that seamlessly integrate with Splunk’s ecosystem to solve real-world challenges.</p><h3>Sample Problem Statements</h3><ul><li>Develop an app that enhances workflows, providing faster response and resolution using real-time Splunk data.</li><li>Create a customized dashboarding tool to deliver actionable insights for specific industries like healthcare, retail, and finance.</li><li>Build an app that automates reporting and compliance tracking.</li><li>Design an app to encourage data quality improvements within enterprise environments.</li></ul><p><strong>Track 2: Splunk Add-on Integration Development</strong></p><p>Create powerful Splunk Add-ons that integrate external data sources, services, and platforms with Splunk. This track focuses on seamless data ingestion, enrichment, and interoperability between Splunk and third-party tools.</p><h3>Sample Problem Statements</h3><ul><li><strong>IT Service Management Integration:</strong> Build an integration that enables Splunk customers to collect authentication events from a SaaS identity management product using its REST API.</li><li><strong>Optimized Resource Allocation for DevOps:</strong> Create an integration that sends Splunk search events to an IT service management ticketing system using a webhook-based API.</li><li><strong>Threat Intelligence Integration:</strong> Develop a Splunk Technical Add-on that pulls real-time threat intelligence feeds (IP addresses, domains, vulnerabilities) from a REST-based or streaming API into Splunk, ensuring scheduling, error handling, and data filtering.</li></ul><p><strong>Track 3: Data Management (SPL2 Pipelines)</strong></p><p>Utilize SPL2 (Search Processing Language) to design efficient and scalable pipelines for data ingestion, transformation, and analysis. This track encourages optimizing data workflows and extracting meaningful insights.</p><h3>Sample Problem Statements</h3><ul><li><strong>Reduce Log Volume:</strong> Develop SPL2 pipelines to manage large volumes of network logs efficiently, reducing storage costs, processing time, and noise while maintaining compliance.</li><li><strong>Convert Logs to Metrics:</strong> Implement logs-to-metrics (L2M) pipelines in SPL2 to enhance observability, reduce storage costs, and enable real-time alerting.</li></ul><p><strong>Track 4: AI/ML</strong></p><p>Develop ML-based threat detections inside Splunk using MLTK. This track focuses on building real-time pipelines to identify threat actors within Splunk's ecosystem.</p><h3>Sample Problem Statements</h3><ul><li>Detect <strong>Unusual Volume of Bytes Written to USB</strong> per device model.</li><li>Identify <strong>Unusual Volume of Box Downloads</strong> per user.</li><li>Spot <strong>VPN Logins from Unusual Locations</strong> per user model.</li><li>Monitor <strong>Unusual Time of Print Commands</strong> per user model.</li><li>Analyze <strong>Unusual Volume of Pages Printed</strong> per device model.</li></ul>",
      "startDate": "28-04-2025",
      "endDate": "23-06-2025",
      "venue": "Online",
      "prize": "$400",
      "level": "Intermediate",
      "category": "track",
      "registrationStatus": "open",
      "registrationDeadline": "06-04-2025",
      "teamSize": "1-2 members",
      "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSe_m-g1MmyA_X9agH01_2t371zBB07JkxxARz2tBG3xULNvrQ/viewform",
      "timeline": [
        { "time": "28 Apr 25, 09:30 PM IST", "event": "Idea Phase Begins" },
        { "time": "26 May 25, 05:30 AM IST", "event": "Idea Phase Ends" },
        { "time": "26 May 25, 09:30 PM IST", "event": "Prototype Phase Begins" },
        { "time": "23 Jun 25, 05:30 AM IST", "event": "Prototype Phase Ends" }
      ],

      "requirements": "Open to all students, including those from non-technical backgrounds."
    },
    {
      "id": 5,
      "status": 'open',
      "title": "Ease the Error 5.0",
      "description": "<p><strong>Ease The Error 5.0</strong> is a 24-Hours Intercollegiate Hackathon conducted in Sri Venkateswara College of Engineering (SVCE), Sriperumbudur.</p><h3>Guidelines</h3><ul><li><strong>Team size:</strong> 4 - 6 members</li><li>Inter-college team members are not allowed (Members of the same college only)</li><li>Inter-specialization team members allowed</li><li>Problem Statements in over 5 Domains (Check our website)</li><li>2 reviews + Final judging</li><li>Software Hackathon</li><li>Registration only through our official website is taken under consideration</li><li>https://ease-the-error-sage.vercel.app</li></ul><h3>Round 1: Abstract Selection</h3><ul><li>Choose a problem statement and create an Abstract</li><li>The abstract template is provided on our website</li></ul><h3>Round 2: 24-Hour Hackathon</h3><ul><li>35 teams are shortlisted</li></ul><h3>Rules</h3><ul><li>Any software development tools, game engine, IDE, and/or programming language can be used for the event. If a team member uses a purchased tool licensed to them and the license is not transferable to other members, the team must choose one available to all developers.</li><li>Lightweight APIs like Google Maps, weather API, and addressing APIs are allowed. Heavyweight APIs are not allowed. In case of exceptions, judges will take the final call.</li><li>A team may not code applications that violate the code of conduct. For example, racially insensitive ideas for an application will automatically be disqualified.</li><li>All project submissions will be randomly code-reviewed. Applications will be spot-checked by code reviewers. All projects selected by the judges as finalists will be code-reviewed to confirm that the code is original work created at the hackathon and that all components and assets conform to the licenses allowed in these rules.</li></ul>",
      "startDate": "18-03-2025",
      "endDate": "18-04-2025",
      "venue": "Sri Venkateswara College of Engineering (SVCE), Chennai, Tamil Nadu",
      "prize": "₹50,000",
      "level": "Intermediate",
      "category": ["track", "open"],
      "registrationStatus": "open",
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
      "id": 6,
      "status": 'coming_soon',
      "title": "HACKHAZARDS '25",
      "description": "<p><strong>HACKHAZARDS '25</strong> is one of India's largest and premier community-run hackathons, making a comeback with more surprises than ever.</p><h3>Why Join HACKHAZARDS?</h3><ul><li><strong>Biggest Prize Pool:</strong> $10,000+ in cash, $250,000+ in credits & vouchers</li><li><strong>Exclusive Tracks:</strong> Monad, Base, Fluvio, Groq & RB Labs – making their India debut at HACKHAZARDS ‘25!</li><li><strong>Beginner-Friendly:</strong> Free workshops & bootcamps for all participants</li><li><strong>No Shortlisting:</strong> Everyone gets to hack!</li><li><strong>210 Hours of Hacking:</strong> Build something amazing</li><li><strong>Global Participation:</strong> Join from anywhere in the world</li><li><strong>Expert Guidance:</strong> 50+ global mentors & judges from top companies</li><li><strong>Exciting Rewards:</strong> Swags & cash prizes for the Top 100 teams</li><li><strong>Career Opportunities:</strong> Internship & incubation opportunities for standout teams</li><li><strong>Certificates:</strong> Provided for all successful project submissions</li></ul>",
      "startDate": "11-04-2025",
      "endDate": "20-04-2025",
      "venue": "Online",
      "prize": "$8,770",
      "level": "Intermediate",
      "category": ["track"],
      "registrationStatus": "open",
      "registrationDeadline": "07-04-2025",
      "teamSize": "1 - 4 members",
      "registrationLink": "",
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
