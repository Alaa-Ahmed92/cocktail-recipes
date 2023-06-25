import React from 'react';
import { render, screen } from '@testing-library/react';

import LoaderCircle from '../../components/LoaderCircle';

describe('LoaderCircle component', () => {
    it('renders the loader circle', () => {
        render(<LoaderCircle />);

        const loaderElement = screen.getByTestId('loader');

        expect(loaderElement).toBeInTheDocument();
    });
});