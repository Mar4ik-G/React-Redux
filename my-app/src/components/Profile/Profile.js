import React from 'react';
import ProfileStyle from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
            <div className={ProfileStyle.content}>
                <ProfileInfo/>
                <MyPosts myPostProps={props.profileProps}
                         func={props.funcAddPost}
                         funcFroInput={props.controlInput} textForInput={props.textInInput}/>
            </div>
    );
};

export default Profile;