import React from 'react';
import MPStyle from "../MyPosts/MPS.module.css";
import MyPost from "./Post/MyPost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";




const MyPosts = (props) => {
    const refInput = React.createRef();


        const addPost = () => {
            props.dispatch(addPostActionCreator())
        };

        let addText = () => {
            let text = refInput.current.value;
           let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
        };

    return (
        <div className={MPStyle.block}>
            <div className={MPStyle.HText}>New Post</div>
            <div className={MPStyle.formik}>
                <div>
                    <input className={MPStyle.input}
                           type="text"
                           value={props.textForInput}
                           ref={refInput}
                           onChange={addText}/>
                </div>
                <button className={MPStyle.button} onClick={addPost}>Add Post</button>
            </div>
            {props.myPostProps.map(e => <MyPost text={e.message} like={e.like} key={e.id + Math.random()*999}/>)}
        </div>
    );
};

export default MyPosts;