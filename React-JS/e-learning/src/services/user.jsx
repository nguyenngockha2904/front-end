import Axios from 'axios';
import * as yup from 'yup';
export const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('Vui lòng nhập tài khoản !'),
    matKhau: yup.string().required('Vui lòng nhập mật khẩu !'),
    hoTen: yup.string().required('Vui lòng nhập họ tên !'),
    email: yup.string().required('Vui lòng nhập email !').email("abc@email.com"),
    soDT: yup.string().matches(/^[0-9]+$/).required('vui lòng nhập số điện thoại'),
    maNhom: yup.string().required('Vui lòng nhập mã nhóm !'),
})
class UserService {
    signUp(data) {
        return Axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
        });
    }
    signIn(user) {
        return Axios({
            method: "POST",
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user
        });
    }
}
export default UserService;