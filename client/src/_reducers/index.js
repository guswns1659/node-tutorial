import {combineReducers} from "redux";
// import user from './user_reducer'

/**
 * 여러 reducer를 합쳐주는 기능. state 종류에 따라 reducer를 나눌 수 있다. ex. user, comments
 */
const rootReducer = combineReducers({
    // user,
})

export default rootReducer;