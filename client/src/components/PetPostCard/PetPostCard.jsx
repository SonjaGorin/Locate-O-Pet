import "./PetPostCard.css"

export default function PetPostCard(pet) {
    if (pet.status === "isLost") {
        var speciesText = "This is my lost";
        var subclass = "background-red"
    } else if (pet.status === "isSeen") {
        var speciesText = "I saw a";
        var subclass = "background-green"
    } else {
        throw new Error(`Unexpected pet status ${pet.status}`)
    }
    const className = `pet-post-card ${subclass}`
    return (
    <div className={className}>
            <h2 className="card-text">{speciesText} {pet.species}</h2>
            <h2 className="card-text">Breed: {pet.breed}</h2>
            <h2 className="card-text">Colour: {pet.colours}</h2>
            <h2 className="card-text">They are a {pet.sex}</h2>
            <h2 className="card-text">Message: {pet.message}</h2>
        </div>
    )
}