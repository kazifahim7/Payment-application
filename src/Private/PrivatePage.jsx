import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const PrivatePage = ({ children }) => {
    const token = localStorage.getItem("token");

 
    if (!token) {
        return <Navigate to="/login" replace={true} />;
    }

    try {
        const decoded = jwtDecode(token);

       
        if (!decoded.role) {
            return <Navigate to="/login" replace={true} />;
        }

        return children; 

    } catch (error) {
        console.error("Invalid token:", error);
        return <Navigate to="/login" replace={true} />;
    }
};

export default PrivatePage;
