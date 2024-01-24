/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: lostpets.jsx
 * Date : 1/22/2024 9:05:01 PM
 *******************************************************************/
import { useQuery } from "@apollo/client";
import { QUERY_OWNER } from "../utils/queries";


export default function LostPets() {
     const { loading, data } = useQuery(QUERY_OWNER);
     const userData = data?.owners || {};
     const lostPets = []


     console.log(userData)

     
     return (
          <div>
               <h1>Lost Page</h1>
          </div>
     );
}