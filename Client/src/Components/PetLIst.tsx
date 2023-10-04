import React, { useState, useEffect } from "react";
import axios from "axios";

interface Pet {
  id: number;
  name: string;
  image: string;
  description: string;
}

const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await axios.get<Pet[]>("http://127.0.0.1:3000/pets");
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching the pets", error);
      }
    }

    fetchPets();
  }, []);

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <img src={pet.image} alt={pet.name} width={50} />
          <p>{pet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PetList;
