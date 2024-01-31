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
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import LostPetForm from "../components/PetForms/LostPetForm";
import SeenPetForm from "../components/PetForms/SeenPetForm";
import MapArea from "../components/MapArea/MapArea";
import PetCards from "../components/PetCards/PetCards";
import FilterDiv from "../components/FilterDiv/FilterDiv";
import Auth from "../utils/auth";
import Swal from 'sweetalert2';



import { useQuery } from "@apollo/client";
import { QUERY_ALLPETS } from "../utils/queries";

import "./map.css";



mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX
// console.log(mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX)
 

const LeftPanel = {
  PetsList: 0,
  LostPetForm: 1,
  SeenPetForm: 2,
  UserPosts: 3,
};

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
};

const PetFilterFunctions = [
  (pet) => true,
  (pet) => pet.status === "isLost",
  (pet) => pet.status === "isSeen",
  (pet) => pet.addedByMe,
];

export default function Map() {
     console.log("Rerendering map")
     const [leftPanel, setLeftPanel] = useState(LeftPanel.PetsList);
     const [userMarker, setUserMarker] = useState();
     const [showButtons, setShowButtons] = useState(true);
     const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
     const [selectedPetId, setSelectedPetId] = useState();
     const [petFilter, setPetFilter] = useState(PetFilter.all);
     const [isMobile, setIsMobile] = useState(false);

     const { data, loading, refetch } = useQuery(QUERY_ALLPETS);

     useEffect(() => {
          const handleResize = () => {
               setIsMobile(window.innerWidth <= 1250);
          };

          window.addEventListener("resize", handleResize);
          handleResize();

          return () => {
               window.removeEventListener("resize", handleResize);
          };
     }, []);

     if (loading) {
          return <div>Loading...</div>;
     }

     function lostFormButtonsOnClick() {
          setLeftPanel(LeftPanel.LostPetForm);
          setShowButtons(false);
          setUserMarker(null);
     }

     function seenFormButtonsOnClick() {
          setLeftPanel(LeftPanel.SeenPetForm);
          setShowButtons(false);
          setUserMarker(null);
     }

     var pets = data.allPets ? [...data.allPets] : [];
     pets.sort(comparePets);
     pets = pets.filter(PetFilterFunctions[petFilter]);
     console.log(pets);
     return (
          <>
               {!isMobile ? (
                    <div className="page-height">
                         <div className="pet-form-map">
                              <div className="form-div">
                                   <FilterDiv
                                        open={leftPanel == LeftPanel.PetsList}
                                        onOptionSelection={(optionName) => {
                                             if (optionName === "onlyMine" && !isLoggedIn) {
                                                  Swal.fire({
                                                       position: "center-center",
                                                       icon: "error",
                                                       title: "Please log in to see your posts.",
                                                       showConfirmButton: true,
                                                  });
                                             }
                                             setPetFilter(PetFilter[optionName])
                                        }}
                                        showButtons={showButtons && isLoggedIn}
                                        onClickLost={lostFormButtonsOnClick}
                                        onClickSeen={seenFormButtonsOnClick}
                                   />
                                   <PetCards
                                        pets={pets}
                                        open={leftPanel == LeftPanel.PetsList}
                                        setSelectedPetId={setSelectedPetId}
                                        refetch={refetch}
                                   />
                                   <SeenPetForm
                                        open={leftPanel == LeftPanel.SeenPetForm}
                                        hideForm={() => {
                                             setLeftPanel(LeftPanel.PetsList);
                                             setUserMarker(null);
                                             refetch();
                                             setShowButtons(true);
                                        }}
                                        userMarker={userMarker}
                                   />
                                   <LostPetForm
                                        open={leftPanel == LeftPanel.LostPetForm}
                                        hideForm={() => {
                                             setLeftPanel(LeftPanel.PetsList);
                                             setUserMarker(null);
                                             refetch();
                                             setShowButtons(true);
                                        }}
                                        userMarker={userMarker}
                                   />
                              </div>
                              <div className="map-div">
                                   <MapArea
                                        userMarker={userMarker}
                                        ignoreClick={leftPanel == LeftPanel.PetsList}
                                        setUserMarker={setUserMarker}
                                        pets={pets}
                                        selectedPetId={selectedPetId}
                                   />
                              </div>
                         </div>
                    </div>
               ) : (
                    <div className="page-height">
                         <div className="pet-form-map d-flex flex-column">
                              <div className="form-div2 d-flex">
                                   <div>
                                        <FilterDiv
                                             open={leftPanel == LeftPanel.PetsList}
                                             onOptionSelection={(optionName) => {
                                                  if (optionName === "onlyMine" && !isLoggedIn) {
                                                       Swal.fire({
                                                            position: "center-center",
                                                            icon: "error",
                                                            title: "Please log in to see your posts.",
                                                            showConfirmButton: true,
                                                       });
                                                  }
                                                  setPetFilter(PetFilter[optionName])
                                             }}
                                             showButtons={showButtons && isLoggedIn}
                                             onClickLost={lostFormButtonsOnClick}
                                             onClickSeen={seenFormButtonsOnClick}
                                        />
                                   </div>
                                        <PetCards
                                             pets={pets}
                                             open={leftPanel == LeftPanel.PetsList}
                                             setSelectedPetId={setSelectedPetId}
                                             refetch={refetch}
                                        />
                                        <SeenPetForm
                                             open={leftPanel == LeftPanel.SeenPetForm}
                                             hideForm={() => {
                                                  setLeftPanel(LeftPanel.PetsList);
                                                  setUserMarker(null);
                                                  refetch();
                                                  setShowButtons(true);
                                             }}
                                             userMarker={userMarker}
                                        />
                                        <LostPetForm
                                             open={leftPanel == LeftPanel.LostPetForm}
                                             hideForm={() => {
                                                  setLeftPanel(LeftPanel.PetsList);
                                                  setUserMarker(null);
                                                  refetch();
                                                  setShowButtons(true);
                                                  }}
                                             userMarker={userMarker}
                                        />
                              </div>
                              <div className="map-div2">
                                   <MapArea
                                        userMarker={userMarker}
                                        ignoreClick={leftPanel == LeftPanel.PetsList}
                                        setUserMarker={setUserMarker}
                                        pets={pets}
                                        selectedPetId={selectedPetId}
                                   />
                              </div>
                         </div>
                    </div>
               )}
          </>
     );
}
