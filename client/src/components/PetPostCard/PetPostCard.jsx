import "./PetPostCard.css";
import { useEffect, useState } from "react";

export default function PetPostCard({ pet, setSelectedPetId }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(pet.img)
  if (pet.status === "isLost") {
    var speciesText = "This is my lost";
    var subclass = "background-red";
    var sexText = "They are a";
  } else if (pet.status === "isSeen") {
    var speciesText = "I saw a";
    var subclass = "background-green";
    var sexText = "A girl or a boy?";
  } else if (pet.status === "isSeen" && pet.breed === "") {
  } else {
    throw new Error(`Unexpected pet status ${pet.status}`);
  }
  const className = `pet-post-card ${subclass}`;
  const onMouseOver = () => {
    setSelectedPetId(pet._id);
  };
  const onMouseOut = () => {
    setSelectedPetId();
  };

  const hidden = (field) => {
    return field ? "" : "hidden";
  };
  return (
    // <>
    //   {!isMobile ? (
        <div
          id={`pet_${pet._id}`}
          className={className}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          <h2 className="card-text text-center">
            {speciesText} {pet.species}
          </h2>
          <h2 className="card-text text-center" hidden={!pet.breed}>
            Breed: {pet.breed}
          </h2>
          <h2 className="card-text text-center">Colour: {pet.colours}</h2>
          <h2 className="card-text text-center">
            {sexText} {pet.sex}
          </h2>
          <h2 className="card-text text-center">Message: {pet.message}</h2>
          <img className="card-img" src={pet.img} />
        </div>
    //   // ) : (
    //     <div
    //       id={`pet_${pet._id}`}
    //       className={className}
    //       onMouseOver={onMouseOver}
    //       onMouseOut={onMouseOut}
    //     >
    //       <div className = "d-flex">
    //         <div className = "w-50">
    //           <h2 className="card-text text-center">
    //             {speciesText} {pet.species}
    //           </h2>
    //           <h2 className="card-text text-center" hidden={!pet.breed}>
    //             Breed: {pet.breed}
    //           </h2>
    //           <h2 className="card-text text-center">Colour: {pet.colours}</h2>
    //           <h2 className="card-text text-center">
    //             {sexText} {pet.sex}
    //           </h2>
    //           <h2 className="card-text text-center">Message: {pet.message}</h2>
    //         </div>
    //         <div className = "w-50">
    //           <img className="card-img" src={pet.img} />
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}
