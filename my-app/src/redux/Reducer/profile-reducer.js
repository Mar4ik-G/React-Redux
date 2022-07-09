const ADD_POST ='ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE ='SET-USER-PROFILE'

const initialState={
        messagesData: [
            {like: 13, message: 'Mark', id: '1'},
            {like: 21, message: 'Where are you from?', id: '2'},
            {like: 41, message: 'name Mark', id: '3'},
            {like: 15, message: 'Hi my name Mark', id: '4'},
            {like: 23, message: 'Where are you from?', id: '5'},
            {like: 54, message: 'Hi my name Mark', id: '6'},
        ],
        controllInput:'something',
        profile:null
}

 const profileReducer = (state = initialState ,action) =>{
    switch (action.type) {
        case ADD_POST:{
            let newPost = state.controllInput
           return {...state, messagesData:[...state.messagesData,{id: 7,  message:newPost, like: 0}] ,controllInput:""}
        }
        case UPDATE_NEW_POST_TEXT:{
           return {...state,controllInput:action.payload};
        }
        case SET_USER_PROFILE:
            return {...state, profile:action.profile}
        default:
            return state;
    }

}

export const addPostActionCreator=()=>{
    return{type:ADD_POST}
}
export const updateNewPostTextActionCreator=(text)=>{
    return{type:UPDATE_NEW_POST_TEXT,payload:text}
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer;