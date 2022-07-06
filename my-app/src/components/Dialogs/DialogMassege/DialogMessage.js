import React from 'react';
import DStyle from "../Dialogs.module.css";

const DialogMessage = (props) => {
    return (
        <div className={DStyle.message}>{props.message}</div>
    );
};

export default DialogMessage;