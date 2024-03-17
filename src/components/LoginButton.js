import { useAuth0 } from '@auth0/auth0-react';
import"./LoginButton.css";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();
    
return (
    !isAuthenticated && (
        <button class="btn" onClick={() => loginWithRedirect()}>
            Vendors? Sign up here!
            </button>)
    )}
export default LoginButton;