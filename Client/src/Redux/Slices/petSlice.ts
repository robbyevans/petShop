// petsSlice
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Pet {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface PetsState {
  pets: Pet[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PetsState = {
  pets: [],
  status: "idle",
  error: null,
};

export const fetchPets = createAsyncThunk("pets/fetchPets", async () => {
  const response = await fetch("http://127.0.0.1:3000/pets");
  const data = await response.json();
  return data;
});

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action: PayloadAction<Pet[]>) => {
        state.status = "succeeded";
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default petsSlice.reducer;
