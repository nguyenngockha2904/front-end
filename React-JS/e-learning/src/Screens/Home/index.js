import React, { Component } from 'react';
import CourseItem from '../../Components/CourseItems';
import Axios from 'axios';
import { connect } from 'react-redux';
class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh Sách Khóa Học</h1>
                <div className="container">
                    <div className="row">
                        {this.props.courselist.map((item, index) => (
                            <div className="col-3 my-3">
                                <CourseItem item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    // chạy sau render và chạy đúng 1 lần đầu tiên
    componentDidMount() {
        // axios return về 1 đối tượng  gọi là promise. 
        // axios được xây dưng theo kiểu bất đồng bộ.
        // nó không chờ dữ liệu trả về mà nó tiếp tục chạy tiếp dòng lệch console.log(12)
        // vì chúng ta ko biết khi nào server trả về, lỡ server chết hay đứng bất chợt thì chúng ta sẽ bị block ngay Axios!

        // GET dùng để lấy dữ Liệu.
        // POST dùng để thêm dữ liệu mới.
        // PUT là để cập nhật dữ liệu ghi đè dữ liệu cũ thành dữ liệu mới.
        // PATCH là để cập nhật từng phần của dữ liệu.

        Axios({
            method: 'GET',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
        }).then((res) => { //res đại diện cho csdl trả về
            // console.log(res);
            // dispatch lên 1 action
            this.props.dispatch({
                type: 'FETCH_COURSES',
                payload: res.data,
            })
        }).catch((err) => {
            console.log(err);
        });

        console.log(12);
    }
}
const mapStateToProps = (state) => ({
    courselist: state.course.courses,
})
export default connect(mapStateToProps)(HomeScreen);
