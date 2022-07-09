const FOLLOW ="FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = " SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS'


const initialState = {
    usersData: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true,
    followingInProgress:[]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, usersData:action.users}
        case FOLLOW:
            return {
                ...state,
                usersData:state.usersData.map(e => {
                    if (e.id === action.userId){
                        return {...e, followed : true}
                    }
                    return e;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData:state.usersData.map(e => {
                    if (e.id === action.userId){
                        return {...e, followed : false}
                    }

                    return e;
                }),
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {...state,  followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)}

        default:
            return state;
    }

}

export const follow = (userId) => ({type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS,  isFetching, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching:isFetching })

export default usersReducer;