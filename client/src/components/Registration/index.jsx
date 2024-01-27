/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: MIT
 * Project #03 - Locate-o-pet
 * 
 * Filename: Regisration/index.js
 * Date : 1/23/2024 11:30:54 AM
 *******************************************************************/
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';

export default function Registration() {     
     const [formState, setFormState] = useState({ email: '', password: '', phoneNumber: '', name: '' });
     const [addUser] = useMutation(ADD_USER);

     /**
      * This will handle the form submit. It prevents the form to clear and addUser using the 
      * corresponding mutation. It also assigns the token.
      * @param {*} event 
      */
     const handleFormSubmit = async (event) => {
          event.preventDefault();
          debugger;
          const mutationResponse = await addUser({
               variables: {
                    name: formState.name,
                    email: formState.email,
                    password: formState.password,
               },
          });
          debugger;
          const token = mutationResponse.data.addUser.token;
          Auth.login(token);
     };

     /**
      * This will listen for any changes on the form and set the state of the form (formState). The source
      * it is contained in the event.target
      * @param {*} event 
      */
     const handleChange = (event) => {
          const { name, value } = event.target;
          setFormState({ ...formState, [name]: value, });
     };

     return (

          <Form onSubmit={handleFormSubmit}>
               <div className="row gy-3 overflow-hidden">
                    <div className="flex-row space-between my-2">
                         <div className="col-12">
                              <div className="form-floating mb-3">
                                   <input type="text" className="form-control" name="name" id="name" value={formState.name}
                                        placeholder="First Name" onChange={handleChange} required />
                                   <label htmlFor="name" className="form-label">Name</label>
                              </div>
                         </div>

                    </div>
                    <div className="flex-row space-between my-2">
                         <div className="col-12">
                              <div className="form-floating mb-3">
                                   <input className="form-control" placeholder="youremail@lost-pets.com" name="email" value={formState.email}
                                        type="text" id="email" onChange={handleChange} />
                                   <label htmlFor="email" className="form-label">Email</label>
                              </div>
                         </div>

                    </div>
                    <div className="flex-row space-between my-2">
                         <div className="col-12">
                              <div className="form-floating mb-3">
                                   <input className="form-control" placeholder="******" name="password" value={formState.password}
                                        type="password" id="pwd" onChange={handleChange} />
                                   <label htmlFor="pwd" className="form-label">Password:</label>
                              </div>
                         </div>
                    </div>

                    <div className="col-12">
                         <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                   <label className="form-check-label text-secondary" htmlFor="iAgree">
                                        I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                                   </label>
                         </div>
                    </div>
                    <div className="col-12">
                         <div className="d-grid">
                              <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
                         </div>
                    </div>

               </div>
          </Form>

     );
}