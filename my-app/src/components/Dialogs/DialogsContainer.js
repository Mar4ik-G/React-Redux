import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../redux/Reducer/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsProps:state.dialogsReducer,
        textInInput:state.dialogsReducer.controllInputForDialogs,
        isAuth:state.authReducer.isAuth,
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



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
;