import { CHOOSE_CLOTHES } from "../actions/type";

let initialState = {
    topclothes: '',
    botclothes: '',
    shoes: '',
    handbags: '',
    necklaces: '',
    hairstyle: '',
    background: ''
};

const ModelReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHOOSE_CLOTHES:
            switch (payload.type) {
                case 'topclothes':
                    state.topclothes = payload.img;
                    break;
                case 'botclothes':
                    state.botclothes = payload.img;
                    break;
                case 'shoes':
                    state.shoes = payload.img;
                    break;
                case 'handbags':
                    state.handbags = payload.img;
                    break;
                case 'necklaces':
                    state.necklaces = payload.img;
                    break;
                case 'hairstyle':
                    state.hairstyle = payload.img;
                    break;
                case 'background':
                    state.background = payload.img;
                    break;
            }
            return { ...state };
        default:
            return state;
    }
}
export default ModelReducer;