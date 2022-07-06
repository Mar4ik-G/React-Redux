import React from 'react';
import DStyle from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={DStyle.dialog}><NavLink to={'/dialogs/'+ props.id} >{props.name}</NavLink></div>
    );
};

export default DialogItem;