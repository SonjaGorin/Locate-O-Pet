import { useState } from "react";
// import "./SeenPetForm.css"

import { useMutation } from "@apollo/client";
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
    const [errorMessage, setErrorMessage] = useState("");

    const [ addSeenPet ] = useMutation(ADD_SEENPET);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        // making sure that the right set function is called depending on the input field user is typing in
        if (name === "species") {
            return setSpecies(value)
        }  else if (name === "sex") {
            return setSex(value)
        }  else if (name === "breed") {
            return setBreed(value)
        }  else if (name === "colours") {
            return setColours(value)
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

        const variables = { input: {species, sex, breed, colours, message, lat: userMarker.getLngLat().lat, lng: userMarker.getLngLat().lng }};

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
        setErrorMessage("Form successfully submitted!");
    };

    return (
        <div>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="species-input">
                    <label>Is the pet cat, dog or a bird?<span>*</span></label>
                    <select name="species" onChange={handleInputChange} value={species}>
                        <option onBlur={blurFunction}>Cat</option>
                        <option onBlur={blurFunction}>Dog</option>
                        <option onBlur={blurFunction}>Bird</option>
                    </select>
                </div>
                <div className="sex-input">
                    <label>Is the pet a girl or a boy?</label>
                    <select name="sex" onChange={handleInputChange} value={sex}>
                        <option>I don't know</option>
                        <option>Girl</option>
                        <option>Boy</option>
                    </select>
                </div>
                <div className="breed-input">
                    <label>What breed is the pet?</label>
                    <input
                        value={breed}
                        name="breed"
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
                <div className="colours-input">
                    <label>What colour is the pet?<span>*</span></label>
                    <input
                        value={colours}
                        name="colours"
                        onChange={handleInputChange}
                        onBlur={blurFunction}
                        type="text"
                    />
                </div>
                <div className="message-input">
                    <label>Would you like to add anything else?<span>*</span></label>
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={blurFunction}
                        type="text"
                        className="message-field"
                    />
                </div>
                <div>
                    <h2>Please choose a location on a map where you saw the pet.<span>*</span></h2>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button type="submit" className="submit-bttn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}