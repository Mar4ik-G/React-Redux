import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingInProgress, toggleIsFetching,
    unfollow
} from "../../redux/Reducer/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

import Preloader from "../Preloader/Preloader";
import {getUsers2, usersAPI} from "../api/api";

class UserAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });



    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers2(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                   toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
        return{
            users: state.usersReducer.usersData,
            pageSize: state.usersReducer.pageSize,
            totalUsersCount: state.usersReducer.totalUsersCount,
            currentPage: state.usersReducer.currentPage,
            isFetching:  state.usersReducer.isFetching,
            followingInProgress:  state.usersReducer.followingInProgress,

        }
};

export default connect(mapStateToProps,{follow, unfollow, setUsers,
    setCurrentPage, setUsersTotalCount, toggleIsFetching,toggleFollowingInProgress})(UserAPIComponent);