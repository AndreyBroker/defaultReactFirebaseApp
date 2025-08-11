import { Button, SvgIconTypeMap, useMediaQuery } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

type CustomButtonType = React.FC<{
    onClick: () => void, 
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, 
    label: string, 
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', 
    variant: "text" | "outlined" | "contained", 
    disabled: boolean
}>;

const CustomButton: CustomButtonType = ({
    onClick, 
    Icon, 
    label, 
    color = 'primary', 
    variant = 'contained', 
    disabled = false
}) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return isSmallScreen ? (
        <Button disabled={disabled} onClick={onClick} startIcon={<Icon style={{marginLeft: "4px", marginRight: "-8px"}} />} variant={variant} color={color} />
    ) : (
        
        <Button disabled={disabled} onClick={onClick} startIcon={<Icon />} variant="contained" color={color}>
            {label}
        </Button>
    );
};

export default CustomButton;