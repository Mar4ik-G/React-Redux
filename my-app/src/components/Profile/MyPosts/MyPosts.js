import React from 'react';
import MPStyle from "../MyPosts/MPS.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {
    return (
        <div className={MPStyle.block}>
            <div className={MPStyle.HText}>New Post</div>
            <div className={MPStyle.formik}>
                <div><input className={MPStyle.input} type="text"/></div>
                <button className={MPStyle.button}>Add Post</button>
            </div>
            {props.myPostProps.map(e => <MyPost text={e.message} like={e.like} key={e.id}/>)}
        </div>
    );
};

export default MyPosts;