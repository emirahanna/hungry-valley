import React from "react";
import "./Header.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function Header(){
    return (
        <header className="header">
            <h1 className="title">HungryValley</h1>
			<LoginButton />
			<LogoutButton />
            <Profile />

        </header>
    );
}

export default Header;
