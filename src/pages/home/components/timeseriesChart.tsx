import { Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', value: 2400 },
  { date: '2024-02', value: 2210 },
  { date: '2024-03', value: 2290 },
  { date: '2024-04', value: 2000 },
];

const MyChart: React.FC = () => {
    return (
        <Box style={{ 
            width: '100%', 
            height: '100%',
            backgroundColor: "#FFF",
            borderRadius: "10px",
            padding: "15px 15px 15px -5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" fontSize={10} />
                    <YAxis  fontSize={10}/>
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#F29494" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default MyChart;
