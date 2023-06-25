import React from 'react'
import { Grid } from 'semantic-ui-react';

import BarChartBox from './BarChartBox';
import PieChartBox from './PieChartBox';
import { ChartsProps } from '../types/Cocktails.interface';

const { Row, Column } = Grid;

const Charts: React.FC<ChartsProps> = ({ cocktails }) => {

    const { drinks } = cocktails;

    return (
        <div className='charts'>
            <Grid>
                <Row columns={2}>
                    <Column mobile={16} tablet={8} computer={8}>
                        <BarChartBox cocktails={drinks} />
                    </Column>
                    <Column mobile={16} tablet={8} computer={8}>
                        <PieChartBox cocktails={drinks} />
                    </Column>
                </Row>
            </Grid>
        </div>
    )
}

export default Charts