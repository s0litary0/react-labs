import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CharacterService } from "../services/CharactersService";


const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (queryParam, { rejectWithValue }) => {
    console.log("Async thunk")
    try {
      const response = await CharacterService.fetchCharacters(queryParam)
      return response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const fetchCharacterById = createAsyncThunk(
  "characters/fetchCharacterById",
  async (characterId, { rejectWithValue }) => {
    console.log("Async thunk")
    try {
      const response = await CharacterService.fetchCharacterById(characterId)
      return response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    selectedCharacter: null,
    loading: false,
    query: "",
    errorMessage: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
        state.errorMessage = null
      })
      .addCase(fetchCharacterById.pending, (state) => {
        state.loading = true
        state.errorMessage = null
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.results
        state.loading = false
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.selectedCharacter = action.payload
        state.loading = false
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.payload
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.payload
      })
  }
})


export const { setSearchQuery } = charactersSlice.actions
export { fetchCharacterById, fetchCharacters }
export default charactersSlice.reducer