import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

// import './App.css'

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-75.695);
    const [lat] = useState(45.4215);
    const [zoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
        <div ref={mapContainer} className="map-container" />
        </div>
    );
}
