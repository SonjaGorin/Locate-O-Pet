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
import PetCards from "../components/PetCards/PetCards";
import FilterDiv from "../components/FilterDiv/FilterDiv";
import Auth from "../utils/auth";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALLPETS } from "../utils/queries";
import { QUERY_ME } from "../utils/queries";

import "./map.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

const LeftPanel = {
	PetsList: 0,
	LostPetForm: 1,
	SeenPetForm: 2,
     UserPosts: 3,
}


function comparePets(pet1, pet2) {
     const pet1CreatedAt = new Date(pet1.createdAt);
     const pet2CreatedAt = new Date(pet2.createdAt);
     if (pet1CreatedAt > pet2CreatedAt) return -1;
     return 1;
}

const PetFilter = {
	all: 0,
	onlyLost: 1,
	onlySeen: 2,
     onlyMine: 3,
}

const PetFilterFunctions = [
     (pet) => true,
     (pet) => pet.status === "isLost",
     (pet) => pet.status === "isSeen",
     (pet) => pet.isAddedByMe,
]

export default function Map() {
     // console.log("Rendering Map");
     const [leftPanel, setLeftPanel] = useState(LeftPanel.PetsList);
     const [ userMarker, setUserMarker ] = useState();
     const [ showButtons, setShowButtons ] = useState(true)
     const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
     const [selectedPetId, setSelectedPetId] = useState();
     const [petFilter, setPetFilter] = useState(PetFilter.all);

     const { data, loading, refetch } = useQuery(QUERY_ALLPETS);

     const { myPets, myPetsLoading } = useQuery(QUERY_ME);

     if (loading || myPetsLoading) {
          return (<div>Loading...</div>);
     }
     const user = myPets?.me || {};

     var pets = data.allPets ? [...data.allPets] : [];
     pets.sort(comparePets);
     console.log(pets)
     pets = pets.filter(PetFilterFunctions[petFilter]);
     console.log(pets)

     return (
          <div className='page-height'>
               <div className='pet-form-map'>
                    <div className='form-div'>
                         <FilterDiv 
                              open={leftPanel == LeftPanel.PetsList} 
                              onOptionSelection={(optionName) => {console.log(optionName); setPetFilter(PetFilter[optionName])}}/>
                         <PetCards pets={pets} open={leftPanel == LeftPanel.PetsList} setSelectedPetId={setSelectedPetId}/>
                         <SeenPetForm 
                              open={leftPanel == LeftPanel.SeenPetForm} 
                              hideForm={() => {setLeftPanel(LeftPanel.PetsList); setUserMarker(null); refetch();}} 
                              userMarker={userMarker}/>
                         <LostPetForm 
                              open={leftPanel == LeftPanel.LostPetForm} 
                              hideForm={() => {setLeftPanel(LeftPanel.PetsList); setUserMarker(null); refetch();}} 
                              userMarker={userMarker}/>
                    </div>
                    <div className='map-div'>
                         <MapArea 
                              userMarker={userMarker} 
                              ignoreClick={leftPanel == LeftPanel.PetsList}
                              setUserMarker={setUserMarker} 
                              pets={pets}
                              selectedPetId={selectedPetId}
                              />
                    </div>
               </div>
               {isLoggedIn && showButtons && <button  className='i-lost-pet-button btn btn-primary bg-red btn-lg' onClick={() => {setLeftPanel(LeftPanel.LostPetForm); setShowButtons(false)}} >I lost a pet</button>}
               {isLoggedIn && showButtons && <button className='i-saw-pet-button btn btn-primary btn-lg' onClick={() => {setLeftPanel(LeftPanel.SeenPetForm); setShowButtons(false); setUserMarker(null)}}>I saw a pet</button>}
          </div>
     );
}