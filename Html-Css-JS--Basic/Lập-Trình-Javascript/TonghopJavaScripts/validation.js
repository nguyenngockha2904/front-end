function kiemtranhap(){
	//var inputName= document.forms["form1"]["username"];
	var inputName=document.form1.username;
	var getName= inputName.value;
	var theP=document.getElementById("thongbao");
	if(getName ==""){
		//alert("vui lòng nhập tên");
		theP.style.display="block";
		theP.innerHTML= "vui lòng không rỗng";
		theP.style.color="red";
		return false; // dừng form lại ko chuyển đến trangchu.php khi mình click submit
	}else{
		//alert("cảm ơn đã nhập ");
		the.style.display="none";
		return true; 
		
	}
 }
 function kiemtrakytunhap(idtag){
	var input=document.getElementById(idtag);
	var letters=/^[A-Za-z]+$/;
	
	var theP=document.getElementById("thongbao");
	
	if(input.value.match(letters)){
		theP.style.display="none";
		return true;
	}else{
		theP.style.display="block";
		theP.innerHTML="vui lòng nhập chữ";
		theP.style.color="red";
		return false;
	}
	
 }
 function kiemtraso(idtag){
	var input =document.getElementById(idtag);
	var number= /^[0-9]+$/
	var theP=document.getElementById("thongbao");
	
	if(input.value.match(letters)){
		theP.style.display="none";
		return true;
	}else{
		theP.style.display="block";
		theP.innerHTML="vui lòng nhập số";
		theP.style.color="red";
		return false;
	}
 }
