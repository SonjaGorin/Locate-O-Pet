/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: about.jsx
 * Date : 1/22/2024 9:05:01 PM
 *******************************************************************/
import { Container } from 'react-bootstrap';

export default function About() {
     return (
          <div>
               <section class="py-3 py-md-5 py-xl-8">
                    <Container>
                         <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                              <div class="col-12 col-lg-6 col-xl-5">
                                   <img class="img-fluid rounded" loading="lazy" src="./assets/img/about-img-1.jpg" alt="" />
                              </div>
                              <div class="col-12 col-lg-6 col-xl-7">
                                   <div class="row justify-content-xl-center">
                                        <div class="col-12 col-xl-11">
                                             <h2 class="h1 mb-3">Who Are We?</h2>
                                             <p class="lead fs-4 text-secondary mb-3">We help pet owners search for them when they take the wrong turn. Our goal is to bring your pet back home</p>
                                             <p class="mb-5">We are a small but fast-growing service, we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </section>
          </div>
     );
}