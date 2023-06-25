import React from 'react';
import { render, screen } from '@testing-library/react';
import Charts from '../../components/Charts';
import store from '../../redux/store';
import { Provider } from 'react-redux'

describe('Charts', () => {
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

    it('renders BarChartBox in charts', () => {

        render(<Provider store={store}><Charts cocktails={cocktails} /></Provider>);

        const barChartBox = screen.getByTestId('bar-chart');

        expect(barChartBox).toBeInTheDocument();
    });

    it('renders PieChartBox in charts', () => {

        render(<Provider store={store}><Charts cocktails={cocktails} /></Provider>);

        const pieChartBox = screen.getByTestId('pie-chart');

        expect(pieChartBox).toBeInTheDocument();
    });
});
