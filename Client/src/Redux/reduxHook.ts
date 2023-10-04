import { useDispatch as originalUseDispatch } from "react-redux";
import type { AppDispatch } from "./Store/store"; // Import your AppDispatch type

// Typed useDispatch hook
export const useDispatch = () => originalUseDispatch<AppDispatch>();
