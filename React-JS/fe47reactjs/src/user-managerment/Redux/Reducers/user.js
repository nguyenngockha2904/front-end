import { ADD_USER, DELETE_USER, EDIT_USER, FIND_USER } from "../actions/type";

let initialState = [
    {
        id: 1,
        name: "Dinh Phuc Nguyen",
        username: "dpnguyen",
        email: "dpnguyen@gmail.com",
        phoneNumber: "1123123213",
        type: "VIP"
    },
    {
        id: 2,
        name: "Nguyen Dinh Phuc",
        username: "nguyendp",
        email: "nguyendp@gmail.com",
        phoneNumber: "1123123213",
        type: "VIP"
    },
    {
        id: 3,
        name: "Ngọc Phuc Nguyen",
        username: "dpnguyen",
        email: "dpnguyen@gmail.com",
        phoneNumber: "1123123213",
        type: "USER"
    },
    {
        id: 4,
        name: "Nguyen Dinh Phuc",
        username: "nguyendp",
        email: "nguyendp@gmail.com",
        phoneNumber: "1123123213",
        type: "USER"
    }
]
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            state.push(action.payload);
            console.log(state);
            return [...state];
        case DELETE_USER:
            state.splice(state.findIndex((item) => item.username === action.payload), 1);
            return [...state];
        case EDIT_USER:
            let index = state.findIndex((item) => item.username === action.payload.username);
            console.log(index, action.payload);
            state[index] = action.payload;
            return [...state];
        default:
            return state;
    }

}
export default userReducer;