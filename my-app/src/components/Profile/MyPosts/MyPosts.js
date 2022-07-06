import React from 'react';
import MPStyle from "../MyPosts/MPS.module.css";
import MyPost from "./Post/MyPost";


const MyPosts = () => {
    let messagesData =[
        {like:13,message:'Mark', id:'1'},
        {like:21,message:'Where are you from?', id:'2'},
        {like:41,message:'name Mark', id:'3'},
        {like:15,message:'Hi my name Mark', id:'4'},
        {like:23,message:'Where are you from?', id:'5'},
        {like:54,message:'Hi my name Mark', id:'6'},
    ];

    return (
        <div className={MPStyle.block}>
            <div className={MPStyle.HText}>New Post</div>
            <div className={MPStyle.formik}>
                <div><input className={MPStyle.input} type="text"/></div>
                <button className={MPStyle.button}>Add Post</button>
            </div>
            {messagesData.map(e => <MyPost text={e.message} like={e.like} key={e.id}/>)}
        </div>
    );
};

export default MyPosts;