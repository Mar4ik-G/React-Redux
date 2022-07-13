import React from 'react';
import ProfileInfoStyle from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={ProfileInfoStyle.img1}
                    src="https://images.unsplash.com/photo-1553615738-d8e0829f1d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    alt="foto-main"/>
            </div>
            <div>

            </div>
            <div className={ProfileInfoStyle.infoUser}>
                <div className={ProfileInfoStyle.picture}>
                    <img className={ProfileInfoStyle.img2}  src={props.profile.photos.large} alt="avatar"/>
                </div>
                <div className={ProfileInfoStyle.status}>{props.profile.fullName}    </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
};

export default ProfileInfo;