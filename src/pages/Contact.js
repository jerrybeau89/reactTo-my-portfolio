import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Contact = () => {
  // const userContact = {
  //   user_name: "",
  //   user_email: "",
  //   user_message: "",
  // };
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [validated, setValidated] = useState(false);
  const formEl = useRef();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const form = e.target;
    if (form.checkValidity() === true) {
      e.preventDefault();
      setValidated(true);

      setTimeout(() => {
        setShowMessage(false);
        setValues({ user_name: "", user_email: "", user_message: "" });
      }, 4000);

      emailjs
        .sendForm(
          "service_7cx0qbj",
          "template_rhsmyzp",
          formEl.current,
          "usbKVnOe8fTRmVVXt"
        )
        .then(
          (result) => {
            setShowMessage(true);

            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Card className=" page-content container-fluid col-lg-8 col-md-8 col-sm-8 my-2 text-center rounded-5 bg-success bg-opacity-25">
      <Card.Body>
        <Card.Title className="bg-success bg-opacity-50 display-3 fw-bold text rounded-5">
          Connect with me
        </Card.Title>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          ref={formEl}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="fw-bold fs-4 text">Name</Form.Label>
            <Form.Control
              value={values.user_name}
              as="input"
              type="text"
              name="user_name"
              id="name"
              placeholder="Your name here.."
              onChange={onChange}
              required
            />
            <Form.Control.Feedback className="text-dark fw-bold">
              Thank you, {values.user_name}!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your name!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="fw-bold fs-4 text">Email</Form.Label>
            <Form.Control
              value={values.user_email}
              as="input"
              type="email"
              name="user_email"
              placeholder="someone@somewhere.com"
              onChange={onChange}
              required
            />
            <Form.Control.Feedback className="text-dark fw-bold">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please use a valid email format example@something.com!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold fs-4 text">Message</Form.Label>
            <Form.Control
              value={values.user_message}
              as="textarea"
              name="user_message"
              id="message"
              placeholder="How can I help you?"
              rows={3}
              onChange={onChange}
              required
            />
            <Form.Control.Feedback className="text-dark fw-bold">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            className="btn shadow"
            variant="danger"
            type="submit"
            name="submit"
          >
            Connect
          </Button>
          {showMessage && (
            <p className="card-message rounded">
              Message Sent! Thank you, I will reach out once I receive your
              inquiry!
            </p>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Contact;
