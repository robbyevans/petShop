import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "../../Redux/reduxHook";
import { fetchPets } from "../../Redux/Slices/petSlice";
import PetCatalogPage from "./PetCatalogPage";
import { RootState } from "../../Redux/RootReducer/rootReducer";

const PetCatalogPageContainer = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state: RootState) => state.pets.pets); 

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return <PetCatalogPage pets={pets} />;
};

export default PetCatalogPageContainer;
