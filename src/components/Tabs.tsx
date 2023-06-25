import React from 'react'
import { Grid, Tab, TabProps } from 'semantic-ui-react';

import RecipeCard from './RecipeCard';
import MessageBox from './MessageBox';
import LoaderCircle from './LoaderCircle';
import { TabsProps } from '../types/Cocktails.interface';

const { Row, Column } = Grid;


const Tabs: React.FC<TabsProps> = ({ cocktails, loading, setCurrentOne, alphabets }) => {

    const handleChange = (_: React.MouseEvent<HTMLElement, MouseEvent>, data: TabProps) => {
        setCurrentOne(data.activeIndex as number);
    }

    const renderPanes = (letter: string) => {
        if (loading) {
            return <LoaderCircle data-testid="loader-circle" />

        } else if (cocktails.drinks) {
            return (
                cocktails.drinks.map(recipe => (
                    <Column mobile={16} tablet={8} computer={4} key={recipe.idDrink}><RecipeCard recipe={recipe} /></Column>
                ))
            )
        } else {
            return <MessageBox info content={`No drinks starting with letter ${letter.toUpperCase()}`} />
        }
    }

    const panes = alphabets.map((letter) => ({
        menuItem: `${letter.toUpperCase()}`,
        render: () => (
            <Tab.Pane>
                <Grid>
                    <Row columns={5}>
                        {renderPanes(letter)}
                    </Row>
                </Grid>
            </Tab.Pane>
        )
    }))

    return (
        <Tab panes={panes} onTabChange={handleChange} />
    )
}

export default Tabs;