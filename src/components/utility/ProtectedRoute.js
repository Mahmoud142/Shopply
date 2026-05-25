import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRole, children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if(user == null){
        return <Navigate to="/login" replace />;
    }
    if (allowedRole && user.role !== allowedRole) {
        return <Navigate to="/" replace />;
    }
    return children ? children : <Outlet />;
};

export default ProtectedRoute;
