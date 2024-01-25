import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "../pages/map.css";
import CatImage from "../../images/grey-cat.jpeg"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

function addMarkerOnClick (map, userMarker, setUserMarker, event) {
    var coordinates = event.lngLat;
    if (userMarker) {
        userMarker.setLngLat(coordinates);
        addPopup(coordinates, map.current);
        setUserMarker(userMarker);
        return;
    }
    var userMarker = addMarker(coordinates, map.current);
    addPopup(coordinates, map.current);
    setUserMarker(userMarker);
}

function addMarker(coordinates, currentMap) {
    let marker =  new mapboxgl.Marker({
        color: "#0000FF",
        draggable: true
    }).setLngLat(coordinates).addTo(currentMap);
    return marker
}

function initializeMarkers(map, petData) {
    {petData.map((pet) => {

        return new mapboxgl.Marker({
            color: "#FF0000",
            draggable: false
        }).setLngLat({lng: pet.lng, lat: pet.lat})
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                `<h3>${pet.species}</h3>`
                )
        )
        .addTo(map.current);
    })} 
}

function addPopup(coordinates, currentMap) {
    return new mapboxgl.Popup({ offset: 35 })
            .setLngLat(coordinates)
            .setHTML('MapBox Coordinate<br/>' + coordinates)
            .addTo(currentMap);
}

function initializeMap(mapContainer, map, lat, setLat, lng, setLng, zoom, setZoom, onClick, petData) {
    if (map.current) return map.current;

    map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
    });
    map.current
        .on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        })
        .on('click', onClick);
    initializeMarkers(map, petData);
    return map.current;
}


class ClickListener {
    constructor(ignore, map, userMarker, setUserMarker) {
        this.ignore = ignore;
        this.map = map
        this.userMarker = userMarker;
        this.setUserMarker = setUserMarker;
    }
    onClick(event) {
        if (this.ignore) {
            return
        }
        addMarkerOnClick(this.map, this.userMarker, this.setUserMarker, event)
    }
}

export default function MapArea ({userMarker, showLostPetForm, setUserMarker, petData}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-75.6991);
    const [lat, setLat] = useState(45.3685);
    const [zoom, setZoom] = useState(10);
    const clickListener = useRef(null);
    const ignoreClick = showLostPetForm == false;
    
    if (!clickListener.current) {
        clickListener.current = new ClickListener(ignoreClick, map, userMarker, setUserMarker);
    } else {
        clickListener.current.ignore = ignoreClick;
        clickListener.current.userMarker = userMarker;
        clickListener.current.setUserMarker = setUserMarker;
    }

    useEffect(() => {
        initializeMap(mapContainer, map, lat, setLat, lng, setLng, zoom, setZoom, clickListener.current.onClick.bind(clickListener.current), petData);
    });

    return(
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
};

