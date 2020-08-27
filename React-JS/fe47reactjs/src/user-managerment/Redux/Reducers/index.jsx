import { combineReducers } from 'redux';
import userReducer from '../user';
const RootReducer = combineReducers({
    // chứa state (dữ liệu trên store)
    // tenDuLieu: ten ReducerQuanLyDuLieu
    user: userReducer,
})

export default RootReducer;
