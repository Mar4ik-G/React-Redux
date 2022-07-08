import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducer/profile-reducer";
import dialogsReducer from "./Reducer/dialogs-reducer";
import newsReducer from "./Reducer/news-reducer";
import usersReducer from "./Reducer/users-reducer";

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    newsReducer: newsReducer,
    usersReducer:usersReducer
})

const store = createStore(rootReducer);

export default store;