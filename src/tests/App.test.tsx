import React from 'react';
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react';

import App from '../App';
import store from '../redux/store';

describe("App", () => {

  it("renders App", () => {
    render(<Provider store={store}><App /></Provider>)

    const app = screen.getByTestId('app');

    expect(app).toBeInTheDocument();
  });

});