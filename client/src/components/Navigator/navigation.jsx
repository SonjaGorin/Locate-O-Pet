/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: Navigation.jsx
 * Date : 1/14/2024 17:03:48 PM
 *******************************************************************/
import { Link, useLocation } from 'react-router-dom';
import Auth from "../../utils/auth";

function Navigation() {

     const cp = useLocation().pathname;

     /**
      * This function will build the options for when user is logged in and for when they are not. All options are 
      * available for anyone that uses the website
      * @returns 
      */
     function showOptions() {
          if (Auth.loggedIn()) {
               return (
                    <ul className="navbar-nav" id="navScrollspy">
                         <li key={1} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/' ? 'active' : ''}`} to="/" >Map</Link></li>
                         <li key={2} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/About' ? 'active' : ''}`} to="/About" >About Us</Link></li>
                         <li key={3} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/Contact' ? 'active' : ''}`} to="/Contact" >Contact Us</Link></li>
                         <li key={4} className="nav-item">
                              <a className={`nav-link fs-3 ${cp === '/Logout' ? 'active' : ''}`} href="/" onClick={() => Auth.logout()}>Logout</a>
                         </li>
                    </ul>
               )
          } else {
               return (
                    <ul className="navbar-nav" id="navScrollspy">
                         <li key={1} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/' ? 'active' : ''}`} to="/" >Map</Link></li>
                         <li key={2} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/About' ? 'active' : ''}`} to="/About" >About Us</Link></li>
                         <li key={3} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/Contact' ? 'active' : ''}`} to="/Contact" >Contact Us</Link></li>
                         <li key={4} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/Login' ? 'active' : ''}`} to="/Login" >Login</Link></li>
                    </ul>
               )
          }
     }

     return (

          <nav className="navbar bg-primary navbar-dark navbar-expand-lg">
               <div className="container">
                    <Link className="navbar-brand nav-title" to="/"><i className="fa fa-smile-o" aria-hidden="true"></i> Locate-o-Pet</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                         <div>
                              {showOptions()}
                         </div>
                    </div>
               </div>
          </nav >
     );
}

export default Navigation;