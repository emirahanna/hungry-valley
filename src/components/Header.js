import React from "react";
import "./Header.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function Header(){
    const { isLoading, error } = useAuth0();
    return (
        <header className="header">
            <h1 className="title">HungryValley</h1>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
			{!error && !isLoading && (
                <>
                <LoginButton />
                <LogoutButton />
                <Profile />
                </>
            )}

        </header>
    );
}

export default Header;
