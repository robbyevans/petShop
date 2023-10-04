import React from "react";
import PetListContainer from "../PetList/PetListContainer";
import { TPet } from "../../Redux/Slices/petSlice";

interface PetCatalogPageProps {
  pets: TPet[];
}

const PetCatalogPage: React.FC<PetCatalogPageProps> = ({ pets }) => {
  return (
    <div className="pet-catalog-page">
      {pets.map((pet) => (
        <PetListContainer key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetCatalogPage;
