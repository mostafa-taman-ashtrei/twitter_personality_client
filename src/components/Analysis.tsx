import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import { AnalysisData } from '../types';

interface props {
    data: AnalysisData[]
}

const Analysis: React.FC<props> = ({ data }: props) => (
    <PieChart width={800} height={500}>
        <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#47B39C"
            dataKey="value"
            label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
            }) => {
                const RADIAN = Math.PI / 180;
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                    <text
                        x={x}
                        y={y}
                        fill="#6e675f"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                    >
                        {data[index].name}
                        {' '}
                        (
                        {value}
                        )
                    </text>
                );
            }}
        />
        <Tooltip />
    </PieChart>
);

export default Analysis;
