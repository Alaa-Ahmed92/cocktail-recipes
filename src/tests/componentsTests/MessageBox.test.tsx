import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageBox from '../../components/MessageBox';

describe('MessageBox', () => {
    it('renders message content', () => {
        const messageContent = 'This is a message.';
        render(<MessageBox content={messageContent} />);

        const messageBox = screen.getByTestId('message-box');

        expect(messageBox).toBeInTheDocument();
        expect(messageBox).toHaveTextContent(messageContent);
    });
});