import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="custom-footer py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Student Manager</h5>
            <p className="mb-0">Manage your student records smartly and efficiently.</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/insert">Add Student</a></li>
              <li><a href="/view">View Students</a></li>
              <li><a href="/update">Update Record</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="fw-bold">Subscribe</h6>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <input type="email" className="form-control" placeholder="Enter email" />
              <button className="btn btn-info">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="my-4 border-light-subtle" />
        <p className="text-center mb-0 small">&copy; {new Date().getFullYear()} Student Manager. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
