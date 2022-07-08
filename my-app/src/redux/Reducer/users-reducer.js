const FOLLOW ="FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS = "SET-USERS";


const initialState = {
    usersData: [

    ],

}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, usersData: [...state.usersData, ...action.users]}

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
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default usersReducer;