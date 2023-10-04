import React, { useState } from "react";
import { useDispatch } from "../../Redux/reduxHook";
import { deletePet, updatePet } from "../../Redux/Slices/petSlice";
import PetList from "./PetList";

interface PetProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

const PetListContainer: React.FC<PetProps> = ({
  id,
  name,
  image,
  description,
}) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedImage, setEditedImage] = useState(image);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleDelete = () => {
    dispatch(deletePet(id));
  };

  const handleEdit = () => {
    if (isEditing) {
      const updatedPetData = {
        id,
        name: editedName,
        description: editedDescription,
        image: editedImage,
      };
      dispatch(updatePet(updatedPetData));
    }
    setIsEditing(!isEditing);
  };

  return (
    <PetList
      id={id}
      name={editedName}
      image={editedImage}
      description={editedDescription}
      onEdit={handleEdit}
      onDelete={handleDelete}
      isEditing={isEditing}
      onChangeName={setEditedName}
      onChangeImage={setEditedImage}
      onChangeDescription={setEditedDescription}
    />
  );
};

export default PetListContainer;
