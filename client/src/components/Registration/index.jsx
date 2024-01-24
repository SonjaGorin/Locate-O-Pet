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
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';

export default function Registration(props) {
     const [rolesList, setRolesList] = useState([{ name: 'User' }, { name: 'Owner' }]);
     const [formState, setFormState] = useState({ email: '', password: '', phoneNumber: '', username: '', role: '' });
     const [addUser] = useMutation(ADD_USER);

     /**
      * This will handle the form submit. It prevents the form to clear and addUser using the 
      * corresponding mutation. It also assigns the token.
      * @param {*} event 
      */
     const handleFormSubmit = async (event) => {
          event.preventDefault();
          const mutationResponse = await addUser({
               variables: {
                    email: formState.email,
                    password: formState.password,
                    userName: formState.userName,
                    phoneNumber: formState.phoneNumber,
                    role: formState.role,
               },
          });
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
               <div class="row gy-3 overflow-hidden">
                    <div className="flex-row space-between my-2">
                         <div class="col-12">
                              <div class="form-floating mb-3">
                                   <input type="text" class="form-control" name="userName" id="userName" placeholder="First Name" onChange={handleChange} required />
                                   <label htmlFor="userName" class="form-label">User Name</label>
                              </div>
                         </div>

                    </div>
                    <div className="flex-row space-between my-2">
                         <div class="col-12">
                              <div class="form-floating mb-3">
                                   <input class="form-control" placeholder="youremail@lost-pets.com" name="email" type="text" id="email" onChange={handleChange} />
                                   <label htmlFor="email" class="form-label">Email</label>
                              </div>
                         </div>

                    </div>
                    <div className="flex-row space-between my-2">
                         <div class="col-12">
                              <div class="form-floating mb-3">
                                   <input class="form-control" placeholder="(999)-999-9999" name="phoneNumber" type="text" id="phoneNumber" onChange={handleChange} />
                                   <label htmlFor="phoneNumber" class="form-label">Phone Number:</label>
                              </div>
                         </div>
                    </div>
                    <div className="flex-row space-between my-2">
                         <div class="col-12">
                              <div class="form-floating mb-3">

                                   <select class="form-control" id="role" name="role" onChange={handleChange}>
                                        {rolesList.map((role) => {
                                             return (<option key={role.name} value={role.name}>{role.name}</option>);
                                        })}
                                   </select>
                                   <label htmlFor="role" class="form-label">Role:</label>
                              </div>
                         </div>
                    </div>
                    <div className="flex-row space-between my-2">
                         <div class="col-12">
                              <div class="form-floating mb-3">
                                   <input class="form-control" placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
                                   <label htmlFor="pwd" class="form-label">Password:</label>
                              </div>
                         </div>
                    </div>

                    <div class="col-12">
                         <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                   <label class="form-check-label text-secondary" for="iAgree">
                                        I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                                   </label>
                         </div>
                    </div>
                    <div class="col-12">
                         <div class="d-grid">
                              <button class="btn btn-primary btn-lg" type="submit">Sign up</button>
                         </div>
                    </div>

               </div>
          </Form>

     );
}