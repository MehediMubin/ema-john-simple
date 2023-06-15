import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <nav className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
