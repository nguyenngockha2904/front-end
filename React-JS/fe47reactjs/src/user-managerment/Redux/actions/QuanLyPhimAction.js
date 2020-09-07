import Axios from 'axios';
import { FET_DATA_MOVIE } from './type';

export const layDanhSachPhimAction = () => {
    return callAjax;
}

const callAjax = dispatch => {
    Axios({
        url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13',
        method: 'get'
    }).then(res => {
        console.log(res.data);
        dispatch({
            type: FET_DATA_MOVIE,
            payload: res.data,
        });
    }).catch(err => {
        console.log(err);
    })
}