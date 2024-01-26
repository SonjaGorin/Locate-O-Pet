import ShowPetsData from "../ShowPetsData/ShowPetsData";

export default function PetsDiv({petData, open}) {
    if (!open) {
        return (<div></div>);
    }

    return (
        <div className="all-pets-div">
            {petData.map((pet) => {
                return (
                    <div >
                        <ShowPetsData 
                        key={pet.key} 
                        species={pet.species} 
                        breed={pet.breed}
                        colours={pet.colours} 
                        message={pet.message}
                        status={pet.status}
                        sex={pet.sex}/>
                    </div>
                )
            })} 
        </div>
    )
}