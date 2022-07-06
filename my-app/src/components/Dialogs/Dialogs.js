import React from 'react';
import DStyle from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMassege/DialogMessage";


const Dialogs = () => {

    let dialogsItem =[
        {name:'Mark', id:'1'},
        {name:'Andrey', id:'2'},
        {name:'Oleg', id:'3'},
        {name:'Dima', id:'4'},
        {name:'Mark', id:'5'},
        {name:'Oleg', id:'6'},
    ];

    let messagesData =[
        {message:'Mark', id:'1'},
        {message:'Andrey', id:'2'},
        {message:'Oleg', id:'3'},
        {message:'Dima', id:'4'},
        {message:'Mark', id:'5'},
        {message:'Oleg', id:'6'},
    ];


    return (
        <div className={DStyle.content}>
            <div className={DStyle.dialogsItems}>
                {dialogsItem.map(e => <DialogItem name={e.name} id={e.id} key={e.id}/>)}
            </div>
            <div className={DStyle.verticalLine}></div>
            <div className={DStyle.messages}>
                {messagesData.map(e => <DialogMessage message={e.message} key={e.id}/>)}

            </div>
        </div>
    );
};

export default Dialogs;