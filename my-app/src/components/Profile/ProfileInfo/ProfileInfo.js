import React from 'react';
import ProfileInfoStyle from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
           props.savePhoto(e.target.files[0]);
        }
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
                    { props.profile.photos.large
                        ? <img className={ProfileInfoStyle.img2}  src={props.profile.photos.large} alt="avatar"/>
                        :  <img className={ProfileInfoStyle.img3}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF0F86bWVGKdXn52LH-L819uOvAepAuqa3_9fknbfc_Hxyqg2acuB11LbIUq66LMElmU&usqp=CAU"  alt="avatar"/> }

                </div>
                {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                <div className={ProfileInfoStyle.status}>{props.profile.fullName}    </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
};

export default ProfileInfo;