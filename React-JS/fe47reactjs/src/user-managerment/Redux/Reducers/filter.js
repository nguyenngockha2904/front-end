import { FIND_USER } from "../actions/type";

let initialState = null;

const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FIND_USER:
            return payload;
    }

    return state;
};
export default filterReducer;