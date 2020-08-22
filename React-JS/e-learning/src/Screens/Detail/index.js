import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchDetailCourses } from '../../Redux/Actions/course';
class CourseDetailScreen extends Component {
    state = {
    }
    render() {
        return (
            <div className="container">
                <img className="img-fluid" src={this.props.CourseDetail.hinhAnh} />
                <h3 className="">{this.props.CourseDetail.tenKhoaHoc}</h3>
            </div>
        );
    }
    componentDidMount() {

        this.props.dispatch(fetchDetailCourses(this.props.match.params.courseId));

    }
}
const MapStateToProps = (state) => ({
    //kiểu dữ liệu ban đầu nó là null, lần chạy )ban đầu thay vì lấy null, ta sẽ cho nó là 1 object
    CourseDetail: state.course.courseDetail || {
        maKhoaHoc: '',
        tenKhoaHoc: '',
        hinhAnh: '',
        nguoiTao: {
            taiKhoan: '',
            hoTen: ''
        }
    }
})

export default connect(MapStateToProps)(CourseDetailScreen);