import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MainButton from '../../components/MainButton';

describe('MainButton component', () => {
    const buttonProps = {
        onclick: () => jest.fn(),
        children: "text",
        link: true
    };

    it('renders a button', () => {
        render(<MainButton {...buttonProps} />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('calls onClick function when clicked', () => {
        const handleClick = jest.fn();

        render(<MainButton onclick={handleClick}>Button</MainButton>);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalled();
    });

    it('add additional className when link prop is true', () => {
        render(<MainButton link>Button</MainButton>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass('btn-link');
    });
});