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
  return response.json();
});

export const updatePet = createAsyncThunk(
  "pets/updatePet",
  async (pet: Pet) => {
    const response = await fetch(`http://127.0.0.1:3000/pets/${pet.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });
    return response.json();
  }
);

export const deletePet = createAsyncThunk(
  "pets/deletePet",
  async (id: number) => {
    await fetch(`http://127.0.0.1:3000/pets/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

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
      })
      .addCase(updatePet.fulfilled, (state, action: PayloadAction<Pet>) => {
        const index = state.pets.findIndex(
          (pet) => pet.id === action.payload.id
        );
        if (index !== -1) {
          state.pets[index] = action.payload;
        }
      })
      .addCase(deletePet.fulfilled, (state, action: PayloadAction<number>) => {
        state.pets = state.pets.filter((pet) => pet.id !== action.payload);
      });
  },
});

export default petsSlice.reducer;
