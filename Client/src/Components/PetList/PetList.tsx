import React from "react";

type PetProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
  isEditing: boolean;
  onChangeName: (name: string) => void;
  onChangeDescription: (description: string) => void;
  onChangeImage: (image: string) => void;
};

const PetList: React.FC<PetProps> = ({
  id,
  name,
  image,
  description,
  onEdit,
  onDelete,
  isEditing,
  onChangeName,
  onChangeDescription,
  onChangeImage,
}) => {
  return (
    <div className="pet-list">
      {!isEditing ? (
        <>
          <div className="image"><img className="pet-list__image" src={image} alt={name} /></div>
          <h2 className="pet-list__name">{name}</h2>
          <p className="pet-list__description">{description}</p>
          <p className="pet-list__id">ID: {id}</p>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onEdit}>Edit</button>
        </>
      ) : (
        <>
          <input value={name} onChange={(e) => onChangeName(e.target.value)} />
          <input
            value={image}
            onChange={(e) => onChangeImage(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => onChangeDescription(e.target.value)}
          />
          <button onClick={onEdit}>Save Changes</button>
        </>
      )}
    </div>
  );
};

export default PetList;
