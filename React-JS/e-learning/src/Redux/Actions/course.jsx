// async action 
import { course } from '../../services/index';
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from './type';
import { createAction } from '.';
export const fetchCourses = () => {
    return (dispatch) => {
        course.fetchCourse().then((res) => { //res đại diện cho csdl trả về
            // console.log(res);
            // dispatch lên 1 action
            dispatch(createAction(FETCH_COURSES, res.data));
        }).catch((err) => {
            console.log(err);
        });
    }
}
export const fetchDetailCourses = (id) => {
    return (dispatch) => {
        course.fetchCourseDetail(id).then((res) => {
            dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
        }).catch((err) => {
            console.log(err);
        })
    }
}