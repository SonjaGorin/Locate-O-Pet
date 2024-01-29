// import "./UserPosts.css"
// import "../PetCards/PetCards.css"

// import Auth from '../../utils/auth';
// import { useQuery, useMutation } from "@apollo/client";

// // import { QUERY_ME } from "../../utils/queries";
// import { REMOVE_PET } from "../../utils/mutations";

// export default function UserPosts({open, setSelectedPetId}) {
//     if (!open) {
//         return (<div></div>);
//     }

//     // const { data, loading } = useQuery(QUERY_ME);
//     // if (loading) {
//     //     return (<div>Loading...</div>);
//     // }
//     // const userData = data?.me || {};
//     const [removePet] = useMutation(REMOVE_PET);

//     const handleDeletePet = async (petId) => {
//         const token = Auth.loggedIn() ? Auth.getToken() : null;
    
//         if (!token) {
//             return false;
//         }
    
//         try {
//             const { data } = await removePet({
//                 variables: { petId }
//           });
//         } catch (err) {
//             console.error(err);
//         }
//     };
//     const pets = [...userData.petsLost, ...userData.petsSeen]

//     return (
//         <div className="all-pets-div">
//             <h1>My Posts</h1>
//             {pets.map((pet) => {
//                 return (
//                     <div key={pet._id}>
//                         <ShowPetsData 
//                             _id={pet._id}
//                             species={pet.species} 
//                             breed={pet.breed}
//                             colours={pet.colours} 
//                             message={pet.message}
//                             status={pet.status}
//                             img={pet.img}
//                             sex={pet.sex}
//                             setSelectedPetId={setSelectedPetId}/>
//                             <Button className='btn-block btn-danger' onClick={() => handleDeletePet(pet?.petId)}>
//                                 Delete this Post
//                             </Button>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }