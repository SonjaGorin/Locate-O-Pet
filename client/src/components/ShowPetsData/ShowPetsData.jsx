import PetPostCard from "../PetPostCard/PetPostCard";

export default function ShowPetsData({_id, species, breed, colours, message, status, img, sex, setSelectedPetId}) {
    return (
        <div >
            <div className="PetInfoCard">
                <div>
                    <PetPostCard 
                        _id={_id} 
                        species={species} 
                        breed={breed}
                        colours={colours} 
                        message={message}
                        status={status}
                        img={img}
                        sex={sex}
                        setSelectedPetId={setSelectedPetId}/>
                </div>
            </div>
        </div>
    )
}