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
      title: "COMSYS Hackathon-6, 2025",
      description: "<p>COMSYS Hackathon-6,2025 is a premier global hackathon hosted under The 4th International Conference on Data Electronics and Computing (ICDEC-2025) by COMSYS Educational Trust,in collaboration with Jadavpur University,Kolkata.Focuses on combating the rise of audio-based deepfake technologies,this hackathon inspires young innovators to build powerful AI/ML solutions capable of differentiating real voices from synthetic ones in challenging real-world environments.</p><h3>AbouttheConference(ICDEC-2025)</h3><p>The4thInternationalConferenceonDataElectronicsandComputing(ICDEC-2025)willbeheldfrom<strong>1stto3rdDecember2025</strong>atBaderiaGlobalInstituteofEngineeringandManagement,Jabalpur.Theconferenceaimstobringtogetherresearchers,academicians,andindustryprofessionalsinthefields ofElectronics,Computing,ImageProcessing,andArtificialIntelligencetoexchangeinnovativeideasandfostercollaborations.</p><h3>HackathonTheme</h3><p><strong>HacktheFake,SavetheReal</strong>–ADeepfakeAudioClassificationChallengeintheWild.Thischallengeemphasizesreal-worldapplicabilitywhereaudioclipsmaybenoisy,compressed,manipulated,oradversariallyengineeredtobypassdetectionsystems.</p><h3>ProblemStatement</h3><p>WiththeriseofgenerativeAI,audiodeepfakeshaveemergedasaseriousthreattosecurity,privacy,andauthenticity.Participantsmustbuildmachinelearningmodelsthatcandistinguishbetweenrealandsyntheticvoicesunderdiverseandunpredictableconditions.</p><h3>HackathonTasks</h3><ul><li><strong>TaskA:</strong>Spot the Real vs Fake Voices (Binary Classification)</li><li><strong>TaskB:</strong>TBA</li><li><strong>TaskC:</strong>TBA</li></ul><h3>WhyParticipate?</h3><ul><li><strong>Real-WorldChallenge:</strong>Workonemergingsecuritythreatsthatimpactsocietyglobally.</li><li><strong>Cutting-EdgeAI/ML:</strong>Applydeeplearning,audioprocessing,andadversarialdefensetechniques.</li><li><strong>Research&Collaboration:</strong>Engagewithacademiaandindustryexperts.</li><li><strong>ImpactfulInnovation:</strong>Contributetobuildingasaferandmoretrustworthydigitalworld.</li></ul><h3>EligibilityCriteria</h3><ul><li>Opento<strong>Undergraduate,Postgraduate,andPhDstudents</strong>acrossdisciplines.</li><li>Inter-collegeteamsareallowed.</li><li>TeamSize:<strong>1–4members</strong>.</li><li>Eachteammustdesignate<strong>oneteamleader</strong>responsibleforsubmissions.</li></ul><h3>RegistrationDetails</h3><ul><li><strong>RegistrationFee(India):</strong>INR200perteam</li><li><strong>RegistrationFee(International):</strong>USD20perteam</li><li><strong>PaymentPurpose:</strong>COMSYS-62025Hackathon</li></ul><h3>PaymentInstructionsforInternationalParticipants</h3><ul><li><strong>AccountName:</strong>COMSYSEducationalTrust</li><li><strong>BankName:</strong>StateBankofIndia</li><li><strong>Branch:</strong>JadavpurUniversity</li><li><strong>AccountNumber:</strong>41078443652</li><li><strong>SWIFTCode:</strong>SBININBB368</li><li><strong>BankAddress:</strong>JadavpurUniversityBranch,Kolkata–700032,WestBengal,India</li></ul><h3>Rules&Regulations</h3><ul><li><strong>StrictDeadline:</strong>Noregistrationsacceptedafterclosingdate.</li><li><strong>TeamCompositionLocked:</strong>Nochangesallowedafterregistration.</li><li><strong>MandatoryRegistration:</strong>Everyteammembermustberegistered.</li><li><strong>SingleTeamMembership:</strong>Participantsmayjoinonlyoneteam.</li><li><strong>SubmissionRequirement:</strong>Deliverablesmustincludecodeanddocumentation.</li><li><strong>EthicalCompliance:</strong>Misuseofdeepfaketechnologywillresultindisqualification.</li><li><strong>Organizer’sDecision:</strong>Finalandbinding.</li></ul><h3>ImportantDates&Deadlines</h3><ul><li><strong>RegistrationDeadline:</strong>19October2025,11:11PMIST</li><li><strong>DatasetRelease:</strong>20October2025</li><li><strong>HackathonDates:</strong>TBA</li></ul><h3>Contact</h3><p>Foranyqueries,email:<strong>comsys6hackathon@gmail.com</strong></p><h3>EventHighlights</h3><ul><li><strong>MultiphaseCompetition:</strong>Challengestestingmodelrobustnessagainstadversarialattacks.</li><li><strong>Industry-AcademiaCollaboration:</strong>Opportunitytonetworkwithleadingresearchers.</li><li><strong>FocusonReal-WorldApplication:</strong>Models must perform under noisy and manipulated audio conditions.</li></ul><h3>JoinTheMovement</h3><p>BepartofagroundbreakinginitiativetoprotectdigitalcommunicationbydevelopingtrustworthyAIsystemstodetectsyntheticvoices.<strong>ProtectthetruthintheageofAI.</strong></p>",
     
      startDate: "19-10-2025",
      endDate: "20-10-2025",
      venue: "Jadavpur University (JU), Kolkata",
      prize: "TBA",
      level: "Intermediate",
      category: "open",
      registrationStatus: "open",
      registrationDeadline: "28-10-2025",
      teamSize: "1-4 members",
      registrationLink:"https://docs.google.com/forms/d/e/1FAIpQLSdQ2U70MugkWnjs6P9vKdYeXCQDUcEDXdiQCXxciczuFP9oOw/viewform",
     
