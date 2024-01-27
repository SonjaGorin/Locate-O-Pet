import "./PetPostCard.css"

export default function PetPostCard(pet) {
    if (pet.status === "isLost") {
        var speciesText = "This is my lost";
        var subclass = "background-red";
        var sexText = "They are a"
    } else if (pet.status === "isSeen") {
        var speciesText = "I saw a";
        var subclass = "background-green";
        var sexText = "A girl or a boy?"
    } else {
        throw new Error(`Unexpected pet status ${pet.status}`)
    }
    const className = `pet-post-card ${subclass}`
    return (
    <div className={className}>
            <h2 className="card-text">{speciesText} {pet.species}</h2>
            <h2 className="card-text">Breed: {pet.breed}</h2>
            <h2 className="card-text">Colour: {pet.colours}</h2>
            <h2 className="card-text">{sexText} {pet.sex}</h2>
            <h2 className="card-text">Message: {pet.message}</h2>
            <img className="card-img" src={pet.img}/>
        </div>
    )
}