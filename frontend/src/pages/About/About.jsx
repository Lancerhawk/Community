import './About.css';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="about-container">
            <section className="about-hero">
                <h1>About CodingEra!</h1>
                <p>Empowering students through code, community, and collaboration</p>
            </section>

            <section className="about-mission">
                <h2 className="section-title">Our Mission</h2>
                <div className="mission-content">
                    <p>
                        CodingEra! is a student-led community dedicated to fostering technical excellence and innovation among college students. 
                        We believe in the power of coding to transform ideas into reality and create solutions that matter.
                    </p>
                    <p>
                        Our mission is to provide a supportive environment where students can learn, collaborate, and grow their technical skills 
                        through hands-on projects, hackathons, and knowledge sharing sessions.
                    </p>
                </div>
            </section>

            <section className="about-values">
                <h2 className="section-title">Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Innovation</h3>
                        <p>We encourage creative thinking and novel approaches to problem-solving.</p>
                    </div>
                    <div className="value-card">
                        <h3>Collaboration</h3>
                        <p>We believe in the power of teamwork and diverse perspectives.</p>
                    </div>
                    <div className="value-card">
                        <h3>Inclusivity</h3>
                        <p>We welcome students of all backgrounds and skill levels.</p>
                    </div>
                    <div className="value-card">
                        <h3>Growth</h3>
                        <p>We are committed to continuous learning and improvement.</p>
                    </div>
                </div>
            </section>

            <section className="about-history">
                <h2 className="section-title">Our Journey</h2>
                <div className="history-content">
                    <p>
                        Founded in 2025 by a group of passionate computer science students, CodingEra! has grown from a small study group 
                        to a vibrant community with members across multiple colleges. Our journey has been marked by successful hackathons, 
                        collaborative projects, and a growing network of student developers.
                    </p>
                    <p>
                        Today, we continue to expand our reach and impact, connecting students with industry opportunities and 
                        fostering the next generation of tech innovators.
                    </p>
                </div>
            </section>

            <section className="about-join">
                <h2 className="section-title">Join Our Community</h2>
                <div className="join-content">
                    <p>
                        Whether you are just starting your coding journey or you are an experienced developer, there is a place for you in CodingEra! 
                        Join us to connect with like-minded peers, work on exciting projects, and take your skills to the next level.
                    </p>
                    <div className="join-cta">
    <a href="/" className="join-link">
        <button className="join-button">Become a Member</button>
    </a>
</div>

                </div>
            </section>
        </div>
    );
}

export default About;