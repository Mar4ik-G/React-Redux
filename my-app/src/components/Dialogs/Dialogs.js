import React from 'react';
import DStyle from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={DStyle.content}>
            <div className={DStyle.dialogsItems}>
                <div className={DStyle.dialog}><NavLink to='/dialogs/1'>Mark</NavLink></div>
                <div className={DStyle.dialog}>  <NavLink to='/dialogs/2'>Andrey</NavLink></div>
                <div className={DStyle.dialog}>  <NavLink to='/dialogs/3'>Oleg</NavLink></div>
                <div className={DStyle.dialog}>  <NavLink to='/dialogs/4'>Dima</NavLink></div>
                <div className={DStyle.dialog}>  <NavLink to='/dialogs/5'>Mark</NavLink></div>
            </div>
            <div className={DStyle.messages}>
                <div className={DStyle.message}>ni</div>
                <div className={DStyle.message}>OKK</div>
                <div className={DStyle.message}>QWERTY</div>
            </div>
        </div>
    );
};

export default Dialogs;