import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const { Section, Divider } = Breadcrumb;

const Breadcrumbs = () => {
    return (
        <Breadcrumb data-testid='breadcrumb'>
            <Section data-testid='anchor' link>Home</Section>
            <Divider data-testid='divider' />
            <Section data-testid='active' active>Cocktails List</Section>
        </Breadcrumb>

    )
}

export default Breadcrumbs