import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Reducer/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



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