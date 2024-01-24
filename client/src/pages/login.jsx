/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: login.jsx
 * Date : 1/23/2024 12:11:21 PM
 *******************************************************************/
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';
import '../components/Login/index.css'

function Login(props) {
     const [formState, setFormState] = useState({ email: '', password: '' });
     const [login, { error }] = useMutation(LOGIN_USER);

     const handleFormSubmit = async (event) => {
          event.preventDefault();
          try {
               const mutationResponse = await login({
                    variables: { email: formState.email, password: formState.password },
               });
               const token = mutationResponse.data.login.token;
               Auth.login(token);
          } catch (e) {
               console.log(e);
          }
     };

     const handleChange = (event) => {
          const { name, value } = event.target;
          setFormState({
               ...formState,
               [name]: value,
          });
     };

     return (
          <div className="container my-1">
               <Link to="/register">← Go to Register</Link>

               <h2>Locate-o-Pet Login</h2>
               <Form onSubmit={handleFormSubmit}>
                    <div className="flex-row space-between my-2">
                         <label htmlFor="email">Email address:</label>
                         <input placeholder="youremail@pets.com" name="email" type="email" id="email" onChange={handleChange} />
                    </div>
                    <div className="flex-row space-between my-2">
                         <label htmlFor="pwd">Password:</label>
                         <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
                    </div>

                    {error ? ( <div><p className="error-text">The provided credentials are incorrect</p></div>) : null}

                    <div className="flex-row flex-end">
                         <button type="submit">Submit</button>
                    </div>
               </Form>
          </div>
     );
}

export default Login;