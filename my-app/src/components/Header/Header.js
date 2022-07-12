import React from 'react';
import Headerstyle from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
            <header className={Headerstyle.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHWGjDJVyCQ-TNbBS0qBRYADozUMmhiirLw&usqp=CAU" alt="logo"/>
                <div className={Headerstyle.loginBlock}>
                    {props.isAuth
                        ?<div>{props.login} - | - <button onClick={props.loginOut}>Log Out</button></div>
                        :<NavLink to='/login'>LOGIN</NavLink>}

                </div>
            </header>
    );
};



export default Header;