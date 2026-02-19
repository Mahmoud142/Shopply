import { Navigate, Outlet } from "react-router-dom";

let user = localStorage.getItem("user");
user = JSON.parse(user);

const ProtectedRoute = ({ auth, children }) => {
    if(user == null){
        return <Navigate to="/login" replace />;
    }
    if (auth === false) {
        return <Navigate to="/" replace />;
    }
    return children ? children : <Outlet />;
};

export default ProtectedRoute;
