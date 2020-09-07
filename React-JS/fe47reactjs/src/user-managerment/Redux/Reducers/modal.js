// giá trị khởi tạo
import { HIDE_MODAL, SHOW_MODAL } from '../actions/type';

let initialState = [];

const Modalreducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case SHOW_MODAL:
            return [true, action.payload];
        case HIDE_MODAL:
            return [false, {}];
        default:
            return state;
    }

}

export default Modalreducer;