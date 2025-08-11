import { Box } from "@mui/material";
import LoadingComponent from "../loading-component";


type BackdropLoadingComponentType = React.FC<{
    isLoading: boolean
}>;
const BackdropLoadingComponent: BackdropLoadingComponentType = ({ isLoading }) => {

    return(
        isLoading ? <Box sx={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <LoadingComponent />
        </Box> : <></>
    )
}

export default BackdropLoadingComponent;