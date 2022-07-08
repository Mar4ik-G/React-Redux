import React from 'react';
import UsersStyle from "./Users.module.css"
import axios from "axios";

const Users = (props) => {
let getUsers = () => {
    if (props.users.length === 0) {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }
}


    return (
        <div className={UsersStyle.mainContent}>
            <button onClick={getUsers}>GET USERS</button>
            {
                props.users.map(e => <div key={e.id}>
                    <span>
                        <div>
                            <img
                                src={e.photos.small != null ? e.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF0F86bWVGKdXn52LH-L819uOvAepAuqa3_9fknbfc_Hxyqg2acuB11LbIUq66LMElmU&usqp=CAU'}
                                alt="ava"/>
                        </div>
                    </span>
                    <span>
                        <div>
                        {e.followed
                            ? <button onClick={() => {
                                props.unfollow(e.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(e.id)
                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{e.name}</div>
                        <div>{e.status}</div>
                    </span>
                    <span>
                        <div>{'e.location.city'}</div>
                        <div>{'e.location.country'}</div>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;