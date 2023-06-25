import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import ReadMore from './ReadMore';
import { RecipeCardProps } from '../types/Recipe.interface';

const { Content, Header, Meta, Description } = Card;

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <Card data-testid="recipe-card">
            <Image src={recipe.strDrinkThumb} wrapped ui={false} />
            <Content>
                <Header data-testid="strDrink">{recipe.strDrink}</Header>
                <Meta>
                    <span className='date' data-testid="strCategory">{recipe.strCategory}</span>
                </Meta>
                <Description data-testid="strInstructions">
                    <ReadMore data-testid="readMoreButton" text={recipe.strInstructions} maxChar={55} />
                </Description>
            </Content>
            <Content extra>
                <a href='#'>
                    Watch video instructions
                </a>
            </Content>
        </Card>
    )
}

export default RecipeCard