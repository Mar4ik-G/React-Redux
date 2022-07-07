import React from 'react';
import ProfileStyle from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
            <div className={ProfileStyle.content}>
                <ProfileInfo/>
                <MyPosts myPostProps={props.profileProps}
                         dispatch={props.dispatch}
                         textForInput={props.controlInput}/>
            </div>
    );
};

export default Profile;