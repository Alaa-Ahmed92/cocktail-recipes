import React from 'react'
import { useSelector } from 'react-redux';
import PlaceholdImage from './PlaceholdImage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

import MessageBox from './MessageBox';
import { RootState } from '../redux/store';
import { Chart } from '../types/Cocktails.interface';

const BarChartBox: React.FC<Chart> = ({ cocktails }) => {

    const { loading } = useSelector((state: RootState) => state.cocktails);

    const alcoholic = cocktails?.filter((item) => item.strAlcoholic === 'Alcoholic').length;
    const nonAlocholic = cocktails?.filter((item) => item.strAlcoholic === 'Non alcoholic').length;

    const data = [
        { name: 'Alcoholic', count: alcoholic },
        { name: 'Non Alcoholic', count: nonAlocholic },
    ];

    const renderChart = () => {
        if (loading) {
            return <PlaceholdImage height={300} width={300} />

        } else if (cocktails) {
            return (
                <BarChart width={300} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count">
                        <Cell fill="#8884d8" />
                        <Cell fill="#82ca9d" />
                    </Bar>
                </BarChart>
            )
        } else {
            return <MessageBox info content={`No data to show`} />
        }
    }

    return (
        <div className='chartBar' data-testid="bar-chart">
            <h3>alcoholic vs non-alcoholic</h3>
            {renderChart()}
        </div>
    )
}

export default BarChartBox