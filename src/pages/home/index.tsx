import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC  = () => {

    const navigate = useNavigate();
    

    return(
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "30px"
        }}>
           
        </Box>
    )
} 

export default HomePage;