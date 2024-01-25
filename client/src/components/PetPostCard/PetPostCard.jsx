// import "./PetPostCard.css"

export default function PetPostCard(props) {
    return (
        <div>
            <h2>{props.species}</h2>
            <h2>{props.breed}</h2>
        </div>
    )
}