// components/DoughnutChart.tsx
import { Box } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Banco X', value: 400 },
  { name: 'Banco Y', value: 300 },
  { name: 'Banco Z', value: 300 },
];

const COLORS = ['#F29494', '#f2c394', '#f294c3'];

const DoughnutChart: React.FC = () => {
  return (
    <Box style={{ 
        width: '100%', 
        height: '100%',
        backgroundColor: "#FFF",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            label
            fontSize={10}
          >
            {data.map((entry, index) => (
              <Cell fontSize={10} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend fontSize={10}/>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DoughnutChart;
