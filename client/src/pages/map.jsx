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
import LostSeenPetForm from "../components/PetForm/LostSeenPetForm"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

function addMarkerOnClick (currentMap, event) {
     var coordinates = event.lngLat;
     addMarker(coordinates, currentMap);
     addPopup(coordinates, currentMap);
};

function initializeMarkers(currentMap) {
     addMarker([-75.71697316450435, 45.35931696275756], currentMap);
}

function addPopup(coordinates, currentMap) {
     return new mapboxgl.Popup({ offset: 35 })
          .setLngLat(coordinates)
          .setHTML('MapBox Coordinate<br/>' + coordinates)
          .addTo(currentMap);
}

function addMarker(coordinates, currentMap) {
     console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
     new mapboxgl.Marker({
          color: "#FF0000",
          draggable: true
     }).setLngLat(coordinates).addTo(currentMap);
}

function initializeMap(mapContainer, map, lat, lng, zoom) {
     if (map.current) return map.current;
     map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
     });
     
     map.current.on('click', (event) => addMarkerOnClick(map.current, event));
     return map.current;
}

export default function Map() {
     const mapContainer = useRef(null);
     const map = useRef(null);
     const [lng, setLng] = useState(-75.7135);
     const [lat, setLat] = useState(45.3844);
     const [zoom, setZoom] = useState(10);
     const [showLostPetForm, setShowLostPetForm] = useState(false);


     useEffect(() => {
          var currentMap = initializeMap(mapContainer, map, lat, lng, zoom);
          initializeMarkers(currentMap);
          currentMap.on('move', () => {
               setLng(map.current.getCenter().lng.toFixed(4));
               setLat(map.current.getCenter().lat.toFixed(4));
               setZoom(map.current.getZoom().toFixed(2));
          });
     });

     return (
          <div>
               <LostSeenPetForm open={showLostPetForm}/>
               <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
               </div>
               <div ref={mapContainer} className="map-container" />
               <button onClick={() => setShowLostPetForm(true)}>I lost a pet</button>
               <button>I saw a pet</button>
          </div>
     );
}