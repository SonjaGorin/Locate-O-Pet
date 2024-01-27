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
import LostPetForm from "../components/PetForms/LostPetForm";
import SeenPetForm from "../components/PetForms/SeenPetForm";
import MapArea from "../components/MapArea/MapArea";
import PetsDiv from "../components/PetsDiv/PetsDiv";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALLPETS } from "../utils/queries";

import CatImage from "../../images/grey-cat.jpeg"
import "../pages/map.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

const LeftPanel = {
	PetsList: 0,
	LostPetForm: 1,
	SeenPetForm: 2,
}

export default function Map() {
     // console.log("Rendering Map");
     const [leftPanel, setLeftPanel] = useState(LeftPanel.PetsList);
     // const [showSeenPetForm, setShowSeenPetForm] = useState(false);
     const [ userMarker, setUserMarker ] = useState();
     const [ pets, setPets ] = useState([]);
     const petsFetched = (data) => {
          console.log("Fetched pets");
          console.log(data.allPets);
          setPets(data.allPets);
     }
     
     const { loading, refetch } = useQuery(QUERY_ALLPETS, {onCompleted: petsFetched});
     
     if (loading) {
          return <h2>Loading...</h2>;
     }

     return (
          <div>
               <div className='pet-form-map'>
                    <div className='form-div'>
                         <PetsDiv pets={pets} open={leftPanel == LeftPanel.PetsList} />
                         <SeenPetForm open={leftPanel == LeftPanel.SeenPetForm} hideForm={() => {setLeftPanel(LeftPanel.PetsList); setUserMarker(null); refetch();}} userMarker={userMarker}/>
                         <LostPetForm open={leftPanel == LeftPanel.LostPetForm} hideForm={() => {setLeftPanel(LeftPanel.PetsList); setUserMarker(null); refetch();}} userMarker={userMarker}/>
                    </div>
                    <div>
                         <MapArea 
                              userMarker={userMarker} 
                              ignoreClick={leftPanel == LeftPanel.PetsList} 
                              setUserMarker={setUserMarker} 
                              pets={pets}/>
                    </div>
               </div>
               <button className='i-lost-pet-button' onClick={() => {setLeftPanel(LeftPanel.LostPetForm)}} >I lost a pet</button>
               <button className='i-saw-pet-button' onClick={() => {setLeftPanel(LeftPanel.SeenPetForm); setUserMarker(null)}}>I saw a pet</button>
          </div>
     );
}