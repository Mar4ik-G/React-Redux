import React from 'react';
import UsersStyle from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingInProgress} from "../../redux/Reducer/users-reducer";


function UserAPIComponent(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 15) {
            pages.push(i);
        }
    }

    return (<div >
            <div>
                {pages.map(p => {
                    return <span key={Math.random() * 99} className={props.currentPage === p ? UsersStyle.activePage: null}
                                 onClick={(e) => {
                                    props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>

            <div className={UsersStyle.mainContent}>
                {
                    props.users.map(e => <div className={UsersStyle.userBlock} key={e.id * Math.random() * 99}>
                        <span>
                        <div >
                            <NavLink to={'/profile/' + e.id}>
                                  <img className={UsersStyle.img}
                                       src={e.photos.small != null ? e.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF0F86bWVGKdXn52LH-L819uOvAepAuqa3_9fknbfc_Hxyqg2acuB11LbIUq66LMElmU&usqp=CAU'}
                                       alt="ava"/>
                            </NavLink>

                        </div>
                    </span>
                        <span>
                        <div>
                        {e.followed ? <button disabled={props.followingInProgress.some(id => id === e.id)} onClick={() => {

                                props.toggleFollowingInProgress(true, e.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "edf44cad-8c0e-4351-9594-484692820c42"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(e.id);
                                        }

                                        props.toggleFollowingInProgress(false, e.id)
                                    });

                        }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === e.id)} onClick={() => {
                                props.toggleFollowingInProgress(true, e.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "edf44cad-8c0e-4351-9594-484692820c42"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(e.id);
                                        }
                                        props.toggleFollowingInProgress(false, e.id)
                                    });

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
        </div>

    );
}

export default UserAPIComponent;
