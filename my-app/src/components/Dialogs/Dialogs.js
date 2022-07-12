import React from 'react';
import DStyle from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMassege/DialogMessage";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    const addMessageRef = React.createRef();

    const addMessage = () => {
        props.addDialogActionCreator()
    }

    const addValueForState = () => {
        let text = addMessageRef.current.value;
        props.updateNewDialogTextActionCreator(text)
    }

    if(!props.isAuth){
        return <Navigate to='/login'/>
    }

    return (
        <div className={DStyle.content}>
            <div className={DStyle.dialogsItems}>
                {props.dialogsProps.dialogsItem.map(e => <DialogItem name={e.name} id={e.id} key={e.id}/>)}
            </div>
            <div className={DStyle.verticalLine}></div>
            <div className={DStyle.messages}>
                {props.dialogsProps.messageData.map(e => <DialogMessage message={e.message} key={e.id + Math.random()*999}/>)}
               <div className={DStyle.inpBtn}>
                   <input type="text" ref={addMessageRef} value={props.textInInput} onChange={addValueForState} className={DStyle.input}/>
                   <button className={DStyle.button} onClick={addMessage}>Sent message</button>
               </div>
            </div>
        </div>
    );
};

export default Dialogs;