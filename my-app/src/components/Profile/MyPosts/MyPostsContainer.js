import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Reducer/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//
//         const addPost = () => {
//             props.store.dispatch(addPostActionCreator())
//         };
//
//         let addText = (text) => {
//            let action = updateNewPostTextActionCreator(text)
//             props.store.dispatch(action)
//         };
//
//     return <MyPosts updateNewPostTextActionCreator={addText}
//                     addPost={addPost}
//                     posts={state.profileReducer.profile.messagesData}
//                     textForInput={state.profileReducer.profile.controllInput}/>
// };

let mapStateToProps = (state) => {
    return {
        posts:state.profileReducer.messagesData,
        textForInput:state.profileReducer.controllInput,

    }
}

let mapDispatchToProps=(dispatch) => {

    return {
        addPost:() => {dispatch(addPostActionCreator())},
        updateNewPostTextActionCreator:(text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)}
    }

}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;