import {addDialogActionCreator, updateNewDialogTextActionCreator} from "../../redux/Reducer/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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