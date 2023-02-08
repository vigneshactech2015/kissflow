import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-us-banner.jpg";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
 

 
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({  }) =>
                <img loading="lazy" src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ }) =>
                <div>
                <h2>Get In Touch</h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='name' placeholder="Full Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email' placeholder="Email"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message"></textarea>
                      <button type="submit"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
