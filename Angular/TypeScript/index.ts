// console.log("Hi ! im`kha");
// let k = 0;

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

class NhanVien {
  // property
  private hoTen: string;
  private tuoi: number;
  // constructor
  constructor(hoTen: string, tuoi: number) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
  }
  // get set
  getHoTen(): string {
    return this.hoTen;
  }
  setHoTen(hoTen: string): void {
    this.hoTen = hoTen;
  }
  // method
  tinhLuong(): number {
    return 1000;
  }
}

class GiamDoc extends NhanVien {
  heSoLuong: number;
  constructor(hoTen: string, tuoi: number, heSoLuong: number) {
    super(hoTen, tuoi);
    this.heSoLuong = heSoLuong;
  }
  tinhLuong(): number {
    return super.tinhLuong() * this.heSoLuong;
  }
}

const gd = new GiamDoc("Giám đốc", 50, 2000);
// console.log(gd.tinhLuong());

interface INhanVien {
  // property
  hoTen: string;
  tuoi: number;
  chucVu: string;
  // method
  thucHienCongViec(): void;
  tinhLuong(): number;
}

class NhanVienThietKe implements INhanVien {
  hoTen: string;
  tuoi: number;
  chucVu: string;

  constructor(hoTen: string, tuoi: number, chucVu: string) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.chucVu = chucVu;
  }

  thucHienCongViec(): void {
    console.log("nhân viên thiết kế");
  }
  tinhLuong(): number {
    return 0;
  }
}

// DOM

const button = <HTMLButtonElement>document.getElementById("btnDetail");
button.addEventListener("click", () => {
  console.log("hi!");
});
const input = <HTMLInputElement>document.getElementById("txtName");

input.value = "kha ";
