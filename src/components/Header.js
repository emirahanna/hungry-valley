import React from "react";
import "./Header.css";
import Signup from "../pages/signup";

function Header(){
    return (
        <header className="header">
            <h1 className="title">HungryValley</h1>

            <button className="btn" onClick={Signup}>Vendors? Sign up here!</button>

        </header>
    );
}

export default Header;
