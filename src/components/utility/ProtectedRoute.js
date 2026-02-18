import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, isUser, children }) => {
    if (isAdmin === false && isUser === false) {
        return <Navigate to="/login" replace />;
    }else if (isAdmin === true) {
        return <Navigate to="/admin/allproducts" replace />;
    }else if (isUser === true) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