"timeline":[
  { "time":"Registration Open","event":"Registration begins" },
  { "time":"19 Oct 2025, 11:11 PM IST","event":"Registration Deadline" },
  { "time":"20 Oct 2025","event":"Dataset Release" },
  { "time":"TBA","event":"Hackathon Round A Submission" },
  { "time":"TBA","event":"Hackathon Round B" },
  { "time":"TBA","event":"Hackathon Round C / Final Evaluation" },
  { "time":"1-3 December 2025","event":"ICDEC-2025 Conference & Final Presentations" }
],
      requirements: "Open to All"
    },
    
   {
      id: 2,
      status: 'open',
      title: "Smart India Hackathon 2025",
      description: "<p>Smart India Hackathon (SIH) is a premier nationwide initiative designed to engage students in solving some of the most pressing challenges faced in everyday life. It provides a dynamic platform for students to develop and showcase their creative solutions to real-world problems, fostering innovation and bridging the gap between academic knowledge and practical application.</p><h3>About SIH</h3><p>Since its inception, SIH has promoted out-of-the-box thinking among young minds and encourages collaboration with industry experts, government agencies, and other stakeholders.</p><h3>Game Zones</h3><ul><li><strong>Innovative Solutions</strong> – Cost-effective and creative solutions for real-world problems.</li><li><strong>Recognition & Visibility</strong> – National recognition across premier institutions.</li><li><strong>Out-of-the-box Solutions</strong> – Unique approaches from talented students.</li><li><strong>Innovation Movement</strong> – Be part of the world’s biggest open innovation platform.</li></ul><h3>Event Details</h3><ul><li><strong>Idea Submission Deadline</strong>: TBA</li><li><strong>Finals Date</strong>: TBA</li><li><strong>Team Size</strong>: TBA</li><li><strong>Registration Fee</strong>: Free</li><li><strong>Eligibility</strong>: Open to students from across India</li></ul><h3>Why Join?</h3><ul><li><strong>Innovative Solutions</strong> – Get innovative solutions to your problems in cost effective ways.</li><li><strong>Recognition and visibility</strong> – National recognition and visibility across premier institutions in India.</li><li><strong>Out-of-the-box solutions</strong> – Talented youngsters offer out-of-the-box solutions to your problems.</li><li><strong>Innovation Movement Opportunity</strong> – Be part of the world’s biggest open innovation movement.</li></ul><h3>How to Participate?</h3><ol><li>SPOC registration is now open for Colleges.</li><li>Know Your SPOC.</li><li>Submit Your Ideas.</li><li>Join the Hackathon Finals.</li></ol><h3>Competition Rounds</h3><ul><li><strong>Round 1 (Idea Submission)</strong>: Teams submit ideas via SPOC for evaluation.</li><li><strong>Round 2 (Hackathon)</strong>: Coding, mentorship, and project building.</li><li><strong>Round 3 (Presentations)</strong>: Teams present projects to judges and stakeholders.</li></ul><h3>Prize Pool</h3><p><strong>Total Prize Pool:</strong> ₹2,25,000 (1st Prize: ₹1,00,000 | 2nd Prize: ₹75,000 | 3rd Prize: ₹50,000)</p>",
     
      startDate: "25-08-2025",
      endDate: "01-12-2025",
      venue: "Multiple Nodal Centers across India (TBA)",
      prize: "Rs. 2.25lakh ",
      level: "Intermediate",
      category: "open",
      registrationStatus: "open",
      registrationDeadline: "30-09-2025",
      teamSize: "1-6 members",
      registrationLink: "https://forms.gle/vb5fuBiA5deTAwsX7",
     
"timeline":[
  { "time":"25 Aug 2025","event":"SPOC & Team Registration begins" },
  { "time":"30 Sep 2025","event":"SPOC & Team Registration ends" },
  { "time":"DEC 2025 (TBA)","event":"Hackathon finals (grand finale)" }
],
      requirements: "Open to All"
    },
   

    {
      id: 3,
      status: 'closed',
      title: "MetaMorph 2025",
      description: "<p>MetaMorph is a 36-hour cosmic coding adventure where innovators come together to build groundbreaking projects. Hosted by Guru Nanak Institute of Technology, Kolkata, this hackathon offers a collaborative environment for participants to showcase their skills, gain hands-on experience with new technologies, and create impactful solutions.</p><h3>About MetaMorph</h3><p>MetaMorph brings together participants from across the country to develop futuristic solutions in fields such as AI & ML, Web Technologies, Blockchain Revolution, and more. This event provides access to cutting-edge resources, mentorship from industry experts, and opportunities to network with peers.</p><h3>Game Zones</h3><ul><li><strong>AI & ML</strong> – Build intelligent systems that solve real-world problems using machine learning and artificial intelligence.</li><li><strong>Web Technologies</strong> – Create innovative web solutions that address modern challenges.</li><li><strong>Blockchain Revolution</strong> – Develop decentralized applications and blockchain-powered solutions.</li><li><strong>Open Innovation</strong> – Work on creative ideas beyond domain boundaries.</li></ul><h3>Event Details</h3><ul><li><strong>Idea Submission Deadline</strong>: TBA</li><li><strong>Finals Date</strong>: September 6-7, 2025 (Offline Round at Guru Nanak Institute of Technology, Kolkata)</li><li><strong>Team Size</strong>: 1-4 members</li><li><strong>Registration Fee</strong>: Free</li><li><strong>Eligibility</strong>: Open to students from anywhere in the world</li></ul><h3>Why Join?</h3><ul><li><strong>Innovation & Learning</strong></li><li><strong>Cash Prizes</strong> across multiple categories</li><li><strong>Global Participation</strong>: Join from anywhere</li></ul><h3>How to Participate?</h3><ol><li>Register Now (Free Entry)</li><li>Form a Team (1-4 members)</li><li>Submit Your Ideas</li><li>Join the Hackathon on September 6-7, 2025</li></ol><h3>Competition Rounds</h3><ul><li><strong>Round 1 (Idea Submission)</strong>: Teams submit ideas and receive feedback from mentors.</li><li><strong>Round 2 (Hackathon Weekend)</strong>: 36 hours of coding, workshops, mentorship, and project building at GNIT, Kolkata.</li><li><strong>Round 3 (Presentations)</strong>: Teams present projects to judges and participants.</li></ul><h3>Prize Pool</h3><p><strong>Total Prize Pool:</strong> $1100</p>",
      startDate: "06-09-2025",
      endDate: "07-09-2025",
      venue: "GNIT, Nilgunj Road, Panihati, Kolkata",
      prize: "$1100",
      level: "Intermediate",
      category: "open",
      registrationStatus: "closed",
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
      id: 4,
      status: 'closed',
      title: "CyberShield Hackathon 2025 – Tackle Real-World Cybercrime!",
      description: "<p>CyberShield Hackathon 2025 is a real-world challenge where innovators come together to tackle cybercrime and build impactful solutions. This hackathon provides a collaborative environment for students to showcase their skills, gain hands-on experience, and contribute to digital security.</p><h3>About CyberShield Hackathon</h3><p>CyberShield brings together UG and PG engineering students to develop innovative solutions in fields such as cybercrime, digital investigation, and law enforcement support. This event offers mentorship, exposure, and the opportunity to present projects at CIIS 2025.</p><h3>Game Zones</h3><ul><li><strong>Cybercrime</strong> – Design tools and systems to prevent and detect cyber threats.</li><li><strong>Digital Investigation</strong> – Build solutions for forensics, evidence gathering, and analysis.</li><li><strong>Law Enforcement Solutions</strong> – Create technologies that empower agencies in combating cybercrime.</li></ul><h3>Event Details</h3><ul><li><strong>Registration Deadline</strong>: August 18, 2025</li><li><strong>Final Round Dates</strong>: September 9-11, 2025</li><li><strong>Final Round Venues</strong>: SGSITS Indore (Sept 9), MANIT Bhopal (Sept 10), JEC Jabalpur (Sept 11)</li><li><strong>Team Size</strong>: 3-5 members (at least one female participant required)</li><li><strong>Registration Fee</strong>: Free</li><li><strong>Eligibility</strong>: Open to all UG/PG Engineering Students</li></ul><h3>Why Join?</h3><ul><li><strong>Innovation & Impact</strong></li><li><strong>Cash Prizes</strong> for top teams</li><li><strong>Showcase Opportunity</strong> at CIIS 2025</li><li><strong>Pre-Placement Offers</strong> from ClearTrail Technologies</li></ul><h3>How to Participate?</h3><ol><li>Register before August 18, 2025</li><li>Form a Team (3-5 members with at least one female participant)</li><li>Submit your Application</li><li>Join the Final Round on September 9-11, 2025</li></ol><h3>Competition Rounds</h3><ul><li><strong>Team Formation</strong>: Teams formed based on skills or self-formed (no changes once finalized).</li><li><strong>Final Round (Offline Presentations)</strong>: Teams present solutions at SGSITS Indore, MANIT Bhopal, or JEC Jabalpur.</li></ul><h3>Prize Pool</h3><p><strong>Rewards:</strong> Substantial Cash Prizes, Showcase at CIIS 2025, and Pre-Placement Offers from ClearTrail Technologies.</p>",
      startDate: "09-09-2025",
      endDate: "11-09-2025",
     venue: "SGISITS, Indore",
     venue: "MANIT, Bhopal",
     venue: "JEC, Jabalpur",
      prize: "Substantial Cash Prizes, Showcase Opportunity at CIIS 2025 & Pre-Placement Offers from ClearTrail Technologies.",
      level: "Intermediate",
      category: "open",
      registrationStatus: "closed",
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
