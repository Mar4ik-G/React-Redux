import React from 'react';
import MPStyle from "../MyPosts/MPS.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {

    const refInput = React.createRef();

        const addPost = () => {
            let text = refInput.current.value;
          alert(text)
        };

    return (
        <div className={MPStyle.block}>
            <div className={MPStyle.HText}>New Post</div>
            <div className={MPStyle.formik}>
                <div>
                    <input className={MPStyle.input} type="text" ref={refInput}/>
                </div>
                <button className={MPStyle.button} onClick={addPost}>Add Post</button>
            </div>
            {props.myPostProps.map(e => <MyPost text={e.message} like={e.like} key={e.id}/>)}
        </div>
    );
};

export default MyPosts;