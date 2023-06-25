import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeCard from '../../components/RecipeCard';

describe('RecipeCard component', () => {
    const recipe = {
        idDrink: 1,
        strDrinkThumb: 'https://placehold.co/600x400',
        strDrink: 'drink',
        strCategory: 'category',
        strInstructions: 'instructions for making the drink',
        strAlcoholic: "alcoholic",
        strGlass: "drink glass",
    };

    it('renders recipe card with strDrinkThumb', () => {
        render(<RecipeCard recipe={recipe} />);

        const recipeImage = screen.getByRole('img');

        expect(recipeImage).toBeInTheDocument();
        expect(recipeImage).toHaveAttribute('src', 'https://placehold.co/600x400');
    })

    it('renders recipe card with strDrink', () => {
        render(<RecipeCard recipe={recipe} />);

        const recipeTitle = screen.getByTestId('strDrink');

        expect(recipeTitle).toBeInTheDocument();
        expect(recipeTitle).toHaveTextContent('drink');
    });

    it('renders recipe card with strCategory', () => {
        render(<RecipeCard recipe={recipe} />);

        const recipeCategory = screen.getByTestId('strCategory');

        expect(recipeCategory).toBeInTheDocument();
        expect(recipeCategory).toHaveTextContent('category');
    });

    it('renders recipe card with strInstructions', () => {
        render(<RecipeCard recipe={recipe} />);

        const recipeInstructions = screen.getByTestId('strInstructions');

        expect(recipeInstructions).toBeInTheDocument();
        expect(recipeInstructions).toHaveTextContent('instructions for making the drink');
    });

    it('renders recipe card with watch video link', () => {
        render(<RecipeCard recipe={recipe} />);

        const watchVideoLink = screen.getByRole('link');

        expect(watchVideoLink).toBeInTheDocument();
        expect(watchVideoLink).toHaveAttribute('href', '#');
    });
});