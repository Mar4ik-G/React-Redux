import React from 'react';
import DStyle from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMassege/DialogMessage";


const Dialogs = (props) => {

    const addMessageRef = React.createRef();

    const addMessage = () => {
        props.funcAddDialog()
         props.funcT('')
    }

    const addValueForState = () => {
        let text = addMessageRef.current.value;
        props.funcT(text)
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