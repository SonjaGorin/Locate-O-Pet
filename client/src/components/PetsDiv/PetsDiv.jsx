import ShowPetsData from "../ShowPetsData/ShowPetsData";
import "./PetsDiv.css"

export default function PetsDiv({pets, open, setSelectedPetId}) {
    // console.log("Rendering PetsDiv");
    if (!open) {
        return (<div></div>);
    }

    return (
        <div className="all-pets-div">
            {pets && pets.map((pet) => {

                return (
                    <div >
                        <ShowPetsData 
                            key={pet._id}
                            _id={pet._id}
                            species={pet.species} 
                            breed={pet.breed}
                            colours={pet.colours} 
                            message={pet.message}
                            status={pet.status}
                            img={pet.img}
                            sex={pet.sex}
                            setSelectedPetId={setSelectedPetId}/>
                    </div>
                )
            })} 
        </div>
    )
}

// data.sort(function(a,b) {
//     const keyA = new Date(a.allPets[0]?.createdAt);
//     const keyB = new Date(b.allPets[0]?.createdAt);
//     if (a.allPets.length === 0 || b.allPets.length === 0) return -1;
//     if (keyA < keyB) return -1;
//     if (keyA > keyB) return 1;
//     return 0
// })