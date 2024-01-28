import { useState } from "react";
import "./PetForms.css"
import { Container, Row, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { useMutation } from "@apollo/client";
import UploadWidget from '../UploadWidget';
import { ADD_SEENPET } from "../../utils/mutations";

export default function SeenPetForm({open, hideForm, userMarker}) {
    if (!open) {
        return (<div></div>);
    }

    const [species, setSpecies] = useState("Cat");
    const [sex, setSex] = useState("I don't know");
    const [breed, setBreed] = useState("");
    const [colours, setColours] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("isSeen");
    const [img, setImg] = useState("")
    const [errorMessage, setErrorMessage] = useState("");

    const [ addSeenPet ] = useMutation(ADD_SEENPET);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value, src } = e.target;
        // making sure that the right set function is called depending on the input field user is typing in
        if (name === "species") {
            return setSpecies(value)
        }  else if (name === "sex") {
            return setSex(value)
        }  else if (name === "breed") {
            return setBreed(value)
        }  else if (name === "colours") {
            return setColours(value)
        } else if (name === "image") {
            return setImg(src)
        } else {
            return setMessage(value)
        }
    }

    const blurFunction = (e) => {
        const { name, value } = e.target;
        if (value === "") {
            setErrorMessage(`The ${name} field is required.`);
            return;
        }
        setErrorMessage("");
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target

        if (!userMarker) {
            setErrorMessage("Please click on the map to chose pet's location.");
            return;
        }

        const variables = { input: {species, sex, breed, colours, message, lat: userMarker.getLngLat().lat, lng: userMarker.getLngLat().lng, status, img }};

        if (!species || !colours || !message) {
            setErrorMessage("Please fill up all fields.");
            return;
        }

        try {
            await addSeenPet({variables})
        } catch (error) {
            console.log(error)
        }

        hideForm();
        setSpecies("");
        setSex("");
        setBreed("");
        setColours("");
        setMessage("");
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: "The new pet has been added!",
            showConfirmButton: false,
            timer: 2000,
          });
    };

    return (
        <div className="form-div2 back-color-seen">
            <h1  className="sorry-greeting">We are so glad you saw someone's pet!</h1>
            <h2  className="under-greeting">Please describe them as best as possible.</h2>
            <form  className="form" onSubmit={handleFormSubmit}>
                <div className="species-input">
                    <label>Is the pet cat, dog or a bird?<span className="required-asterix">*</span></label>
                    <select className="form-field" name="species" onChange={handleInputChange} value={species}>
                        <option onBlur={blurFunction}>Cat</option>
                        <option onBlur={blurFunction}>Dog</option>
                        <option onBlur={blurFunction}>Bird</option>
                    </select>
                </div>
                <div className="sex-input">
                    <label>Is the pet a girl or a boy?</label>
                    <select className="form-field" name="sex" onChange={handleInputChange} value={sex}>
                        <option>I don't know</option>
                        <option>A girl</option>
                        <option>A boy</option>
                    </select>
                </div>
                <div className="breed-input">
                    <label>What breed is the pet?</label>
                    <input
                        className="form-field"
                        value={breed}
                        name="breed"
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
                <div className="colours-input">
                    <label>What colour is the pet?<span className="required-asterix">*</span></label>
                    <input
                        className="form-field"
                        value={colours}
                        name="colours"
                        onChange={handleInputChange}
                        onBlur={blurFunction}
                        type="text"
                    />
                </div>
                <div className="message-input">
                    <label>Would you like to add anything else?<span className="required-asterix">*</span></label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={blurFunction}
                        type="text"
                        className="message-field"
                    />
                </div>
                <div className="upload-img-bttn">
                    <UploadWidget onUpload={(src) => setImg(src)}/>
                    <img id="uploadedimage" name="image" src={img} />
                </div>
                {!userMarker &&
                <div>
                    <h2 className="choose-location-msg">Please choose a location on a map where the pet was last seen.<span className="required-asterix">*</span></h2>
                </div>
                }
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button type="submit" className="submit-bttn btn btn-primary btn-lg">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}