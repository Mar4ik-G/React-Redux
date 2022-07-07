const ADD_DIALOG ='ADD-DIALOG'
const UPDATE_NEW_DIALOG_TEXT ='UPDATE-NEW-DIALOG-TEXT'

const initialState= {
    messages: {
        messageData: [
            {message: 'Mark', id: '1'},
            {message: 'Andrey', id: '2'},
            {message: 'Oleg', id: '3'},
            {message: 'Dima', id: '4'},
            {message: 'Mark', id: '5'},
            {message: 'Oleg', id: '6'},
        ],
        dialogsItem: [
            {name: 'Mark', id: '1'},
            {name: 'Andrey', id: '2'},
            {name: 'Oleg', id: '3'},
            {name: 'Dima', id: '4'},
            {name: 'Mark', id: '5'},
            {name: 'Oleg', id: '6'},
        ],
        controllInputForDialogs:'something',
    },
}

export const   dialogsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case UPDATE_NEW_DIALOG_TEXT:
            state.messages.controllInputForDialogs =  action.payload;
            return state;
        case ADD_DIALOG:
            let newPost = state.messages.controllInputForDialogs;
            state.messages.controllInputForDialogs = ''
            state.messages.messageData.push({id:7, message: newPost})
            return state;
        default:
            return state
    }
}

export const addDialogActionCreator=()=>{
    return{type:ADD_DIALOG}
}
export const updateNewDialogTextActionCreator=(text)=>{
    return{type:UPDATE_NEW_DIALOG_TEXT,payload:text}
}

export default dialogsReducer;