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
import { Button } from 'react-bootstrap';

const UploadWidget = () => {

     const cloudinaryRef = useRef()
     const widgetRef = useRef()

     useEffect(() => {
          cloudinaryRef.current = window.cloudinary;
          widgetRef.current = cloudinaryRef.current.createUploadWidget({
               cloudName: 'dbjovbbrj',
               uploadPreset: 'l9cr83zg'
          }, function (error, result) {
               if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    console.log(result.info.secure_url);
                    document
                         .getElementById("uploadedimage")
                         .setAttribute("src", result.info.secure_url);
               }
          })

     }, [])

     return (
          <Button className="btn btn-primary btn-lg mt-5" onClick={() => { widgetRef.current.open() }}>Upload Image</Button>
     )

}

export default UploadWidget;