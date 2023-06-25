import { configureStore } from '@reduxjs/toolkit';

import cocktailsReducer from './slices/cocktailsSlice';
import filteredCocktailsReducer from './slices/searchCocktailsSlice';

const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
        filteredCocktails: filteredCocktailsReducer
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;