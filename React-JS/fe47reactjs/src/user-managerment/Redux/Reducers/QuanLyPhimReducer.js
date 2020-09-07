import { FET_DATA_MOVIE } from "../actions/type";

let initalState = {
    danhSachPhim: [
        {
            biDanh: "ted-2",
            danhGia: 10,
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/ted-2_gp13.jpg",
            maNhom: "GP13",
            maPhim: 1326,
            moTa: "A wish comes true for John when his teddy bear, Ted, comes to life. John plans to move in with his girlfriend, but Ted is not prepared for the change and unintentionally ruins their relationship.",
            ngayKhoiChieu: "2020-06-24T00:00:00",
            tenPhim: "Ted 2",
            trailer: "https://www.youtube.com/embed/S3AVcCggRnU",
        }
    ]
}
const QuanLyPhimReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case FET_DATA_MOVIE: {
            state.danhSachPhim = [...payload];
            return { ...state };
        }
        default:
            return state;
    }
}
export default QuanLyPhimReducer;