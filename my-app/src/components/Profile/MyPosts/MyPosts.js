import React from 'react';
import MPStyle from "../MyPosts/MPS.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div className={MPStyle.block}>
            <div>My posts</div>
            <div><textarea name="" id="" cols="30" rows="3"></textarea></div>
            <button>Add Post</button>
            <MyPost/>

        </div>
    );
};

export default MyPosts;