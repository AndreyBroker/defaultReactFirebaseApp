import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Pages from "../pages"
import { HOME_PATH, LOGIN_PATH } from "../config/routes";
import MainLayout from "../shared/mainLayout";
import { useSelector } from "react-redux";
import { AppState } from "../types/redux";
import React, { useEffect } from "react";


const PageRoutes: React.FC = () => {

    const { HomePage, LoginPage } = Pages;

    var navigate = useNavigate();
    var location = useLocation();

    const PublicRoutes = () => (
        <Routes>
            <Route path={LOGIN_PATH} element={<LoginPage />} />
        </Routes>
    );

    const PrivateRoutes = () => (
        <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />
        </Routes>
    );

    const auth = useSelector((state: AppState) => state.auth)

    const AppRouteBody = () => (
        !auth.isAuthenticated ? PublicRoutes() : PrivateRoutes() 
    )

    useEffect(() =>{
        var path = location.pathname;
        if(auth.isAuthenticated === false && path != LOGIN_PATH){
            navigate(LOGIN_PATH)
        }

        if(auth.isAuthenticated && path == LOGIN_PATH){
            navigate(HOME_PATH)
        }
    }, [auth])

    return(
        <MainLayout>
            <AppRouteBody />
        </MainLayout>
    )
}

export default PageRoutes;