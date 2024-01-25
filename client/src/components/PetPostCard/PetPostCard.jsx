import "./PetPostCard.css"

export default function PetPostCard(props) {
    return (
        <div className="pet-post-card">
            <h2>This is my lost {props.species}</h2>
            <h2>Breed: {props.breed}</h2>
            <h2>Colour: {props.colours}</h2>
            <h2>They are a {props.sex}</h2>
            <h2>Message: {props.message}</h2>
        </div>
    )
}