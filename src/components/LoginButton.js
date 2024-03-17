import { useAuth0 } from '@auth0/auth0-react';
import "./LoginButton.css"; // Ensure correct CSS import path

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    return (
        !isAuthenticated && ( // Check if the user is not authenticated
            <button className="btn" onClick={() => loginWithRedirect()}>
                Vendors? Sign up here!
            </button>
        )
    );
};

export default LoginButton;
