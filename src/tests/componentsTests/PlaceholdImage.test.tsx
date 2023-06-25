import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaceholdImage from '../../components/PlaceholdImage';

describe('PlaceholdImage component', () => {
    it('renders placeholder image', () => {
        render(<PlaceholdImage />);

        const placeholderImage = screen.getByTestId('placeholdimage');

        expect(placeholderImage).toBeInTheDocument();
    });
});