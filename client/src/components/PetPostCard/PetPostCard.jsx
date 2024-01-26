import "./PetPostCard.css"

export default function PetPostCard(props) {
    return (
        <div className="pet-post-card">
            <h2 className="card-text">This is my lost {props.species}</h2>
            <h2 className="card-text">Breed: {props.breed}</h2>
            <h2 className="card-text">Colour: {props.colours}</h2>
            <h2 className="card-text">They are a {props.sex}</h2>
            <h2 className="card-text">Message: {props.message}</h2>
        </div>
    )
}