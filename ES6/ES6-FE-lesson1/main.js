// var inum=5;
// if(true){
//     var inum=10;
// }
// console.log(inum);

// let inum=5;
// if(true){
//     let inum=10;
//     console.log(inum);
// }
// console.log(inum);

// a= 10;
// console.log(a);
// let a=20;


// var a;
// console.log(a);
// a=10;
// let a=20;

// if(true){
//     let x= 10;
// }
// console.log(x);
// kết quả : Uncaught ReferenceError: x is not defined


// var mangButton = document.getElementsByTagName('button');
// for (var i = 0; i < 3; i++) {
//     mangButton[i].onclick = function () {
//         alert(i);
//     }
// }

// no-arrow function 
// var hoTen ="abc";
// nó sẽ hỉu là
// window.hoTen="abc"; 

// let hocVien={
//     hoTen:'Nguyễn A',
//     lop:'11dhpm',
//     layThongTinHocVien: function(){
//         function hienThiThongTin(){
//             console.log('Họ Tên: '+this.hoTen+' Lớp: '+this.lop);
//         }
//         hienThiThongTin();
//     }
// }
// hocVien.layThongTinHocVien();

//kq : 'Họ Tên: undefined Lớp: undefined'
// vì khi sử dụng function của ES5 ngữ cảnh của con trỏ this nó sẽ hỉu là của window
// kq : 'Họ Tên: abc Lớp: undefined'



//use arrow function 
// window.hoTen="abc"; 
// let hocVien = {
//     hoTen: 'Nguyễn A',
//     lop: '11dhpm',
//     layThongTinHocVien: function () {
//         let hienThiThongTin = () => {
//             console.log('Họ Tên: ' + this.hoTen + ' Lớp: ' + this.lop);
//         }
//         hienThiThongTin();
//     }
// }
// hocVien.layThongTinHocVien();

// kq : 'Họ Tên: Nguyễn A Lớp: 11dhpm'
// vì khi sử arrow function nó sẽ hiểu ngữ cảnh của con trỏ this là của đối tượng học viên

// function tinhTong(a,b){
//     console.log(a+b);
//     return a+b;
// }
// function tinhTong(a,b,c){
//     console.log(a+b+c);
//     return a+b+c;
// }
// tinhTong(1,2);
// tinhTong(1,2,3);

// // kq : NaN 6 

// function tinhTong(...resParams){
//     let tong=0;
//     for(let i=0 ;i<resParams.length;i++){
//         tong+=resParams[i];
//     }
// console.log(tong);
// }

// tinhTong(1,2);
// tinhTong(6,7,2,6,3);
// tinhTong(3,5,1,6);
// // kq :3 24 15

// let mangHocVien = [
//     {
//         maHV: 1,
//         tenHV: 'Nguyễn Văn C',
//     },
//     {
//         maHV: 2,
//         tenHV: 'Nguyễn Văn D',
//     },
// ]

// function xuLyMangHocVien(...resParam) {
//     if (resParam.length === 2) {
//         resParam[1].push(resParam[0]);
//         console.log(resParam[1]);
//     }else if(resParam.length>2){
//         switch(resParam[2]){
//             case 'Delete':{
//                 let index=resParam[1].findIndex(hv => hv.maHV===resParam[0].maHV);
//                 resParam[1].splice(index,1);
//                 console.log(resParam[1]);
//             }
//             case 'Update':{
//                 let index=resParam[1].findIndex(hv => hv.maHV===resParam[0].maHV);
//                 resParam[1][index].tenHV='Kha đẹp trai';
//                 console.log(resParam[1]);

//             }
//         }
//     }else{
//         console.log(resParam[0]);
//     }
// }
// let hv={
//     maHV:3,
//     tenHV:'Ngọc Kha',
// }
// xuLyMangHocVien(mangHocVien); // (2) [{…}, {…}]
// xuLyMangHocVien(hv,mangHocVien); // (3) [{…}, {…}, {…}]
// xuLyMangHocVien(hv,mangHocVien,'Update'); // (3) [{…}, {…}, {…}]

// let mangSoNguyen = [1, 3, 2, 5, 7];
// let mangmoi = [...mangSoNguyen, 10, 11, ...mangSoNguyen];
// console.log(mangmoi);

// let mangA = [1, 2, 3, 4];
// let mangB = mangA;
// mangB.push(5, 6);
// mangA.push(7,8);
// console.log(mangB); // mình nghĩ : 1, 2, 3, 4 => sai!!!!

/*khi mà gán 1 mangB = mangA thì theo tính chất của con trỏ trong
 lập trình thì vùng nhớ của mảng A sẽ được trỏ cho mảng B. khi 
 Mảng B thay đổi thì Mảng A cũng thay đổi và tương tự ngược lại 
 với khi thay đổi mảng A.
*/

// let mangA = [1, 2, 3, 4];
// let mangB = [...mangA];
// mangB.push(5, 6);
// mangA.push(7,8);
// console.log(mangB);
// console.log(mangA);
/* kq: (6) [1, 2, 3, 4, 5, 6]
       (6) [1, 2, 3, 4, 7, 8]
*/
/*
  cú pháp [...mangA] tạo ra 1 mảng mới sẽ ôn hết giá trị mangA 
  bỏ vào [] nên khi ta thay đổi mangB mangA ko bị ảnh hưởng
 */

//  let hs1={
//     maHS:1, tenHS:'Nguyen Ngoc A',
//  }
//  let hs2=hs1;
//  hs2.tenHS='Nguyễn Ngọc Kha';
//  console.log(hs1);
//  kq : {maHS: 1, tenHS: "Nguyễn Ngọc Kha"}

// let hs1={
//     maHS:1, tenHS:'Nguyen Ngoc A',
//  }
//  let hs2={...hs1};
//  hs2.tenHS='Nguyễn Ngọc Kha';
//  console.log(hs1);
//  kq: {maHS: 1, tenHS: "Nguyen Ngoc A"}

// function tinhTong(a = 5, b = 10, c = a + b) {
//     console.log(a + b + c);
//     return a + b;

// }
// tinhTong(); //nếu không truyền tham số gì thì nó sẽ lấy tham số mặc định của hàm
// // kq : 15
// tinhTong(10); //thì nó sẽ lấy tham số này thay vào giá trị đầu tiên và cộng tiếp cho tham số thứ 2
// // kq : 20
// tinhTong(2, 2);//thì nó sẽ lấy tham số 3 mặc định
// // kq : 8
// tinhTong(2,2,2);
// // kq : 6 


// let arrName = ['Khai', 'Hùng', 'Tiên', 'Mỹ', 'Mọi'];

// for(let index in arrName){
//     console.log( 'index: '+index+' name: '+arrName[index]);
// }
/* kq:
index: 0 name: Khai
index: 1 name: Hùng
...
*/
/*
for in sẽ lấy về vị trí của phần tử đó
*/
// let arrName=[{name:'Tùng',age:20},{name:'Nhủ',age:21},
//             {name:'Đại',age:22},{name:'Hoa',age:19}]
// for (let item of arrName) {
//     console.log(item);
// }
/* kq:
   {name: "Tùng", age: 20}
   {name: "Nhủ", age: 21}
   ....
*/
/*
for of sẽ lấy về 1 đối tưởng của phần tử đó
*/