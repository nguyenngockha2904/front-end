// console.log("Hi ! im`kha");
// let k = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let arr1: Array<number> = [1, 2, 3, 4];
// //tuple
// let tuple: [string, number] = ["điểm toán", 7];
// // enum chỉ dc đọc không dc thay đổix
// enum Color {
//   black = "#000",
//   white = "#fff",
//   blue = "#00ff",
// }
// console.log(Color.black);
// let any: any = 1;
// any = "hello";
// any = true;
// // function
// function greeting(): void {
//   console.log("hi");
// }
// function tinhDiem(): number {
//   return (1 + 2 + 3) / 3;
// }
// let result: string | number = "ok";
// result = 5;
// let arr3: Array<string | number> = [1, "2"];
// let arr4: (string | number)[] = [2, "1"];
// /* Object */
// // type SinhVien = {
// //   hoTen: string;
// //   tuoi: number;
// //   lop: string;
// // };
// // const sinhVien: SinhVien = {
// //   hoTen: "Kha",
// //   tuoi: 25,
// //   lop: "FE47",
// // };
// type SinhVien = {
//   hoTen: string;
//   tuoi: number;
//   lop?: string;
// };
// const sinhVien: SinhVien = {
//   hoTen: "Kha",
//   tuoi: 25,
//   // lop: "FE47",
// };
// // Optional chaining lưu ý : có từ phiên bản typescipt 3.7 trở lên
// // để kiểm tra trong trường hộp ko có dữ liệu thì ta dùng
// // obj?.a?.b?.c?.d;
// // movie?.detail?.lichChieu;
// // arrow function
// const hello = (name: string): void => {
//   console.log(name);
// };
// // arrow function with default params
// const hello1 = (name = "kha"): string => {
//   return name;
// };
// // hello1("kha1");
// // props
// // function Header({ title, children, ...props }) {}
// // <Header  title={"Ok"} content={"ok"} data={""} />
// const displayColor = (...colors: string[]) => {
//   for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
//   }
// };
// displayColor("red", "blue");
// displayColor("grey", "red", "white", "pink");
// let colors = ["grey", "red", "white", "pink"];
// // displayColor(colors); error
// displayColor(...colors); //spread operator
// const { hoTen, lop, tuoi } = sinhVien;
// const { hoTen: hoTenNew, lop: lopNew, tuoi: tuoiNew } = sinhVien;
// for (let key in sinhVien) {
//   console.log(sinhVien[key]);
// }
// // duyệt object
// Object.keys(sinhVien).map((item) => console.log(sinhVien[item]));
var NhanVien = /** @class */ (function () {
    // constructor
    function NhanVien(hoTen, tuoi) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
    }
    // get set
    NhanVien.prototype.getHoTen = function () {
        return this.hoTen;
    };
    NhanVien.prototype.setHoTen = function (hoTen) {
        this.hoTen = hoTen;
    };
    // method
    NhanVien.prototype.tinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(hoTen, tuoi, heSoLuong) {
        var _this = _super.call(this, hoTen, tuoi) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    GiamDoc.prototype.tinhLuong = function () {
        return _super.prototype.tinhLuong.call(this) * this.heSoLuong;
    };
    return GiamDoc;
}(NhanVien));
var gd = new GiamDoc("Giám đốc", 50, 2000);
var NhanVienThietKe = /** @class */ (function () {
    function NhanVienThietKe(hoTen, tuoi, chucVu) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.chucVu = chucVu;
    }
    NhanVienThietKe.prototype.thucHienCongViec = function () {
        console.log("nhân viên thiết kế");
    };
    NhanVienThietKe.prototype.tinhLuong = function () {
        return 0;
    };
    return NhanVienThietKe;
}());
// DOM
var button = document.getElementById("btnDetail");
button.addEventListener("click", function () {
    console.log("hi!");
});
var input = document.getElementById("txtName");
input.value = "kha ";
