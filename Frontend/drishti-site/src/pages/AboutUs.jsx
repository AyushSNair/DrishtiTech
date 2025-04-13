import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';
import gmailIcon from '../assets/gmail.png';
import linkedinIcon from '../assets/linkedin.png';

const About = () => {
  return (
    <div className="about-page">
      <Container className="about-container">
        <h1 className="page-title">About Us</h1>

        {/* Mission, Vision, and History in Cards - Same Row */}
        <div className="about-content">
          <Row>
            <Col md={4}>
              <Card className="about-card">
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    At Drishti Technologies, our mission is to leverage innovative technology to create
                    accessible and scalable solutions that empower individuals and organizations to realize
                    their potential. We are dedicated to transforming ideas into impactful realities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="about-card">
                <Card.Body>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    Our vision is to become a global leader in technological solutions that drive positive change,
                    creating a future where innovation leads to greater accessibility and equity for all.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="about-card">
                <Card.Body>
                  <Card.Title>Our History</Card.Title>
                  <Card.Text>
                    Founded in [Year], Drishti Technologies has grown from a small startup into a leader
                    in delivering cutting-edge tech solutions. Our journey has been shaped by a commitment
                    to excellence and a passion for solving real-world challenges.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Team Section */}
        <section className="team">
          <h2>Meet the Team</h2>
          <Row>
            <Col md={4} className="team-member">
              <Card className="team-card">
                <Card.Img variant="top" src="path_to_team_member_image.jpg" />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <div className="social-icons">
                    <a href="mailto:john.doe@example.com" target="_blank" rel="noopener noreferrer">
                      <img src={gmailIcon} alt="Gmail" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                      <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                    </a>
                  </div>
                  <button className='butsOfAbt'>Connect</button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="team-member">
              <Card className="team-card">
                <Card.Img variant="top" src="path_to_team_member_image.jpg" />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <div className="social-icons">
                    <a href="mailto:john.doe@example.com" target="_blank" rel="noopener noreferrer">
                      <img src={gmailIcon} alt="Gmail" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                      <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                    </a>
                  </div>
                  <button className='butsOfAbt'>Connect</button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="team-member">
              <Card className="team-card">
                <Card.Img variant="top" src="path_to_team_member_image.jpg" />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <div className="social-icons">
                    <a href="mailto:john.doe@example.com" target="_blank" rel="noopener noreferrer">
                      <img src={gmailIcon} alt="Gmail" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                      <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                    </a>
                  </div>
                  <button className='butsOfAbt'>Connect</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Call to Action Section */}
        <section className="cta">
          <h2>Want to work with us?</h2>
          <button className='butsOfAbt' href="/contact">Contact Us</button>
        </section>
      </Container>
    </div>
  );
};

export default About;
