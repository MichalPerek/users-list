import React from 'react'
import { useLocation, Navigate, Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'

const RequireAuth = () => {

    const isAuthenticated = useSelector((state)=>state.auth.authenticated)
    const location = useLocation()


    return (
            isAuthenticated? <Outlet/> : <Navigate to='/login' state={{from: location}} replace />

    );
};

export default RequireAuth;