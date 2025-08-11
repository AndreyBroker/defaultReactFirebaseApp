import { Box, Button, IconButton } from "@mui/material";
import CustomButton from "../custom-button";
import ModalComponent from "../modal-component";
import { Delete  } from '@mui/icons-material';
import GenericService from "../../services/genericService";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "../../redux/slices/messageSlice";
import NotificationMessage from "../../config/notificationMessages";

type DeleteEntityComponentType = React.FC<{
    cod: string,
    colletionName: string;
    disabled: boolean;
    handleAfterSubmit: () => Promise<void>
}>;
const DeleteEntityComponent: DeleteEntityComponentType = ({
    cod,
    colletionName,
    disabled,
    handleAfterSubmit
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        var response = await GenericService.Remove(cod, colletionName);
        if(response){
            dispatch(showMessage(NotificationMessage.generic.success.delete));
        } else {
            dispatch(showMessage(NotificationMessage.generic.error.delete));
        }
        await handleAfterSubmit();
        setIsOpen(false);
    }

    const handleClose = () => {
        setIsOpen(false)
    };

    return(
        <ModalComponent 
            onOpen={() => { setIsOpen(true); }}
            open={isOpen}
            onClose={() => { setIsOpen(false); }}
            button={(onclick) => (
                <CustomButton 
                    onClick={onclick}
                    Icon={Delete}
                    label={"Excluir"}
                    color={"primary"}
                    variant={"contained"}
                    disabled={disabled}
                />
            )}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                flexWrap: "wrap"
            }}>
                <Box sx={{
                    padding: "15px 30px",
                    boxShadow: "0px 1px 1px 0px #F29494",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box>
                        Exluir item
                    </Box>

                    <IconButton onClick={handleClose} color="primary">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{
                    padding: "0 30px",
                    textAlign: "center"
                }}>Você realmente deseja prosseguir com essa exclusão? Caso prosiga são será possivel voltar atrás.</Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    justifyContent: "center",
                    padding: "30px",
                }}>
                    <Button size="small" onClick={handleClose} variant="outlined" color="error">Cancelar</Button>
                    <Button size="small" onClick={handleSubmit} variant="contained" color="success">Confirmar</Button>
                </Box>
            </Box>
        </ModalComponent>
    )
}

export default DeleteEntityComponent;