import ShowLostPetsData from "../ShowLostPetsData/ShowLostPetsData";

export default function LostPetsDiv({petData}) {
    return (
        <div className="all-pets-div">
            <h1>Lost Pets</h1>
            {petData.map((pet) => {
                return (
                    <div >
                        <ShowLostPetsData 
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