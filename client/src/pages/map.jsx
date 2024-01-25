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


import CatImage from "../../images/grey-cat.jpeg"
import "../pages/map.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

// function addMarkerOnClick (map, userMarker, setUserMarker, event) {
//      var coordinates = event.lngLat;
//      console.log(coordinates)
//      console.log(map)
//      if (userMarker) {
//           console.log("moving marker")
//           userMarker.setLngLat(coordinates);
//           console.log("Moved the marker to " + coordinates);
//           addPopup(coordinates, map.current);
//           return;
//      }
//      console.log("adding marker")
//      var userMarker = addMarker(coordinates, map.current);
//      console.log(userMarker)
//      addPopup(coordinates, map.current);
//      // setUserMarker(userMarker);
// };

// function addMarker(coordinates, currentMap) {
//      // console.log("Adding a marker to " + coordinates);
//      let marker =  new mapboxgl.Marker({
//           color: "#FF0000",
//           draggable: true
//      }).setLngLat(coordinates).addTo(currentMap);
//      return marker
// }

// function initializeMarkers(map) {
//      const pet = {species: "cat", sex: "male", breed: "house cat", colours: "grey", message: "friendly", lat: 45.412860, lng: -75.702441}
//      const classNam = "cat-img"
//      return new mapboxgl.Marker({
//           color: "#FF0000",
//           draggable: false
//      }).setLngLat({lng: pet.lng, lat: pet.lat})
//      .setPopup(
//           new mapboxgl.Popup({ offset: 25 }) // add popups
//           .setHTML(
//           `<h3>${pet.species}</h3>
//           <img class=${classNam} src=${CatImage} />`
//           )
//           )
//      .addTo(map.current);
// }

// function addPopup(coordinates, currentMap) {
//      return new mapboxgl.Popup({ offset: 35 })
//           .setLngLat(coordinates)
//           .setHTML('MapBox Coordinate<br/>' + coordinates)
//           .addTo(currentMap);
// }



// function initializeMap(mapContainer, map, lat, lng, zoom) {
//      if (map.current) return map.current;
//      map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v12',
//           center: [lng, lat],
//           zoom: zoom
//      });
//      return map.current;
// }

export default function Map() {
     const [showLostPetForm, setShowLostPetForm] = useState(false);
     const [ userMarker, setUserMarker ] = useState()

     return (
          <div>
               <div className='pet-form-map'>

                    <div>
                         <LostSeenPetForm open={showLostPetForm} hideForm={() => setShowLostPetForm(false)} userMarker={userMarker}/>
                    </div>
                    <div>
                         <MapArea userMarker={userMarker} showLostPetForm={showLostPetForm} setUserMarker={setUserMarker}/>
                    </div>
                    {/* <div>
                         <div className="sidebar">
                              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                         </div>
                         <div ref={mapContainer} className="map-container" />
                    </div> */}
               </div>
               <button onClick={() => setShowLostPetForm(true)}>I lost a pet</button>
               <button>I saw a pet</button>
          </div>
     );
}