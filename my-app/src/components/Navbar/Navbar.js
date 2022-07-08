import React from 'react';
import NavbarStyle from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
            <nav className={NavbarStyle.nav}>
                <div className={NavbarStyle.link}><NavLink to="/profile">Profile</NavLink></div>
                <div className={NavbarStyle.link}><NavLink to="/dialogs">Messages</NavLink></div>
                <div className={NavbarStyle.link}><NavLink to="/news">News</NavLink></div>
                <div className={NavbarStyle.link}><NavLink to="/users">Users</NavLink></div>
            </nav>

    );
};

export default Navbar;