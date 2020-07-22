// const cho1 = {
//     ten: 'Lu Lu',
//     canNang: 20,
//     chieuCao: 50,
//     gioiTinh: 'Đực',
//     chichNgua: false,
//     sua: function () {
//         return 'gau gau ang ang';
//     }
// }
// khởi tạo đối tượng chó (prototype Chó)
//đây là function constructor (hàm khởi tạo đối tượng chó trong ES5)
const Cho = function (ten,chieuCao,canNang) {
    this.ten = ten;
    this.chieuCao = chieuCao;
    this.canNang = canNang;
    this.sua = function () {
        return this.ten;
    }

}
// là 1 instance thể hiện của đối tượng chó
const cho1=new Cho('lulu',50,12);
const cho2=new Cho('memeo',69,16);
/*
const listCho = [
    {
        id: 1,
        ten: 'Lu Lu',
        canNang: 20,
        chieuCao: 50,
        gioiTinh: 'Đực',
        chichNgua: false,
        sua: function () {
            return this.ten + 'gau gau ang ang';
        }
    },
    {
        id: 2,
        ten: 'Ki Ki',
        canNang: 12,
        chieuCao: 30,
        gioiTinh: 'Cái',
        chichNgua: true,
        sua: function () {
            return 'mèo méo meo mèo meo';
        }
    },
]
*/
const listCho=[cho1,cho2];
const trungTamNuoiCho = {
    id: 1,
    ten: 'CatDog',
    diaChi: '12 nguyễn đình chiểu q1 tphm',
    giamDocs: [
        {
            id: 1,
            ten: 'Nguyễn Văn A',
            tuoi: 13,
        },
        {
            id: 2,
            ten: 'Nguyễn Văn B',
            tuoi: 14,
        },
    ],
    danhSachCho: listCho,
}

for (i = 0; i < trungTamNuoiCho.danhSachCho.length; i++) {
    console.log(trungTamNuoiCho.danhSachCho[i].ten);
}
//xóa propety
delete listCho[1].canNang;