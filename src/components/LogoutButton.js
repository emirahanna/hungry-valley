import { useAuth0 } from '@auth0/auth0-react';
import"./LogoutButton.css";

const LogoutButton = () => {
    const { logout, isAuthenticated} = useAuth0();
    
return (
    isAuthenticated && (
        <button class="btn" onClick={() => logout()}>
            Sign out
            </button>)
    )}
export default LogoutButton;