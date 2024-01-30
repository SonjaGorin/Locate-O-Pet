/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 *
 * Filename: contact.jsx
 * Date : 1/24/2024 7:51:27 PM
 *******************************************************************/
import { Link } from "react-router-dom";
import Header from "../components/Contact/header.jsx";
import GraphEnv from "../components/Contact/envelope.jsx";
import GraphPhone from "../components/Contact/phoneicon.jsx";
import { Container, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  const numberValidation = /^(\+\d{1,3}\s?)?(\()?\d{3}(\))?[-.\s]?\d{3}[-.\s]?\d{4}$/

  const handleChange = (event) => {
    const { name, value } = event.target;

    return name === "fullname"
      ? setName(value)
      : name === "email"
      ? setEmail(value)
      : name === "phone"
      ? setPhone(value)
      : setMessage(value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
     Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Must fill in required fields.",
          showConfirmButton: false,
          timer: 2500,
        });
    } else if (!(emailValidation.test(email)) && !(numberValidation.test(phone))) {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Neither email or number are of a valid format.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (!numberValidation.test(phone)) {
     Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Please input a valid phone number.",
          showConfirmButton: false,
          timer: 2500,
        });
    } else if (!emailValidation.test(email)) {
     Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Please enter a valid email.",
          showConfirmButton: false,
          timer: 2500,
        });
    } else {
    
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <section className="bg-light py-3 py-md-5">
      <Container>
        <Header />

        <Row className="justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <Form action="#!">
                <Row className="gy-4 gy-xl-5 p-4 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="fullname" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      value={name}
                      type="text"
                      className="form-control"
                      id="fullname"
                      name="fullname"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <GraphEnv />
                      </span>
                      <input
                        value={email}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <GraphPhone />
                      </span>
                      <input
                        value={phone}
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      value={message}
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <Link
                        onClick={handleClick}
                        className="btn btn-primary btn-lg"
                        type="submit"
                      >
                        Submit
                      </Link>
                    </div>
                  </div>
                </Row>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
