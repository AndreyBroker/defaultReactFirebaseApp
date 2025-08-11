import { Box, CircularProgress } from "@mui/material"


const LoadingComponent = () => {

    return(
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <CircularProgress color="primary"/>
        </Box>
    )
}

export default LoadingComponent;