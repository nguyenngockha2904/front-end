import { combineReducers } from 'redux';
import userReducer from './user';
import Modalreducer from './modal';
import filterReducer from './filter';
import BaiTapQuanLySinhVienR from './baitapQuanlySVReducer';
import QuanLyPhimReducer from './QuanLyPhimReducer';
const RootReducer = combineReducers(
    //state //
    {
        // chứa state (dữ liệu trên store)
        // tenDuLieu: ten ReducerQuanLyDuLieu
        userList: userReducer,
        showModal: Modalreducer,
        filter: filterReducer,
        baiQuanLySinhVienReducer: BaiTapQuanLySinhVienR,
        QuanLyPhimReducer: QuanLyPhimReducer,
    }
)

export default RootReducer;
