import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Contact.css";

function Contact() {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  let values, names;
  const data = (e) => {
    values = e.target.value;
    names = e.target.name;
    setUser({ ...user, [names]: values });
  };
  const send = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    };
    const send = await fetch(
      "https://sdt-ecommerse-default-rtdb.firebaseio.com/Message.json",
      option
    );
    if (send) {
      alert("Message sent succesfull");
    } else {
      alert("Error");
    }
  };
  console.log(user);
  return (
    <div className="container-fluid contact">
      <div className="row mx-2 p-3">
        <div className="form col col-12 col-md-6 mx-auto p-2 bg-light">
          <h2 className="text-danger py-1">Contact Us</h2>

          <Form method="POST">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="p-1"
                type="text"
                placeholder="Name"
                onChange={data}
                value={user.name}
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="p-1"
                type="email"
                placeholder="name@example.com"
                onChange={data}
                value={user.email}
                name="email"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Text your message</Form.Label>
              <Form.Control
                className="p-1"
                as="textarea"
                rows={3}
                placeholder="Message"
                onChange={data}
                value={user.message}
                name="message"
                required
              />
            </Form.Group>
            <Button
              className="py-1 px-3"
              variant="primary"
              type="submit"
              onClick={send}
            >
              Send
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
