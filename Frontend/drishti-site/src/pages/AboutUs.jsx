import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import per1 from '../assets/person1.jpeg';

const About = () => {
  return (
    <div className="about-page">
      <Container className="about-container">
        <h2>About Us</h2>

        {/* Mission, Vision, and History Cards */}
        <div className="about-content">
          <Row>
            <Col md={4}>
              <Card className="about-card">
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    At Drishti Technologies, our mission is to leverage innovative technology to create
                    accessible and scalable solutions that empower individuals and organizations to realize
                    their potential.
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
            {[{
              name: "Ved",
              role: "Founder and CEO",
              img: per1,
              email: "alex.smith@example.com",
              linkedin: "https://www.linkedin.com/in/alexsmith"
            }, {
              name: "May Brown",
              role: "Sales Manager",
              img: per1,
              email: "may.brown@example.com",
              linkedin: "https://www.linkedin.com/in/maybrown"
            }, {
              name: "Ann Richmond",
              role: "Web Developer",
              img: per1,
              email: "ann.richmond@example.com",
              linkedin: "https://www.linkedin.com/in/annrichmond"
            }].map((member, idx) => (
              <Col md={4} className="team-member" key={idx}>
  <Card className="team-card">
    <div className="team-image-container">
      <Card.Img variant="top" src={member.img} />
    </div>
    <Card.Body className="team-card-body">
      <Card.Title>{member.name}</Card.Title>
      <Card.Text className="role">{member.role}</Card.Text>
      <div className="social-icons">
        <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
          <i className="fa-regular fa-envelope icon"></i>
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin icon"></i>
        </a>
      </div>
      <button className="butsOfAbt">Connect</button>
    </Card.Body>
  </Card>
</Col>

            ))}
          </Row>
        </section>

        {/* Call to Action Section */}
        <section className="cta">
          <h2>Want to work with us?</h2>
          <a href="/contact">
            <button className="cont">Contact Us</button>
          </a>
        </section>
      </Container>
    </div>
  );
};

export default About;
