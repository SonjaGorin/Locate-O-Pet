import PetPostCard from "../PetPostCard/PetPostCard";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_ALLPETS } from "../../utils/queries";


export default function ShowLostPets() {
    const { data, loading } = useQuery(QUERY_ALLPETS);
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    const petData = data.allPets
    
    return (
        <div >
            <h1>Lost Pets</h1>
            {petData.map((pet) => {
                return (
                    <div className="PetInfoCard">
                        <div>
                            <PetPostCard 
                                key={pet._id} 
                                species={pet.species} 
                                breed={pet.breed}
                                colours={pet.colours} 
                                message={pet.message}
                                sex={pet.sex} />
                        </div>
                    </div>
                )
            })} 
        </div>
    )
}