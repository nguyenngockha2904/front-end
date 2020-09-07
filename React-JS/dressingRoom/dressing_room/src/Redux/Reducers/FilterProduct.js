import { CHOOSE_CATEGORIES } from "../actions/type";

let initialState = '';

const filterProductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHOOSE_CATEGORIES:
            return payload;
        default:
            return state;
    }
}
export default filterProductsReducer;