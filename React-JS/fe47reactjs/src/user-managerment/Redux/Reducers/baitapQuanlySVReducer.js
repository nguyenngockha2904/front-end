import { THEM_SV, XOA_SV, SUA_SV, SHOW_SV } from "../actions/type";


const initialState = {
    mangSinhVien: [
        { masv: 1, tensv: 'nguyễn văn a', email: 'vana@gmail.com', sdt: '0303030303' },
        { masv: 2, tensv: 'nguyễn văn B', email: 'vanB@gmail.com', sdt: '0909990303' },
    ],
    sinhVienSua: { masv: '', tensv: '', email: '', sdt: '' },
}
const BaiTapQuanLySinhVienR = (state = initialState, { type, payload }) => {
    switch (type) {
        case THEM_SV: {
            state.mangSinhVien = [...state.mangSinhVien, payload];
            return { ...state };
        }
        case SHOW_SV: {
            return { ...state, sinhVienSua: { ...payload } };
        }
        case XOA_SV: {
            let mangsvupdate = [...state.mangSinhVien];
            let index = state.mangSinhVien.findIndex(sv => sv.masv === payload.masv);
            if (index !== -1) {
                mangsvupdate.splice(index, 1);
            }
            state.mangSinhVien = mangsvupdate;
            return { ...state };
        }
        case SUA_SV:
            {
                let mangsvupdate = [...state.mangSinhVien];
                let index = state.mangSinhVien.findIndex(sv => sv.masv === payload.masv);
                if (index !== -1) {
                    mangsvupdate[index] = { ...payload };
                }
                state.mangSinhVien = mangsvupdate;
                return { ...state };
            }
        default:
            return state;
    }
}

export default BaiTapQuanLySinhVienR;
