import React from 'react';
import MPStyle from "../MyPosts/MPS.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div className={MPStyle.block}>
            <div className={MPStyle.HText}>New Post</div>
            <div className={MPStyle.formik}>
                <div><input className={MPStyle.input} type="text"/></div>
                <button className={MPStyle.button}>Add Post</button>
            </div>
            <MyPost text={"Hi"} like={"1"}/>
            <MyPost text={"Where are you from?"} like={"23"}/>
            <MyPost text={"Hi my name Mark"} like={"27"}/>
        </div>
    );
};

export default MyPosts;