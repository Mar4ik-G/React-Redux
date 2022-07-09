import React from 'react';
import preloader from "../../img/preloader.gif";
import UsersStyle from "../Users/Users.module.css";

const Preloader = () => {
    return (
        <div  className={UsersStyle.preloaderPerent}>
            <img src={preloader} className={UsersStyle.preloader}/>
        </div>
    );
};

export default Preloader;