const ADD_POST ='ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'

const initialState={
    profile: {
        messagesData: [
            {like: 13, message: 'Mark', id: '1'},
            {like: 21, message: 'Where are you from?', id: '2'},
            {like: 41, message: 'name Mark', id: '3'},
            {like: 15, message: 'Hi my name Mark', id: '4'},
            {like: 23, message: 'Where are you from?', id: '5'},
            {like: 54, message: 'Hi my name Mark', id: '6'},
        ],
        controllInput:'something',
    },
}

 const profileReducer = (state = initialState ,action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 7, message:   state.profile.controllInput, like: 0};
            state.profile.messagesData.push(newPost)
            state.profile.controllInput = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.profile.controllInput = action.payload;
           return state
        default:
            return state
    }

}

export const addPostActionCreator=()=>{
    return{type:ADD_POST}
}
export const updateNewPostTextActionCreator=(text)=>{
    return{type:UPDATE_NEW_POST_TEXT,payload:text}
}

export default profileReducer;