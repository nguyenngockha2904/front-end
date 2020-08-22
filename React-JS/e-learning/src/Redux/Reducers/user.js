import { FETCH_CREDENTIALS } from "../Actions/type";

let initialState = {
    credentials: null, // thông tin đăng nhập
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDENTIALS:
            state.credentials = action.payload;
            return { ...state };
        default:
            return state;
    }

};

export default UserReducer;
