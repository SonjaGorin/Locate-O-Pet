/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: app.jsx
 * Date : 1/22/2024 9:05:01 PM
 *******************************************************************/
import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import NavigationBar from './components/Navigator/index';
import { setContext } from '@apollo/client/link/context';

import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbmphIiwiYSI6ImNscm9kZ3RheDFoMGoybG9mZGZiNGphOG4ifQ.xYb4Ch19HGpuJpK2BXQ3tg';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({ uri: '/graphql', });

/**
 * Construct request middleware that will attach the JWT token to 
 * every request as an `authorization` header. It first gets the 
 * authentication token from local storage if it exists. It then 
 * return the headers to the context so httpLink can read them
 */
const authLink = setContext((_, { headers }) => {
     const token = localStorage.getItem('id_token');
     return {
          headers: { ...headers, authorization: token ? `Bearer ${token}` : '', },
     };
});

/**
 * There is only one endpoint that ends with Slash Graphql. Apollo Client stores
 * the results of your GraphQL queries in a local, normalized, in-memory cache. 
 * This enables Apollo Client to respond almost immediately to queries for 
 * already-cached data, without even sending a network request.
 * https://www.apollographql.com/docs/react/caching/overview
 */
const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache(), });

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
          <ApolloProvider client={client}>
               <NavigationBar />
               <Outlet />
               <div ref={mapContainer} className="map-container" />
          </ApolloProvider>
     );
}