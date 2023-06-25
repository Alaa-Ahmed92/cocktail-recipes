import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

import MessageBox from './MessageBox';
import { RootState } from '../redux/store';
import PlaceholdImage from './PlaceholdImage';
import { Chart } from '../types/Cocktails.interface'


const PieChartBox: React.FC<Chart> = ({ cocktails }) => {

    const { loading } = useSelector((state: RootState) => state.cocktails);
    const [glasses, setGlasses] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const glassCounts: { [key: string]: number } = {};

        cocktails?.forEach(item => {
            const glass = item.strGlass.toLowerCase();
            glassCounts[glass] = (glassCounts[glass] || 0) + 1;
        });

        setGlasses(glassCounts);
    }, [cocktails]);

    const chartData = Object.entries(glasses).map(([type, count]) => ({
        type, count
    }));

    const renderChart = () => {
        if (loading) {
            return <PlaceholdImage height={300} width={260} />

        } else if (cocktails) {
            return (
                <PieChart width={500} height={300}>
                    <Pie data={chartData} dataKey="count" nameKey="type" cx="50%" cy="50%" outerRadius={130}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`#${((Math.random() * 0xffffff) << 0).toString(16)}`} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            )
        } else {
            return <MessageBox info content={`No data to show`} />
        }
    }


    return (
        <div className='chartBar' data-testid="pie-chart">
            <h3>glasses used</h3>
            {renderChart()}
        </div>
    )
}

export default PieChartBox