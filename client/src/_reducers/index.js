import {combineReducers} from "redux";
import user from './user_reducer';

/**
 * Reducer combining several reducers according to type. ex. user, comments
 */
const Reducer = combineReducers({
    user
})

export default Reducer;