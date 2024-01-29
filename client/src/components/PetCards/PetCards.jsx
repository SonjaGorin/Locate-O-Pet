import PetPostCard from "../PetPostCard/PetPostCard";
import "./PetCards.css"

export default function PetCards({pets, open, setSelectedPetId}) {
    if (!open) {
        return (<div></div>);
    }

    return (
        <div className="all-pets-div">
            {pets && pets.map((pet) => {
                return (
                    <div key={pet._id}>
                        <div className="PetInfoCard">
                            <div>
                                <PetPostCard 
                                    pet={pet}
                                    setSelectedPetId={setSelectedPetId}/>
                            </div>
                        </div>
                    </div>
                )
            })} 
        </div>
    )
}