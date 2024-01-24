/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: MIT
 * Project #03 - Locate-o-pet
 * 
 * Filename: register.js
 * Date : 1/23/2024 11:30:54 AM
 *******************************************************************/
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';

export default function Login(props) {
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

          <Container className="my-1">
               <Form onSubmit={handleFormSubmit}>
                    <div className="flex-row space-between my-2">
                         <label htmlFor="userName">User Name:</label>
                         <input placeholder="First" name="userName" type="userName" id="userName" onChange={handleChange} />
                    </div>
                    <div className="flex-row space-between my-2">
                         <label htmlFor="email">Email:</label>
                         <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
                    </div>
                    <div className="flex-row space-between my-2">
                         <label htmlFor="phoneNumber">Phone Number:</label>
                         <input placeholder="(999)-999-9999" name="phoneNumber" type="phoneNumber" id="phoneNumber" onChange={handleChange} />
                    </div>
                    <div className="flex-row space-between my-2">
                         <label htmlFor="role">Role:</label>
                         <select name="role" onChange={handleChange}>
                              {rolesList.map((role) => {
                                   return (<option key={role.name} value={role.name}>{role.name}</option>);
                              })}
                         </select>
                    </div>
                    <div className="flex-row space-between my-2">
                         <label htmlFor="pwd">Password:</label>
                         <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
                    </div>
                    <div className="flex-row flex-end">
                         <button type="submit">Submit</button>
                    </div>
               </Form>
          </Container>

     );
}