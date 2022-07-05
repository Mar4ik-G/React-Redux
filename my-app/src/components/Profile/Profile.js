import React from 'react';
import ProfileStyle from "./Profile.module.css"

const Profile = () => {
    return (
            <div className={ProfileStyle.content}>
                <div>
                    <img src="https://images.unsplash.com/photo-1553615738-d8e0829f1d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80" alt="foto-main"/>
                </div>

                <div className={ProfileStyle.block}>
                    <div>ava+Status</div>
                    <div>My posts</div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>

            </div>
    );
};

export default Profile;