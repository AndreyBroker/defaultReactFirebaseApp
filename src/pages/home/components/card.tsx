import React from "react"
import { valueToCurrency } from "../../../utils"
import { Box } from "@mui/material";


type CardComponentType = React.FC<{
    description: string;
    value: string
}>
const CardComponent: CardComponentType = ({ description, value }) => {

    return(
        <Box sx={{
            width: "20%",
            height: "30%",
            backgroundColor: "#FFF",
            borderRadius: "10px",
            padding: "15px 30px",
            minHeight: "60px"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Box sx={{ fontSize: "13px", color: "grey"}}>
                    {description}
                </Box>
            </Box>

            <Box>
                {value}
            </Box>
        </Box>
    )
}

export default CardComponent;