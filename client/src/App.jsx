import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

// import './App.css'

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-75.695);
    const [lat, setLat] = useState(45.4215);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        var marker = new mapboxgl.Marker({
            color: "#FF0000",
            draggable: true
        })
            .setLngLat([-75.71697316450435, 45.35931696275756])
            .addTo(map.current);


        function add_marker (event) {
            var coordinates = event.lngLat;
            console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
            new mapboxgl.Marker({
                color: "#FF0000",
                draggable: true
            }).setLngLat(coordinates).addTo(map.current);
            marker.addTo(map.current); // for now required to avoid "unused variable" error
            // marker.setLngLat(coordinates).addTo(map.current);

            while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                var popup = new mapboxgl.Popup({ offset: 35 })
                    .setLngLat(coordinates)
                    .setHTML('MapBox Coordinate<br/>' + coordinates)
                    .addTo(map.current)

                        
        }

        // geocoder.on('result', function(r) {
        //     document.getElementById("maps").value = r.result.center;
        //     var reverse = document.getElementById("maps").value;
           
        //     var latitude = reverse[1];
        //     var longitude = reverse[0];
        //     document.getElementById("maps").value = latitude + "," + longitude;
          
        //     var marker1 = new mapboxgl.Marker({ draggable: false, color: "blue"})
        //     .setLngLat(r.result.center)
        //     .addTo(map);
        //     map.flyTo({
        //     center: r.result.center,
        //     zoom:15,
        //     speed:5,
        //     })
            
        //     new mapboxgl.Popup({offset: 35, closeOnClick: true})
        //         .setLngLat(r.result.center)
        //         .setHTML('MapBox Coordinate<br/>' + r.result.center)
        //         .addTo(map);
        //     map.on('click', function(){
        //         marker1.remove();
        //     })
        // });
          
        map.current.on('click', add_marker);

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });


    });

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
