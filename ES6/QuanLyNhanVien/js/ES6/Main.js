var nhanVienMoi = new NhanVien('abc', 'Nguyen van a', 'anguyen@email.com', '122133123', '10/10/2019', 'nhan Vien');
var nhanVienMoi1 = new NhanVien('cba', 'Nguyen van b', 'bnguyen@email.com', '123112323', '10/10/2019', 'nhan Vien');
var nhanVienMoi2 = new NhanVien('nv3', 'Nguyen van c', 'cnguyen@email.com', '123123455', '10/10/2019', 'nhan Vien');
var nhanVienMoi3 = new NhanVien('nv4', 'Nguyen van d', 'dnguyen@email.com', '123165263', '10/10/2019', 'nhan Vien');
var nhanVienMoi4 = new NhanVien('nv5', 'Nguyen van e', 'enguyen@email.com', '123156283', '10/10/2019', 'nhan Vien');
var nhanVienMoi5 = new NhanVien('nv6', 'Nguyen van f', 'fnguyen@email.com', '123126783', '10/10/2019', 'nhan Vien');
var congty = new Cty();
congty.ThemNhanVien(nhanVienMoi);
congty.ThemNhanVien(nhanVienMoi1);
congty.ThemNhanVien(nhanVienMoi2);
congty.ThemNhanVien(nhanVienMoi3);
congty.ThemNhanVien(nhanVienMoi4);
congty.ThemNhanVien(nhanVienMoi5);

congty.ThemNhanVien(nhanVienMoi1);
congty.ThemNhanVien(nhanVienMoi2);
congty.ThemNhanVien(nhanVienMoi3);
// let index= congty.TimViTriNhanVien('abcd');
// console.log(index);
// let nv= congty.TimNhanVien('abc');
// console.log(nv);
// congty.XoaNhanVien('nv6');
// var nhanvien=new NhanVien('nv1', 'Nguyen Thị A', 'anguyen@email.com', '122133123', '10/10/2019', 'nhan Vien');
// congty.SuaThongtinNhanVien(nhanvien);
// let listv= congty.TimNhanVienTheoTen('van f');
// console.log(listv);

// function gọi modal popup : thêm nhân viên hoặc sửa thông tin nhân viên 
xoaTrang = () => {
    // document.getElementById('msnv').innerHTML ="";
    // document.getElementById('name').innerHTML ="";
    // document.getElementById('email').innerHTML ="";
    // document.getElementById('password').innerHTML ="";
    // document.getElementById('datepicker').innerHTML =""; 
    let elements = document.getElementsByClassName('input-sm');
    for (let element of elements) {
        element.value = "";
    }
    document.getElementById('chucvu').selectedIndex = 0;

}
callModal = (modal_title, readonly = false, type = 1) => {
    // type === 1 thêm thông tin nhân viên
    // type === 2 sửa thông tin nhân viên
    document.getElementById('header-title').innerHTML = modal_title;
    document.getElementById('msnv').readOnly = readonly;

    switch (type) {
        case 1: {// thêm nhân viên
            xoaTrang();
            document.getElementById('btnThemNV').style.display = "block";
            document.getElementById('btnCapNhatNV').style.display = "none";
            break;
        }
        case 2: { // sửa thông tin nhân viên
            xoaTrang();
            document.getElementById('btnThemNV').style.display = "none";
            document.getElementById('btnCapNhatNV').style.display = "block";
            break;
        }
    }

}

let trangHienTai = 1;
hienThiDanhSach = (dsnv) => {
    let tbody = document.getElementById("tableDanhSach");
    tbody.innerHTML = "";

    let soNV = dsnv.length;
    let nv, tr, td;

    let ulPhanTrang = document.getElementById("ulPhanTrang");
    ulPhanTrang.innerHTML = "";
    let sDong = 2;
    let soTrang = Math.ceil(soNV / sDong); //math.ceil hàm cho phép làm tròn số 

    //phân trang
    for (let i = 1; i < soTrang; i++) {
        let li = document.createElement('li');
        ulPhanTrang.appendChild(li);
        let a = document.createElement('a');
        a.setAttribute('class', 'page-link');
        a.setAttribute('id', 'page_' + i);
        a.innerHTML = i;
        li.appendChild(a);

        //chức năng chuyển trang
        ChuyenTrang("page_" + i);

    }
    let batDau = (trangHienTai - 1) * sDong;
    let ketThuc = trangHienTai * sDong;
    if (soNV < ketThuc) {
        ketThuc = soNV;
    }
    for (let i = batDau; i < ketThuc; i++) {
        nv = dsnv[i];

        tr = document.createElement('tr');
        tbody.appendChild(tr);

        for (let j = 0; j < nv.mangDoiChieu.length; j++) {
            td = document.createElement('td');
            td.innerHTML = nv.mangDoiChieu[j];
            tr.appendChild(td);
        }
        // let btnSua = '<a class="btn btn-primary text-white" data-toggle="modal"  href="#myModal" id="btnSua_' + nv.maNv + '"><em class="fa fa-pencil"></em></a>';
        let btnSua = `<a class="btn btn-primary text-white" data-toggle="modal" style="padding: 0.275rem 8px;"  href="#myModal" id="btnSua_${nv.maNv}"><em class="fa fa-pencil"></em></a>`;
        let btnXoa = `<a class="btn btn-danger text-white ml-2 " style="padding: 0.275rem 8px;" id="btnXoa_${nv.maNv}"><em class="fa fa-trash"></em></a>`;
        td = document.createElement('td');
        td.innerHTML = btnSua + btnXoa;
        td.setAttribute("align", "center");
        tr.appendChild(td);
        //tạo sự kiện sửa xóa
        SuaNhanVien("btnSua_" + nv.maNv);
        XoaNhanVien("btnXoa_" + nv.maNv);

    }
}

