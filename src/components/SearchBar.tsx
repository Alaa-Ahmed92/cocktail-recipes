import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search, SearchProps, SearchResultProps } from 'semantic-ui-react'

import { Recipe } from '../types/Recipe.interface'
import { AppDispatch, RootState } from '../redux/store'
import { filteredCocktails } from '../redux/slices/searchCocktailsSlice'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>();
    const { cocktails, loading, error } = useSelector((state: RootState) => state.filteredCocktails);
    const [results, setResults] = useState<Recipe[]>([]);
    const { drinks } = cocktails;

    useEffect(() => {
        if (searchInput.length >= 3) {
            dispatch(filteredCocktails(searchInput));
        } else {
            setResults([]);
        }
    }, [dispatch, searchInput]);

    useEffect(() => {
        setResults(drinks);
    }, [drinks]);

    const handleChange = (e: React.MouseEvent<HTMLElement, MouseEvent>, data: SearchProps) => {
        setSearchInput(data.value as string)
    }

    const convertedResults: SearchResultProps[] = results?.map((cocktail) => ({
        title: cocktail.strDrink,
    }));

    return (
        <Search
            placeholder='What are you looking for?'
            onSearchChange={handleChange}
            noResultsMessage='No cocktails found.'
            results={convertedResults}
            loading={loading}
        />
    )
}

export default SearchBar