import { Dispatch, SetStateAction } from 'react'
import { Recipe } from './Recipe.interface';

export interface TabsProps {
    cocktails: {
        drinks: Recipe[]
    },
    loading: boolean;
    alphabets: string[];
    setCurrentOne: Dispatch<SetStateAction<number>>;
    error: boolean | null;
}

export interface CocktailsState {
    cocktails: {
        drinks: Recipe[]
    },
    loading: boolean;
    error: boolean | null
};

export interface ChartsProps {
    cocktails: {
        drinks: Recipe[]
    },
}

export interface Chart {
    cocktails: Recipe[];
}