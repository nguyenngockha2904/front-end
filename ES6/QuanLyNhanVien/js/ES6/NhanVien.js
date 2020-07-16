/*
 lớp đối tượng Nhân viên (NhanVien)
 người tạo : Nguyễn Ngọc Kha
 Ngày tạo : 15/7/2020
*/

class NhanVien {
    constructor(maNv, hoTen, email, matKhau, ngayLamViec, chucVu) {
        this.maNv = maNv;
        this.hoTen = hoTen;
        this.email = email;
        this.matKhau = matKhau;
        this.ngayLamViec = ngayLamViec;
        this.chucVu = chucVu;

        this.mangDoiChieu = [this.maNv, this.hoTen, this.email, this.ngayLamViec, this.chucVu];
    }
}
