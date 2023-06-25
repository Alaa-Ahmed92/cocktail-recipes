import React from 'react';
import { render, screen } from '@testing-library/react';

import Breadcrumb from '../../components/Breadcrumbs';

describe("Breadcrumbs component", () => {

    beforeEach(() => {
        render(<Breadcrumb />);
    });

    it("renders Breadcrumb component", () => {

        const breadcrumb = screen.getByTestId('breadcrumb');

        expect(breadcrumb).toBeInTheDocument();
    });

    it("renders one anchor link", () => {

        const anchor = screen.getByTestId('anchor');

        expect(anchor).toBeInTheDocument();
    });

    it("renders one divider", () => {

        const divider = screen.getByTestId('divider');

        expect(divider).toBeInTheDocument();
    });

    it("renders one anchor active", () => {

        const active = screen.getByTestId('active');

        expect(active).toBeInTheDocument();
    });

});