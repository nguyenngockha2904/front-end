import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "../Actions/type";

//giá trị ban đầu của course khi ta lưu trên store là gì 
let initialState = {
    courses: [],
    courseDetail: null,

}
//create Reducer  quản lý
//nhận vào giá trị hiện tại của dữ liệu là courses,
// Ban đầu mặc định dữ liệu cho nó bằng initialState lúc mời vào
// nó nhận action được gửi lên từ component 
// và nó tiến hành xữ lý action và trả về dữ liệu mới cho mình.
//dùng switch để kiểm tra action
//tạm chưa có action nên khi gọi .thì mặc định vào dữ liệu gì ra dữ liệu đó.
const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES: {
            state.courses = action.payload;
            return { ...state };
        }
        case FETCH_COURSE_DETAIL: {
            state.courseDetail = action.payload;
            return { ...state };
        }
        default: return state;
    }
}
//export ra bên ngoài để sử dụng
export default CourseReducer;