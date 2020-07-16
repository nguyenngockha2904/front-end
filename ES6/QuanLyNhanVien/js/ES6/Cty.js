class Cty {
    constructor() {
        this.listNhanVien = new Array();
    }
    //phương thức theo một nhân viên mới vào listNhanVien
    ThemNhanVien(nhanVienMoi) {
        // this.listNhanVien.push(nhanVienMoi); ES5
        this.listNhanVien = [...this.listNhanVien, nhanVienMoi]; //ES6
    }
    //phương thức tìm nhân viên và trả về vị trí trong listNhanVien
    TimViTriNhanVien(maNv) {
        // ES6
        // for(let index in this.listNhanVien){
        //     if(this.listNhanVien[index].maNv===maNv){
        //         return index;
        //     }
        // }
        return this.listNhanVien.findIndex(nv => nv.maNv === maNv);

    }
    //tìm nhân viên theo mã trả về Nhân viên
    TimNhanVien(maNv) {
        // ES6
        // for(let nv of this.listNhanVien){
        //     if(nv.maNv=== maNv){
        //         return nv;
        //         break;
        //     }
        // }
        return this.listNhanVien.find(nv => nv.maNv === maNv);
    }
    //phương thức xóa nhân viên trong listNhanVien
    XoaNhanVien(Nv) {
        let index = this.TimViTriNhanVien(Nv.maNv);
        this.listNhanVien.splice(index, 1);
    }
    //phương thức sửa thông tin nhân viên
    SuaThongtinNhanVien(nhanVienCanSua) {
        let index = this.TimViTriNhanVien(nhanVienCanSua.maNv);
        this.listNhanVien[index] = nhanVienCanSua;

    }
    // tìm nhân viên theo tên  --> trả về danh sách nhan vien 
    TimNhanVienTheoTen(hoten) {
        let listKetQua = new Cty();
        hoten = hoten.trim().toUpperCase();
        for (let nv of this.listNhanVien) {
            let hotenNhanVien = nv.hoTen.trim().toUpperCase();
            if (hotenNhanVien.search(hoten) !== -1) {
                listKetQua.listNhanVien = [...listKetQua.listNhanVien, nv];
            }
        }
        return listKetQua;
    }
    // sắp xếp nhân viên theo mã nhân viên : tăng dần + giảm dần
    SapXepNhanVien(type){
        console.log(type);
        switch(type){
            case 1: {  //tăng dần
                this.listNhanVien.sort((nvsau,nvtruoc) => {
                    let x=nvsau.maNv.toLowerCase();
                    let y=nvtruoc.maNv.toLowerCase();     
                    if(x<y) return -1;
                    if(x>y) return 1;
                    return 0;
                })

                break;
            }
            case 2: { //giảm dần
                this.listNhanVien.sort((nvsau,nvtruoc) => {
                    let x=nvsau.maNv.toLowerCase();
                    let y=nvtruoc.maNv.toLowerCase();     
                    if(x>y) return -1;
                    if(x<y) return 1;
                    return 0;
                })
                break;
            }

        }
    }
}