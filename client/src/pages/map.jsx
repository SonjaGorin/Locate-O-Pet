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
import MapArea from "../components/MapArea/MapArea";
import LostPetsDiv from "../components/LostPetsDiv/LostPetsDiv";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALLPETS } from "../utils/queries";


import CatImage from "../../images/grey-cat.jpeg"
import "../pages/map.css"
import "../components/ShowLostPetsData/ShowLostPetsData.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';


export default function Map() {
     const [showLostPetForm, setShowLostPetForm] = useState(false);
     const [ userMarker, setUserMarker ] = useState();

     const { data, loading } = useQuery(QUERY_ALLPETS);
     if (loading) {
          return <h2>Loading...</h2>;
     }
     const petData = data.allPets

     return (
          <div>
               <div className='pet-form-map'>
                    <div>
                         <LostPetsDiv petData={petData} open={!showLostPetForm} />
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
               <button className='i-lost-pet-button' onClick={() => {setShowLostPetForm(true); setShowLostPetsDiv(false)}} >I lost a pet</button>
               <button className='i-saw-pet-button'>I saw a pet</button>
          </div>
     );
}