import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED ="SET_INITIALIZED";

const initialState = {
        initialized:false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized:true }
        default:
            return state;
    }

}

export const setInitialized = () => ({type:SET_INITIALIZED})

export const initializedApp = () => (dispatch) => {
        let a =dispatch(getAuthUserData())
    debugger
        dispatch(setInitialized())

}