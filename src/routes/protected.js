import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({
    user,
    redirectPath = '/shop_app',
    children,
    }) => {
        if (!user) {
        return <Navigate to={redirectPath} replace />;
        }
    
        return children;
    };

export default ProtectedRoute
    