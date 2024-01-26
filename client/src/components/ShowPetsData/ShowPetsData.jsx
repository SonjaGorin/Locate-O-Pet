import PetPostCard from "../PetPostCard/PetPostCard";

export default function ShowPetsData({key, species, breed, colours, message, status, sex}) {
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
                        status={status}
                        sex={sex} />
                </div>
            </div>
        </div>
    )
}