import ShowSeenPetsData from "../ShowSeenPetsData/ShowSeenPetsData";

export default function SeenPetsDiv({petData, open}) {
    if (!open) {
        return (<div></div>);
    }

    return (
        <div className="all-pets-div">
            <h1>Seen Pets</h1>
            {petData.map((pet) => {
                return (
                    <div >
                        <ShowSeenPetsData 
                        key={pet.key} 
                        species={pet.species} 
                        breed={pet.breed}
                        colours={pet.colours} 
                        message={pet.message}
                        sex={pet.sex}/>
                    </div>
                )
            })} 
        </div>
    )
}