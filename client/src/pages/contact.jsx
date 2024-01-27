/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: contact.jsx
 * Date : 1/24/2024 7:51:27 PM
 *******************************************************************/
import { Link } from 'react-router-dom';
import Header from '../components/Contact/header.jsx';
import GraphEnv from '../components/Contact/envelope.jsx';
import GraphPhone from '../components/Contact/phoneicon.jsx';
import { Container, Row, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "./contact.css"

export default function Contact() {

     const handleClick = () => {
          Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Your message has been sent",
               showConfirmButton: false,
               timer: 2500
          });
     };

     return (

          <section className="bg-light py-3 py-md-5 contact-height">

               <Container>

                    <Header />

                    <Row className="justify-content-lg-center">
                         <div className="col-12 col-lg-9">
                              <div className="bg-white border rounded shadow-sm overflow-hidden">

                                   <Form action="#!">
                                        <Row className="gy-4 gy-xl-5 p-4 p-xl-5">
                                             <div className="col-12">
                                                  <label htmlfor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                                                  <input type="text" className="form-control" id="fullname" name="fullname" value="" required />
                                             </div>
                                             <div className="col-12 col-md-6">
                                                  <label htmlfor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                  <div className="input-group">
                                                       <span className="input-group-text"><GraphEnv /></span>
                                                       <input type="email" className="form-control" id="email" name="email" value="" required />
                                                  </div>
                                             </div>
                                             <div className="col-12 col-md-6">
                                                  <label htmlfor="phone" className="form-label">Phone Number</label>
                                                  <div className="input-group">
                                                       <span className="input-group-text"><GraphPhone /></span>
                                                       <input type="tel" className="form-control" id="phone" name="phone" value="" />
                                                  </div>
                                             </div>
                                             <div className="col-12">
                                                  <label htmlfor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                                  <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                                             </div>
                                             <div className="col-12">
                                                  <div className="d-grid">
                                                       <Link onClick={handleClick} className="btn btn-primary btn-lg" type="submit">Submit</Link>
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