document.getElementById('btnThem').addEventListener('click', () => {
    callModal('Thêm Nhân Viên');
})
document.getElementById('btnThemNV').addEventListener('click', () => {
    // validation

    let msNV = document.getElementById('msnv').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let date = document.getElementById('datepicker').value;
    let chucvu = document.getElementById('chucvu').value;
    let nvmoi = new NhanVien(msNV, name, email, pass, date, chucvu);
    congty.ThemNhanVien(nvmoi);
    swal("Thành Công!", 'Danh sách nhân viên đã dc cập nhật', "success");
    hienThiDanhSach(congty.listNhanVien);
})

document.getElementById('btnCapNhatNV').addEventListener('click', () => {
    let maNv = document.getElementById('msnv').value;
    let hoTen = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let matKhau = document.getElementById('password').value;
    let ngayLamViec = document.getElementById('datepicker').value;
    let chucVu = document.getElementById('chucvu').value;
    let nvmoi = new NhanVien(maNv, hoTen, email, matKhau, ngayLamViec, chucVu);
    congty.SuaThongtinNhanVien(nvmoi);
    swal("Thành Công!", 'Danh sách nhân viên đã dc cập nhật', "success");
    hienThiDanhSach(congty.listNhanVien);
})
SuaNhanVien = (idbutton) => {

    document.getElementById(idbutton).addEventListener('click', () => {
        callModal('Cập nhật Thông Tin', true, 2);
        let id = idbutton;
        let mangtam = id.split("_");
        let maNV = mangtam[1];
        let nv = congty.TimNhanVien(maNV);
        document.getElementById('msnv').value = maNV;
        document.getElementById('name').value = nv.hoTen;
        document.getElementById('email').value = nv.email;
        document.getElementById('password').value = nv.matKhau;
        document.getElementById('datepicker').value = nv.ngayLamViec;
        document.getElementById('chucvu').selectedIndex = nv.chucVu;
    })
}
XoaNhanVien = (idbutton) => {

    document.getElementById(idbutton).addEventListener('click', () => {
        console.log(idbutton);
        let id = idbutton;
        let mangtam = id.split("_");
        let maNV = mangtam[1];
        let nv = congty.TimNhanVien(maNV);
        swal({
            title: "Bạn chắc xóa nhân viên này?",
            text: "Sau khi xóa xong nhân viên này sẽ ko thể tìm kiếm trong danh sách",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    congty.XoaNhanVien(nv);
                    hienThiDanhSach(congty.listNhanVien);
                    swal("OK! bạn đã xóa thành công nhân viên này!", {
                        icon: "success",
                    });
                } else {
                    swal("Danh sách vẫn như cũ!");
                }
            });
    })
}

document.getElementById("searchName").addEventListener('keyup', () => {
    let tukhoa = document.getElementById("searchName").value;
    let listKQ = congty.TimNhanVienTheoTen(tukhoa);
    hienThiDanhSach(listKQ.listNhanVien);
})
// sắp xếp NV
document.getElementById("SapXepTang").addEventListener('click', () => {
    document.getElementById("SapXepTang").style.display = "none";
    document.getElementById("SapXepGiam").style.display = "inline";
    congty.SapXepNhanVien(1);
    hienThiDanhSach(congty.listNhanVien);
})
document.getElementById("SapXepGiam").addEventListener('click', () => {
    document.getElementById("SapXepTang").style.display = "inline";
    document.getElementById("SapXepGiam").style.display = "none";
    congty.SapXepNhanVien(2);
    hienThiDanhSach(congty.listNhanVien);
})
// thực hiện chức năng chuyển trang 
ChuyenTrang = (idButton) => {
    document.getElementById(idButton).addEventListener('click', () => {
        let id=idButton;
        let mangTam=id.split("_");
        trangHienTai=mangTam[1];
        
    hienThiDanhSach(congty.listNhanVien);
    })
}


hienThiDanhSach(congty.listNhanVien);