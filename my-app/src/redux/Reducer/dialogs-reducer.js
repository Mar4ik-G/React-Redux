const ADD_DIALOG ='ADD-DIALOG'
const UPDATE_NEW_DIALOG_TEXT ='UPDATE-NEW-DIALOG-TEXT'

const initialState= {
        messageData: [
            {message: 'Mark', id: '1'},
            {message: 'Andrey', id: '2'},
            {message: 'Oleg message', id: '3'},
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
}

export const   dialogsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case UPDATE_NEW_DIALOG_TEXT:{
          return {...state, controllInputForDialogs:action.payload};
        }
        case ADD_DIALOG:{
            let newPost = state.controllInputForDialogs;
            return {
                ...state,
                controllInputForDialogs:'',
                messageData:[...state.messageData,{id:7, message:newPost}]
            }
        }

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