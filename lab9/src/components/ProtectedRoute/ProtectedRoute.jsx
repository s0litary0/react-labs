import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";
import Spinner from "../UI/Spinner";


export default function ProtectedRoute({ children }) {

    const { userLoggedIn, loading } = useAuth();
    console.log(userLoggedIn, loading)

    if(!navigator.onLine) {
        return <h1>Offline mode</h1>
    }

    if (loading) {
        console.log("loading")
        return <Spinner />
    }

    if (!userLoggedIn) {
        return <Navigate to="/login" replace />
    }
    
    return children;

}