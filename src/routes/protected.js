import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, redirectPath = '/shop_app', children }) {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
}

export default ProtectedRoute;
