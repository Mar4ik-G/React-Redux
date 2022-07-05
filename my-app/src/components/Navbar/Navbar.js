import React from 'react';
import NavbarStyle from "./Navbar.module.css"

const Navbar = () => {
    return (

            <nav className={NavbarStyle.nav}>
                <div className={NavbarStyle.link}><a href="React-Redux/my-app/src/components/Navbar/Navbar#">Profile</a></div>
                <div className={NavbarStyle.link}><a href="React-Redux/my-app/src/components/Navbar/Navbar#">Messages</a></div>
                <div className={NavbarStyle.link}><a href="React-Redux/my-app/src/components/Navbar/Navbar#">News</a></div>
                <div className={NavbarStyle.link}><a href="React-Redux/my-app/src/components/Navbar/Navbar#">Music</a></div>
            </nav>

    );
};

export default Navbar;