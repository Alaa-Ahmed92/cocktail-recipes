import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import useCocktailsAPI from "../../hooks/useCocktailsAPI";
import { CocktailsState } from "../../types/Cocktails.interface";

const initialState: CocktailsState = {
    cocktails: {
        drinks: []
    },
    loading: false,
    error: false,
};

export const filteredCocktails = createAsyncThunk(
    'filteredCocktails',
    async (word: string) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`
        const data = await useCocktailsAPI(url);
        return data;
    }
);

const searchCocktailsSlice = createSlice({
    name: 'filteredCocktails',
    initialState,
    reducers: {},
    extraReducers: (cocktail) => {
        cocktail
            .addCase(filteredCocktails.pending, (state) => {
                state.loading = true
            })
            .addCase(filteredCocktails.fulfilled, (state, action) => {
                state.loading = false
                state.cocktails = action.payload
            })
            .addCase(filteredCocktails.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
});

export default searchCocktailsSlice.reducer;