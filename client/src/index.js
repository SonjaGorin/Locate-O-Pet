import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('map-root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)