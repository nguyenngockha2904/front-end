import React, { Component } from 'react';
import CourseItem from '../../Components/CourseItems';
import { connect } from 'react-redux';
import { fetchCourses } from '../../Redux/Actions/course';
class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh Sách Khóa Học</h1>
                <div className="container">
                    <div className="row">
                        {this.props.courselist.map((item, index) => (
                            <div className="col-3 my-3" key={index}>
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
        this.props.dispatch(fetchCourses())
    }
}
const mapStateToProps = (state) => ({
    courselist: state.course.courses,
})
export default connect(mapStateToProps)(HomeScreen);
