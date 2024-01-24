/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: MIT
 * Project #03 - Locate-o-pet
 * 
 * Filename: register.js
 * Date : 1/23/2024 11:30:54 AM
 *******************************************************************/
import Login from '../components/Login/index'

function Register(props) {

     return (

          <section class="bg-light py-3 py-md-5 py-xl-8">
               <div class="container">
                    <div class="row justify-content-center">
                         <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                              <div class="mb-5">
                                   <h4 class="text-center mb-4">Registration</h4>
                              </div>
                              <div class="card border border-light-subtle rounded-4">
                                   <div class="card-body p-3 p-md-4 p-xl-5">

                                        <section className="bg-light py-3 py-md-5 py-xl-8">
                                             <Login />
                                        </section>

                                   </div>
                              </div>
                              <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                                   <p class="m-0 text-secondary text-center">Already have an account? <a href="#!" class="link-primary text-decoration-none">Sign in</a></p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     );
}

export default Register;