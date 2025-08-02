import { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import BackendURL from "../utils/BackendUrl";
import axios from "axios";
import "../css/Insert.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Insert = () => {
  const [input, setInput] = useState({
    name: "",
    rollno: "",
    course: "",
    email: "",
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = `${BackendURL}students/save`;
    const res = await axios.post(api, input);
    toast.success("Student data saved successfully!", {
      style: {
        background: "#2e6dccff",
        color: "#fff",
        fontWeight: "bold",
        width: "30vw",
        textAlign: "center",
      },
    });
    setInput({ name: "", rollno: "", course: "", email: "" });
  };

  return (
    <div className="insert-page">
      <ToastContainer
        hideProgressBar={true}
        theme="colored"
        position="top-center"
        autoClose={2000}
      />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="insert-card border-0">
              <h2 className="insert-title">✨ Add New Student</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleinput}
                    placeholder="Enter full name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Roll Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="rollno"
                    value={input.rollno}
                    onChange={handleinput}
                    placeholder="E.g., 1023"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    type="text"
                    name="course"
                    value={input.course}
                    onChange={handleinput}
                    placeholder="E.g., B.Tech CSE"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleinput}
                    placeholder="E.g., student@example.com"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="submit-btn">
                  ➕ Add Student
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Insert;
