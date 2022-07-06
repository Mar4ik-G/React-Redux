import React from 'react';
import ProfileStyle from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
            <div className={ProfileStyle.content}>
                <ProfileInfo/>
                <MyPosts/>
            </div>
    );
};

export default Profile;