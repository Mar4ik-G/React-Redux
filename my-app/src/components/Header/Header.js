import React from 'react';
import Headerstyle from "./Header.module.css"

const Header = () => {
    return (
            <header className={Headerstyle.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHWGjDJVyCQ-TNbBS0qBRYADozUMmhiirLw&usqp=CAU" alt="logo"/>
            </header>
    );
};



export default Header;