/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Sonja Gorin, Jacob Martin, Gustavo Miller
 * License: MIT
 * Project #03 - Locate-o-pet
 * 
 * Filename: UploadWidget.jsx
 * Date : 1/25/2024 08:41:34 PM
 *******************************************************************/
import { useEffect, useRef } from "react";

const UploadWidget = () => {

     const cloudinaryRef = useRef()
     const widgetRef = useRef()

     useEffect(() => {

          cloudinaryRef.current = window.cloudinary;
          widgetRef.current = cloudinaryRef.current.createUploadWidget({
               cloudName: 'dbjovbbrj',
               uploadPreset: 'l9cr83zg'
          }, function (error, result) {
               console.log(result);
          })
          
     }, [])

     return (
          <button onClick={() => { widgetRef.current.open() }}>
               Upload
          </button>
     )

}

export default UploadWidget;