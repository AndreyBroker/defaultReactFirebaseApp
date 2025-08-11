import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../../redux/slices/messageSlice";
import Slide from "@mui/material/Slide";
import { AppState } from "../../types/redux";
import AppMessageState from "../../types/redux/message";

function NotificationMessageComponent() {
  const { messageText, messageType, hasMessage } = useSelector((state: AppState) => state.message)


  const [message, setMessage] = useState<AppMessageState>();

  const dispatch = useDispatch();
  
  const handleAlertClose = (event: any, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideMessage());
  };


  const SlideTransitionComponent = (props: any) => {
    return(
      <Slide {...props} direction="up" />
    )
  }

  useEffect(() => {
    setMessage({
      messageText: messageText,
      messageType: messageType,
      hasMessage: hasMessage
    })
  }, [hasMessage])

  return (
    <>
      <Snackbar 
        TransitionComponent={SlideTransitionComponent}
        autoHideDuration={3000} 
        open={message?.hasMessage} 
        onClose={handleAlertClose} 
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
      >
        <Alert severity={message?.messageType ?? "info"} onClose={handleAlertClose}>
          {message?.messageText}
        </Alert>
      </Snackbar>
    </>
  );
}

export default NotificationMessageComponent;
