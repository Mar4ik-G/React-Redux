import React from 'react';
import DStyle from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMassege/DialogMessage";


const Dialogs = () => {
    return (
        <div className={DStyle.content}>
            <div className={DStyle.dialogsItems}>
               <DialogItem name='Mark' id='1'/>
               <DialogItem name='Andrey' id='2'/>
               <DialogItem name='Oleg' id='3'/>
               <DialogItem name='Dima' id='4'/>
               <DialogItem name='Mark' id='5'/>
               <DialogItem name='Oleg' id='6'/>
            </div>
            <div className={DStyle.verticalLine}></div>
            <div className={DStyle.messages}>
               <DialogMessage message='Hi'/>
               <DialogMessage message='OKKK'/>
               <DialogMessage message='HELLO'/>

            </div>
        </div>
    );
};

export default Dialogs;