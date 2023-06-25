import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import useCocktailsAPI from "../../hooks/useCocktailsAPI";
import { CocktailsState } from "../../types/Cocktails.interface";

const initialState: CocktailsState = {
    cocktails: {
        drinks: []
    },
    loading: false,
    error: false
};

export const fetchCocktails = createAsyncThunk(
    'fetchCocktails',
    async (letter: string) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        const data = await useCocktailsAPI(url);
        return data;
    }
);

const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {},
    extraReducers: (cocktail) => {
        cocktail
            .addCase(fetchCocktails.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                state.loading = false
                state.cocktails = action.payload
            })
            .addCase(fetchCocktails.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
});

export default cocktailsSlice.reducer;