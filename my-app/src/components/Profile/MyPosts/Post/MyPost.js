import React from 'react';
import MPostStyle from "../Post/MPostStyle.module.css";

const MyPost = (props) => {
    return (
        <div className={MPostStyle.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF0F86bWVGKdXn52LH-L819uOvAepAuqa3_9fknbfc_Hxyqg2acuB11LbIUq66LMElmU&usqp=CAU" alt="avatar"/>
            <p className={MPostStyle.text}>{props.text}</p>
            <p className={MPostStyle.like}>{props.like} Like</p>
        </div>
    );
};

export default MyPost;