import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
 toggleFollowingInProgress,
    unfollow
} from "../../redux/Reducer/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import WithAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPage,
    followingInProgress,
    getPageSize, getUsers,
    isFetching,
    totalUsersCount
} from "../../redux/Reducer/users-selector";

class UserAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state),

    }
};



export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        toggleFollowingInProgress, getUsersThunkCreator
    })
)(UserAPIComponent)