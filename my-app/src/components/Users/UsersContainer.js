import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../redux/Reducer/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UserAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}s
        />
    }
}

const mapStateToProps = (state) => {
        return{
            users: state.usersReducer.usersData,
            pageSize: state.usersReducer.pageSize,
            totalUsersCount: state.usersReducer.totalUsersCount,
            currentPage: state.usersReducer.currentPage,
        }
};

const mapDispatchToProps = (dispatch) => {
    return{
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserAPIComponent);