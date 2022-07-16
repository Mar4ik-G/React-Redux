import {profileAPI, usersAPI} from "../../components/api/api";

const ADD_POST ='ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE ='SET-USER-PROFILE'
const SET_STATUS ='SET-STATUS'
const DELETE_POST = 'DELETE_POST';

const initialState={
        messagesData: [
            {like: 13, message: 'Mark', id: '1'},
            {like: 21, message: 'Where are you from?', id: '2'},
            {like: 41, message: 'name Mark', id: '3'},
            {like: 15, message: 'Hi my name Mark', id: '4'},
        ],
        controllInput:'something',
        profile:null,
        status:''
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
        case SET_STATUS:
            return {...state, status:action.status}
        case DELETE_POST:
            return {...state, messagesData: state.messagesData.filter(p => p.id != action.postId)}
        default:
            return state;
    }

}

export const addPostActionCreator=(newPostText)=>{
    return{type:ADD_POST,  newPostText}
}
export const updateNewPostTextActionCreator=(text)=>{
    return{type:UPDATE_NEW_POST_TEXT,payload:text}
}
export const setStatus=(status)=>({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}
export const getStatus= (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {

        dispatch(setStatus(response.data))
    });
}
export const updateStatus= (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {

            if (response.data.resultCode === 0 ){
                dispatch(setStatus(status))
            }

    });
}


export default profileReducer;