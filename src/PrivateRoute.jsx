import React, { useContext } from 'react';
import { AuthContext } from './Component/OthersComponent/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from './Component/OthersComponent/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;