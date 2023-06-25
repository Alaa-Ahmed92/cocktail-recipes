import React from 'react'
import { Placeholder, PlaceholderProps } from 'semantic-ui-react'

const { Image } = Placeholder;

const PlaceholdImage: React.FC<PlaceholderProps> = ({ height, width }) => {

    return (
        <Placeholder style={{ height, width }}>
            <Image data-testid="placeholdimage" />
        </Placeholder>
    )
}

export default PlaceholdImage