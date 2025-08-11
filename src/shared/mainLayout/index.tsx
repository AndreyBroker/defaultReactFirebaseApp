import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { HOME_PATH, LOGIN_PATH} from "../../config/routes";
import { useDispatch, useSelector } from "react-redux";
import { AuthenticationAction } from "../../redux/actions/auth.actions";
import { AppState } from "../../types/redux";
import { Box, useMediaQuery } from "@mui/material";
import BasicMenu from "./components/menu";
import { getPageNameByPath } from "../../utils";
import LoadingComponent from "../loading-component";
import NotificationMessageComponent from "../notificationMessage";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const isAuthenticated = useSelector((state : AppState) => state.auth.isAuthenticated);
    const paymentBreadCrumbName = useSelector((state : AppState) => state.header.currentPage);
    const location = useLocation();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogoClicked = () => {
        navigate(HOME_PATH);
    }

    const handleLogout = () => {
        dispatch({type: AuthenticationAction.LOGOUT})
        navigate(LOGIN_PATH)
    }

    const AppHeader = () => (
        isAuthenticated ?
        <header className="appNavBar" >
            <span onClick={handleLogoClicked} className="mainName appNavLogo">POSTAI</span>
            <div className="navlinks">
                <BasicMenu />
            </div>
        </header>
        : null
    );

    const CurrentBreadCrumb: React.FC = () => {
        const path = location.pathname;
        switch(path){
            case LOGIN_PATH:
                return (<strong>Login</strong>)
            default:
                return (<></>);
        }
    }

    const AppBreadCrumb = () => (
        isAuthenticated && location.pathname != "/" ?
        <Box sx={{
            color: "#000",
            fontSize: "13px",
            textAlign: isSmallScreen ? "center" : "unset",
            paddingBottom: isSmallScreen ? "15px" : "0"
        }}>
            <Link style={{ color: "#000" }} to={HOME_PATH}>Página Inicial</Link>  {"  >  "}  <CurrentBreadCrumb/>
        </Box>
        : null
    )

    const AppContent = () => (
        <div className="content">
            <AppBreadCrumb />
            {isAuthenticated === null ? <LoadingComponent /> : children}
        </div>
    );

    return(
        <div className="App-Body">
            <AppHeader />
            <AppContent />
            <NotificationMessageComponent />
        </div>
    )
}

export default MainLayout;