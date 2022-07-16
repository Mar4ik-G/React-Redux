import React from 'react';
import ProfileInfoStyle from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileDataForm = (props) => {
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
            {/*<div className={ProfileInfoStyle.infoUser2}>*/}
            {/*    <p> Find A Job: {props.profile.lookingForAJob ? "YES" : "NO"}</p>*/}
            {/*    <p> About Me: {props.profile.aboutMe}</p>*/}
            {/*    <div>*/}
            {/*        <h4>Contacts</h4>*/}
            {/*        <p><i>GitHub: {props.profile.contacts.github}</i></p>*/}
            {/*        <p><i>Instagram: {props.profile.contacts.instagram}</i></p>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    );
};

export default ProfileDataForm;