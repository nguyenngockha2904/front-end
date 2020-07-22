/**
 * Bài tập: quản lý nhân viên
 * chức năng:
 * 	1. Thêm nhân viên mới vào hệ thống.
 * 	2. Hiển thị danh sách toàn bộ nhân viên.
 *  3. Xóa nhân viên.
 * 	4. Cập nhật thông tin nhân viên.
 * 	5. Tìm kiếm nhân viên thông qua id và tên.
 * 	6. validate dữ liệu
 */
const listEmployee = [];

// Helper function
// hàm tìm vị trí
const findIdEmpl = function (id) {
	for (var i = 0; i < listEmployee.length; i++) {
		if (listEmployee[i].maNV === id) {
			return i;
		}
	}
	return -1;
}
// hàm xóa trắng
const removeSpace = function () {
	document.getElementById('ho').value = "";
	document.getElementById('ten').value = "";
	document.getElementById('msnv').value = "";
	document.getElementById('datepicker').value = "";
	document.getElementById('chucvu').selectedIndex = 0;
}
// main function
const addEmpl = function () {
	const lastName = document.getElementById('ho').value;
	const fristName = document.getElementById('ten').value;
	const maNV = document.getElementById('msnv').value;
	const startedDate = document.getElementById('datepicker').value;
	const position = document.getElementById('chucvu').value;

	// 1.1 kiểm tra id có tồn tại trong danh sách chưa
	//  có rồi =>alert()
	// chua => push
	// 1.2 Thêm nhân viên mới vào hệ thống.
	// tạo đối tượng nhân viên
	const index = findIdEmpl(maNV);
	if (index === -1) {
		const empl = new Employee(maNV, lastName, fristName, position, startedDate);
		//push đối tượng vào mảng
		listEmployee.push(empl);
		removeSpace();
		renderEmpl();
		swal("SuccessFul!", "this employee added to list employee", "success");
	} else {
		swal("đã tồn tại!", "Vui lòng nhập lại", "warning");
	}


}
const renderEmpl = function () {
	var htmlContent = '';
	for (var i = 0; i < listEmployee.length; i++) {
		htmlContent += `<tr>
		<td>${i + 1}</td>
		<td>${listEmployee[i].maNV}</td>
		<td>${listEmployee[i].lastName}</td>
		<td>${listEmployee[i].fristName}</td>
		<td>${listEmployee[i].startedDate}</td>
		<td>${listEmployee[i].position}</td>
	</tr>`;
	}
	console.log(htmlContent);
	document.getElementById('tbodyEmployee').innerHTML=htmlContent;
}