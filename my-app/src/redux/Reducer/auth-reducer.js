import {authAPI, profileAPI, securityAPI} from "../../components/api/api";

const SET_USER_DATA ="SET-USER-DATA";
// const GET_CAPTCHA_URL ="GET_CAPTCHA_URL";



const initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false,
    // captchaUrl:null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        return {
            ...state,
            ...action.payload
        }
        // case GET_CAPTCHA_URL:
        //     return {
        //         ...state,
        //         ...action.payload
        //     }
        default:
            return state;
    }

}
export const setAuthUserData = (userId,email,login, isAuth) => ({type:SET_USER_DATA, payload:{userId,email,login,isAuth}})
// export const setCapthcaUrl = (captchaUrl) => ({type:GET_CAPTCHA_URL, payload: captchaUrl})


export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0 ){
                let{id,email,login} = response.data.data;
               dispatch(setAuthUserData(id,email,login,true));
            }
        });
}

export const login = (email,password,rememberMe) => (dispatch) => {
    authAPI.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0 ){
            dispatch(getAuthUserData())
            }
            // else if(response.data.resultCode === 10 ){
            //     dispatch(getCaptchaUrl())
            // }
        });
}

// export const getCaptchaUrl = () => async (dispatch) => {
//     const response = await securityAPI.getCaptchaUrl()
//            const captchaUrl = response.data.url
//     dispatch(setCapthcaUrl(captchaUrl))
//         }



export const loginOut = () => (dispatch) => {
    authAPI.loginOut()
        .then(response => {
            if (response.data.resultCode === 0 ){
                dispatch(setAuthUserData(null,null,null,false));
            }
        });
}


export default authReducer;