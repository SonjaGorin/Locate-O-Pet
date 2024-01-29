import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./MapArea.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

function addMarkerOnClick (map, userMarker, setUserMarker, event) {
    var coordinates = event.lngLat;
    if (userMarker) {
        userMarker.setLngLat(coordinates);
        setUserMarker(userMarker);
        return;
    }
    var userMarker = addMarker(coordinates, map.current);
    setUserMarker(userMarker);
}

function addMarker(coordinates, currentMap) {
    let marker =  new mapboxgl.Marker({
        color: "#0000FF",
        draggable: true
    }).setLngLat(coordinates).addTo(currentMap);
    return marker
}

function markerColor(pet) {
    if (pet.status === "isLost") {
        return "#FF0000"
    } else {
        return "#008000"
    }
}

function markerSize(isSelected) {
    if (isSelected) {
        return 1.5
    }
}

function initializeMarkers(map, pets, markers, selectedPetId) {
    if (!pets) return;
    if (!map.current) return;
    for (var marker of markers.current) {
        marker.remove();
    }
    markers.current = [];
    {pets.map((pet) => {
        var marker = new mapboxgl.Marker({
            color: markerColor(pet),
            scale: markerSize(pet._id == selectedPetId),
            draggable: false
        }).setLngLat({lng: pet.lng, lat: pet.lat})
        .setPopup(
            new mapboxgl.Popup({ 
                offset: 25,
                closeButton: false,
                closeOnClick: true 
            }) // add popups
                .setHTML(
                `<h3>${pet.species}</h3>
                <p><img class="pet-popup-img" src=${pet.img} ></img></p>`
                )
        )
        .addTo(map.current);

        marker.getElement().addEventListener("click", () => {
            document.getElementById(`pet_${pet._id}`).scrollIntoView({behavior: "smooth", block: "center", inline: 'center'});
        });
        markers.current.push(marker);
        return marker;
    })} 
}

function initializeMap(mapContainer, map, lat, setLat, lng, setLng, zoom, setZoom, onClick) {
    if (map.current) return map.current;

    map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
    });
    map.current.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                maximumAge: Infinity,
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true,
            fitBoundsOptions: {maxZoom: 10},
            showUserHeading: false
        })
        .on('trackuserlocationstart', () => {
            console.log('A trackuserlocationstart event has occurred.');
        }) 
    )
    map.current
        .on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        })
        .on('click', onClick)
         
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

export default function MapArea ({userMarker, ignoreClick, setUserMarker, pets, selectedPetId}) {
    // console.log(`Rendering MapArea with ${pets}`);
    if (userMarker) {console.log(userMarker.getLngLat())};
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-75.6991);
    const [lat, setLat] = useState(45.3685);
    const [zoom, setZoom] = useState(10);
    const clickListener = useRef(null);
    const markers = useRef([]);
    
    if (!clickListener.current) {
        clickListener.current = new ClickListener(ignoreClick, map, userMarker, setUserMarker);
    } else {
        if (clickListener.current.userMarker) {
            if (!userMarker) {
                clickListener.current.userMarker.remove();
            }
        };
        clickListener.current.ignore = ignoreClick;
        clickListener.current.userMarker = userMarker;
        clickListener.current.setUserMarker = setUserMarker;
    }

    useEffect(() => {
        initializeMap(mapContainer, map, lat, setLat, lng, setLng, zoom, setZoom, clickListener.current.onClick.bind(clickListener.current), pets);
        initializeMarkers(map, pets, markers, selectedPetId);
    });
    
    initializeMarkers(map, pets, markers, selectedPetId);
    return(
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
};

