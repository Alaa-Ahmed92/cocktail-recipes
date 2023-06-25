import React from 'react'
import { Loader } from 'semantic-ui-react'

const LoaderCircle = () => {
    return (
        <div className='loaderCircle' data-testid="loader">
            <Loader active inline='centered' />
        </div>
    )
}

export default LoaderCircle