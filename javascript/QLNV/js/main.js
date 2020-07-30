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
const validation = new Validation();
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
function getID(id) {
	return document.getElementById(id);
}
const addEmpl = function () {
	const lastName = document.getElementById('ho').value;
	const fristName = document.getElementById('ten').value;
	const maNV = document.getElementById('msnv').value;
	const startedDate = document.getElementById('datepicker').value;
	const position = document.getElementById('chucvu');

	// 1.1 kiểm tra id có tồn tại trong danh sách chưa
	//  có rồi =>alert()
	// chua => push
	// 1.2 Thêm nhân viên mới vào hệ thống.
	// tạo đối tượng nhân viên
	let valLastName = validation.checkEmpty(lastName, 'họ không được rỗng', 'sp-ho') && validation.checkLength(lastName, 'độ dài ký tự từ 4-10', 'sp-ho', 3, 11);
	let valTen = validation.checkEmpty(fristName, 'Tên không được rỗng', 'sp-ten') && validation.checkLength(fristName, 'độ dài ký tự từ 1-10', 'sp-ten', 1, 11);
	let valIsValid = validation.checkEmpty(maNV, 'Mã Nhân viên không được rỗng', 'sp-manv') && validation.checkLength(maNV, 'độ dài ký tự từ 1-10', 'sp-manv', 1, 10) && validation.checkNumber(maNV, 'Mã nhân viên là số!', 'sp-manv');
	let valPosition = validation.checkPosition(position, 'vui lòng chọn vị trí', 'sp-chucvu');
	const index = findIdEmpl(maNV);
	if (valLastName && valTen && valIsValid && valPosition) {
		if (index === -1) {
			const empl = new Employee(maNV, lastName, fristName, position.value, startedDate);
			//push đối tượng vào mảng
			listEmployee.push(empl);
			getID('sp-manv').innerHTML = "";
			getID('sp-manv').style.display = "none";
			removeSpace();
			renderEmpl();
			setLocalStorage();
			swal("SuccessFul!", "this employee added to list employee", "success");
		} else {
			swal("đã tồn tại Nhân viên này!", "Vui lòng nhập lại", "warning");
			getID('sp-manv').innerHTML = "đã tồn tại Nhân viên này";
			getID('sp-manv').style.display = "block";
		}
	}
}


const deleteEmpl=function(id){
	const index = findIdEmpl(id);
	listEmployee.splice(+index,1);
	renderEmpl();
	setLocalStorage();
	
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
		<td>
			<button class="btn btn-info">Edit</button>
			<button class="btn btn-danger" onclick="deleteEmpl(${listEmployee[i].maNV})">Delete</button>	
		</td>
	</tr>`;
	}
	// console.log(htmlContent);
	document.getElementById('tbodyEmployee').innerHTML = htmlContent;
}
getLocalStorage();
function setLocalStorage() {
	// 1 Tên của local storage
	// 2 đối tượng cần lưu .trước khi lưu phải chuyển thành kiểu dữ liệu json
	localStorage.setItem("listEmployee", JSON.stringify(listEmployee.arr));
}
function getLocalStorage() {
	if (localStorage.getItem("listEmployee")) {
		listEmployee.arr =JSON.parse(localStorage.getItem("listEmployee"));
		renderEmpl();
	}
}