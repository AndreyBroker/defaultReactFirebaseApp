import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { SvgIconTypeMap, useMediaQuery } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import CustomButton from '../custom-button';

type ModalComponentType = React.FC<{
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    children: React.ReactNode,
    button: (onclick: () => void) => React.JSX.Element;
}>
const ModalComponent: ModalComponentType = ({ children, button, open, onClose, onOpen }) => {

    const handleClickOpen = () => {
        if(onOpen) onOpen();
    };

    const handleClose = () => {
        if (onClose) onClose();
    };

    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <React.Fragment>
            {button(handleClickOpen)}
            <Dialog
                fullScreen={isSmallScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {children}
            </Dialog>
        </React.Fragment>
    );
}

export default ModalComponent;
