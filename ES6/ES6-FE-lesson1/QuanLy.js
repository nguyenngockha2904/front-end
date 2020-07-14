import NhanVien from './NhanVien.js';
class QuanLy extends NhanVien{
    dsPB=[];
    constructor(maNV,tenNV,dspb){
       super(maNV,tenNV);
       this.dsPB=dspb;
    }
    tinhLuong(){
       return super.tinhLuong()+1000;
    }
 }
 export default QuanLy;