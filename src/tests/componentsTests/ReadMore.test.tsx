import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ReadMore from '../../components/ReadMore';

describe("ReadMore component", () => {
    it('renders truncated text with "Read More" button', () => {
        const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        const maxChar = 20;

        render(<ReadMore text={text} maxChar={maxChar} />);

        const truncatedText = screen.getByText(`${text.slice(0, maxChar)}...`);
        const readMoreButton = screen.getByText('Read More');

        expect(truncatedText).toBeInTheDocument();
        expect(readMoreButton).toBeInTheDocument();
    });

    it('expand text and change "Read More" to "Read Less" when button clicked', () => {
        const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        const maxChar = 20;

        render(<ReadMore text={text} maxChar={maxChar} />);

        const readMoreButton = screen.getByText('Read More');

        fireEvent.click(readMoreButton);

        const expandedText = screen.getByText(text);
        const readLessButton = screen.getByText('Read Less');

        expect(expandedText).toBeInTheDocument();
        expect(readLessButton).toBeInTheDocument();
    });

    it('trunctes text and change "Read Less" to "Read More" when button clicked', () => {
        const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        const maxChar = 20;

        render(<ReadMore text={text} maxChar={maxChar} />);

        const readMoreButtonClickedForFirstTime = screen.getByText('Read More');

        fireEvent.click(readMoreButtonClickedForFirstTime);

        const readLessButton = screen.getByText('Read Less');

        fireEvent.click(readLessButton);

        const truncatedText = screen.getByText(`${text.slice(0, maxChar)}...`);
        const readMoreButton = screen.getByText('Read More');

        expect(truncatedText).toBeInTheDocument();
        expect(readMoreButton).toBeInTheDocument();
    });

})