import React, { useState } from 'react'

import MainButton from './MainButton';
import { ReadMoreProps } from '../types/Recipe.interface'

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxChar }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    const truncatedText = !isExpanded && text.length > maxChar ? text.slice(0, maxChar).concat('...') : text;

    return (
        <div>
            <p>
                {truncatedText}
                {text.length > maxChar && (
                    <MainButton link={true} onclick={toggleExpanded}>{isExpanded ? 'Read Less' : 'Read More'}</MainButton>
                )}
            </p>

        </div>
    )
}

export default ReadMore