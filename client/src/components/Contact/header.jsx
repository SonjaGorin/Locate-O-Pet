/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: MIT
 * Project #03 - Locate-o-pet
 * 
 * Filename: header.js
 * Date : 1/23/2024 11:30:54 AM
 *******************************************************************/
export default function Header() {
     return (

          <div className="justify-content-md-center row">
               <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                    <h2 className="mb-4 display-5 text-center">Contact</h2>
                    <p className="text-secondary text-center">At Locate-o-Pet we want to give you a better service in finding your lost pet, please do not hesitate in contacting us. Please fill out all of the required fields and we will get back to you as soon as possible.</p>
                    <hr className="w-50 mx-auto mb-xl-9 border-dark-subtle" />
               </div>
          </div>

     );
}