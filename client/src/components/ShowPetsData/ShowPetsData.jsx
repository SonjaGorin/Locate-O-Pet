import PetPostCard from "../PetPostCard/PetPostCard";

export default function ShowPetsData({key, species, breed, colours, message, status, img, sex}) {
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
                        img={img}
                        sex={sex} />
                </div>
            </div>
        </div>
    )
}