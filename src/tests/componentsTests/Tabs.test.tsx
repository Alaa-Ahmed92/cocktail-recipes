import React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from '../../components/Tabs';

describe('Tabs component', () => {
    const cocktails = {
        drinks: [
            {
                idDrink: 1,
                strDrinkThumb: 'https://placehold.co/600x400',
                strDrink: 'drink',
                strCategory: 'category',
                strInstructions: 'instructions for making the drink',
                strAlcoholic: "alcoholic",
                strGlass: "drink glass",
            },
            {
                idDrink: 2,
                strDrinkThumb: 'https://placehold.co/600x400',
                strDrink: 'drink',
                strCategory: 'category',
                strInstructions: 'instructions for making the drink',
                strAlcoholic: "alcoholic",
                strGlass: "drink glass",
            },
        ],
    };

    it('renders loader when loading', () => {
        render(
            <Tabs
                cocktails={cocktails}
                loading={true}
                setCurrentOne={() => jest.fn()}
                alphabets={['a', 'b']}
                error={false}
            />
        );

        const loader = screen.getByTestId('loader');

        expect(loader).toBeInTheDocument();
    });

    it('renders recipe cards when drinks are available', () => {
        render(
            <Tabs
                cocktails={cocktails}
                loading={false}
                setCurrentOne={() => jest.fn()}
                alphabets={['a', 'b']}
                error={false}
            />
        );

        const recipeCards = screen.getAllByTestId('recipe-card');

        expect(recipeCards).toHaveLength(2);
    });
});