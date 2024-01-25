import PetPostCard from "../PetPostCard/PetPostCard";

export default function ShowLostPetsData({key, species, breed, colours, message, sex}) {
    return (
        <div >
            <div className="PetInfoCard">
                <div>
                    <PetPostCard 
                        key={key} 
                        species={species} 
                        breed={breed}
                        colours={colours} 
                        message={message}
                        sex={sex} />
                </div>
            </div>
        </div>
    )
}