function kiemtraEmail(idtag){
var input =document.getElementById(idtag);
	var email= /^[\w\.]+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
	var theP=document.getElementById("thongbao");
	
	if(input.value.match(email)){
		theP.style.display="none";
		return true;
	}else{
		theP.style.display="block";
		theP.innerHTML="email phải là ###@gamil.com";
		theP.style.color="red";
		return false;
	}
}
function kiemtraMinMaxString(idText,minLength,maxlength){
	var input=document.getElementById(idText);
	var field=input.value;
	var theP=document.getElementById("thongbao");
	if(field.length<minLength || field.length> maxlength){
		//alert("vui lòng nhập tên");
		theP.style.display="block";
		theP.innerHTML= "hãy nhập vào giá trị từ "+minLength+" đến "+maxlength;
		theP.style.color="red";
		return false;
		
	}else{
		theP.style.display="none";
		return true;
	}
			
}
//sự kiện khi nhấp tab đăng ký
function onDangKy(){
	var divDangKy= document.getElementById("tabDangKy");
	var divDangNhap=document.getElementById("tabDangNhap");
	
	divDangKy.style.display="block";
	divDangNhap.style.display="none";
	
}
//sự kiện khi nhấp tab đăng Nhập
function onDangNhap(){
	var divDangKy= document.getElementById("tabDangKy");
	var divDangNhap=document.getElementById("tabDangNhap");
	
	divDangKy.style.display="none";
	divDangNhap.style.display="block";
	
}
function kiemTraBatBuocDangKy(){
	
	var tagP=document.getElementById("thongbao");
	
	if(formDangKy.txtTenDN.value == ""|| formDangKy.txtMatKhau.value=="" ||
	formDangKy.txtEmail.value==""||formDangKy.dropJob.value=="Vui lòng chọn"||
	 formDangKy.txtTuoi.value==""){
		 tagP.style.color="red";
		tagP.innerHTML="vui lòng đầy đủ thông tin";
		tagP.style.display="block";
		formDangKy.txtTenDN.style.border="solid 1.5px red";
		formDangKy.txtMatKhau.style.border="solid 1.5px red";
		formDangKy.txtEmail.style.border="solid 1.5px red";
		formDangKy.dropJob.style.border="solid 1.5px red";
		formDangKy.txtTuoi.style.border="solid 1.5px red";
		return false;
		
	}else if(formDangKy.txtTenDN.value == ""){
		////validation Tên Đăng nhập
		tagP.style.color="red";
		tagP.innerHTML="vui lòng nhập Tên Đăng nhập";
		tagP.style.display="block";
		formDangKy.txtTenDN.style.border="none";
		formDangKy.txtMatKhau.style.border="none";
		formDangKy.txtEmail.style.border="none";
		formDangKy.dropJob.style.border="none";
		formDangKy.txtTuoi.style.border="none";
		formDangKy.txtTenDN.style.border="solid 1.5px red";
		return false;
	}else if(formDangKy.txtMatKhau.value==""){
		/////validation mật khẩu
		tagP.style.color="red";
		tagP.innerHTML="vui lòng nhập Mật khẩu";
		tagP.style.display="block";
		formDangKy.txtTenDN.style.border="none";
		formDangKy.txtMatKhau.style.border="none";
		formDangKy.txtEmail.style.border="none";
		formDangKy.dropJob.style.border="none";
		formDangKy.txtTuoi.style.border="none";
		formDangKy.txtMatKhau.style.border="solid 1.5px red";
		return false;
	}else if(formDangKy.txtEmail.value==""){
		/////validation email
		tagP.style.color="red";
		tagP.innerHTML="vui lòng nhập email";
		tagP.style.display="block";
		formDangKy.txtTenDN.style.border="none";
		formDangKy.txtMatKhau.style.border="none";
		formDangKy.txtEmail.style.border="none";
		formDangKy.dropJob.style.border="none";
		formDangKy.txtTuoi.style.border="none";
		formDangKy.txtEmail.style.border="solid 1.5px red";
		return false;
	}else if(formDangKy.dropJob.value=="Vui lòng chọn"){
		/////validation Nghề nghiệp
		tagP.style.color="red";
		tagP.innerHTML="vui lòng chọn nghề nghiệp";
		tagP.style.display="block";
		formDangKy.txtTenDN.style.border="none";
		formDangKy.txtMatKhau.style.border="none";
		formDangKy.txtEmail.style.border="none";
		formDangKy.dropJob.style.border="none";
		formDangKy.txtTuoi.style.border="none";
		formDangKy.dropJob.style.border="solid 1.5px red";
		return false;
	}else if( formDangKy.txtTuoi.value==""){
		//validation nhập số tuổi
		tagP.style.color="red";
		tagP.innerHTML="vui lòng nhập tuổi";
		tagP.style.display="block";
		formDangKy.txtTenDN.style.border="none";
		formDangKy.txtMatKhau.style.border="none";
		formDangKy.txtEmail.style.border="none";
		formDangKy.dropJob.style.border="none";
		formDangKy.txtTuoi.style.border="solid 1.5px red";
		return false;
	}else{
		formDangKy.txtTenDN.style.border="none";
		formDangKy.txtMatKhau.style.border="none";
		formDangKy.txtEmail.style.border="none";
		formDangKy.dropJob.style.border="none";
		formDangKy.txtTuoi.style.border="none";
		tagP.style.display="none";
		return true;
	}
}
function kiemtraEmail(){
	var tagP=document.getElementById("thongbao");
	var email= /^[\w\.]+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
	if(!formDangKy.txtEmail.match(email)){
		tagP.style.color="red";
		tagP.innerHTML="vui lòng nhập email đúng format ####@abc.com";
		tagP.style.display="block";
		formDangKy.txtEmail.style.border="solid 1.5px red";
		return false;
	}else{
		tagP.style.display="none";
		formDangKy.txtEmail.style.border="none";
		return true;
	}
}
function kiemtratuoi(){
	var tagP=document.getElementById("thongbao");
	var number= /^[0-9]+$/;
	if(!formDangKy.txtTuoi.match(number)){
		tagP.style.color="red";
		tagP.innerHTML="tuổi phải là số";
		tagP.style.display="block";
		formDangKy.txtTuoi.style.border="solid 1.5px red";
		return false;
	}else{
		tagP.style.display="none";
		formDangKy.txtTuoi.style.border="none";
		return true;
	}
}
function kiemtraMinMax(idText,minLength,maxlength,chuoithongbao){
	var input=document.getElementById(idText);
	var field=input.value;
	var tagP=document.getElementById("thongbao");
	if(field.length<minLength || field.length> maxlength){
		//alert("vui lòng nhập tên");
		tagP.style.display="block";
		tagP.innerHTML= "hãy nhập "+chuoithongbao+" từ "+minLength+" đến "+maxlength;
		tagP.style.color="red";
		return false;
		
	}else{
		tagP.style.display="none";
		return true;
	}
}

function kiemTraHopLe(){
	return kiemTraBatBuocDangKy() &&kiemtraMinMax("txtTenDN",8,30,"tên đăng nhập ")&&kiemtraEmail() &&kiemtratuoi();
}

