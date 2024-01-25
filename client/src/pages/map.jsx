/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: map.jsx
 * Date : 1/22/2024 9:05:01 PM
 *******************************************************************/
// import '../App.css';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import LostSeenPetForm from "../components/PetForm/LostSeenPetForm";
import MapArea from "../components/MapArea";
import ShowLostPetsData from "../components/PostsDiv/ShowLostPetsData";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALLPETS } from "../utils/queries";


import CatImage from "../../images/grey-cat.jpeg"
import "../pages/map.css"
import "../components/PostsDiv/ShowLostPetsData.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';


export default function Map() {
     const [showLostPetForm, setShowLostPetForm] = useState(false);
     const [ userMarker, setUserMarker ] = useState()

     const { data, loading } = useQuery(QUERY_ALLPETS);
     if (loading) {
          return <h2>Loading...</h2>;
     }
     const petData = data.allPets

     return (
          <div>
               <div className='pet-form-map'>
                    <div className="all-pets-div">
                         <h1>Lost Pets</h1>
                         {petData.map((pet) => {
                              return (
                                   <div >
                                        <ShowLostPetsData 
                                             key={pet._id} 
                                             species={pet.species} 
                                             breed={pet.breed}
                                             colours={pet.colours} 
                                             message={pet.message}
                                             sex={pet.sex} />
                                   </div>
                              )
                         })} 
                    </div>

                    <div>
                         <LostSeenPetForm open={showLostPetForm} hideForm={() => setShowLostPetForm(false)} userMarker={userMarker}/>
                    </div>
                    <div>
                         <MapArea 
                              userMarker={userMarker} 
                              showLostPetForm={showLostPetForm} 
                              setUserMarker={setUserMarker} 
                              petData={petData}/>
                    </div>
               </div>
               <button onClick={() => setShowLostPetForm(true)}>I lost a pet</button>
               <button>I saw a pet</button>
          </div>
     );
}