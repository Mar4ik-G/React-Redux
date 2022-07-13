import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersReducer.usersData;}

export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true);
    })

export const getPageSize = (state) => {
    return state.usersReducer.pageSize;
}

export const totalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount;
}

 export const currentPage = (state) => {
    return state.usersReducer.currentPage;
}

export const isFetching = (state) => {
    return state.usersReducer.isFetching;
}

export const followingInProgress = (state) => {
    return  state.usersReducer.followingInProgress;
}