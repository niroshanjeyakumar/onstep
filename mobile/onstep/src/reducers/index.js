import {combineReducers} from 'redux';
import user from './user'
import LoggedIn from './loggedIn';

export default combineReducers({
    user,
    LoggedIn
})