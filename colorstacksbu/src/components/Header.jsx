import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="Header">
        <Link to="/"><img src="..\..\colorstack-wordmark.png" className="headerLogo"/></Link>
        </div>
    );
};