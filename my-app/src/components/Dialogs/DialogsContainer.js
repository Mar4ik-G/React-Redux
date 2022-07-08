import React from 'react';
import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../redux/Reducer/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



// const DialogsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     const addMessage = () => {
//         props.store.dispatch(addDialogActionCreator())
//     }
//
//     const addValueForState = (text) => {
//         let action = updateNewDialogTextActionCreator(text)
//         props.store.dispatch(action)
//
//     }
//
//     return <Dialogs addDialogActionCreator={addMessage}
//                     updateNewDialogTextActionCreator={addValueForState}
//                     textInInput={state.dialogsReducer.messages.controllInputForDialogs}
//                     dialogsProps={state.dialogsReducer.messages}
//     />
// };

let mapStateToProps = (state) => {
    return {
        dialogsProps:state.dialogsReducer,
        textInInput:state.dialogsReducer.controllInputForDialogs,
    }
}
let mapDispatchToProps=(dispatch) => {
    return {
        addDialogActionCreator:() => {
            dispatch(addDialogActionCreator())},
        updateNewDialogTextActionCreator:(text) => {
            let action = updateNewDialogTextActionCreator(text)
            dispatch(action)}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;