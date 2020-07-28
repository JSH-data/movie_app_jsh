import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";  

function Navigation () {
    return <div className = "Buttons">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
    </div>
}

export default Navigation;