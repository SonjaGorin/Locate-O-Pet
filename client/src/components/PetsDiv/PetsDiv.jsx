import ShowPetsData from "../ShowPetsData/ShowPetsData";
import "./PetsDiv.css"

export default function PetsDiv({pets, open}) {
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
                            key={pet.key} 
                            species={pet.species} 
                            breed={pet.breed}
                            colours={pet.colours} 
                            message={pet.message}
                            status={pet.status}
                            img={pet.img}
                            sex={pet.sex}/>
                    </div>
                )
            })} 
        </div>
    )
}