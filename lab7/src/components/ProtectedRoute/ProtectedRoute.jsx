import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const { userLoggedIn } = useAuth();

    if (!userLoggedIn) {
        return <Navigate to="/login" replace />
    }
    
    return children;

}