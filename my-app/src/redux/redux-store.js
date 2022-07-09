import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducer/profile-reducer";
import dialogsReducer from "./Reducer/dialogs-reducer";
import newsReducer from "./Reducer/news-reducer";
import usersReducer from "./Reducer/users-reducer";
import authReducer from "./Reducer/auth-reducer";

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    newsReducer: newsReducer,
    usersReducer:usersReducer,
    authReducer:authReducer
})

const store = createStore(rootReducer);

window.store = store;

export default store;