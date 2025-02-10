import React from 'react';
import { userStore } from "../Store/userStore.js";
import {Navigate, Outlet} from "react-router";

const PrivateRoutes = () => {
    const isLogin = userStore(state => state.isLogin);

    return isLogin() ? <Outlet/> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
