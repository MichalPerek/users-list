import React from 'react'
import { useLocation, Navigate, Outlet} from 'react-router-dom'

const RequireAuth = () => {

    const isAuthenticated = false
    const location = useLocation()


    return (
            isAuthenticated? <Outlet/> : <Navigate to='/login' state={{from: location}} replace />

    );
};

export default RequireAuth;