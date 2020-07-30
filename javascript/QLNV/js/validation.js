const Validation = function () {
    this.checkEmpty = function (input, mess, spanId) {
        if (input.trim() === "") {
            swal("Lỗi", mess, "warning");
            getID(spanId).innerHTML = mess;
            getID(spanId).style.display = 'block';
            return false;
        } else {
            getID(spanId).innerHTML = "";
            getID(spanId).style.display = 'none';
            return true;
        }
    }
    this.checkLength = function (input, mess, spanId, minlength, maxlength) {
        if (input.length > minlength && input.length < maxlength) {

            getID(spanId).innerHTML = "";
            getID(spanId).style.display = 'none';
            return true;
        } else {
            swal("Lỗi", mess, "warning");
            getID(spanId).innerHTML = mess;
            getID(spanId).style.display = 'block';
            return false;
        }
    }
    this.checkNumber = function (input, mess, spanId) {
        var number = /^[0-9]+$/;
        if (input.match(number)) {
            getID(spanId).innerHTML = "";
            getID(spanId).style.display = 'none';
            return true;
        } else {
            swal("Lỗi", mess, "warning");
            getID(spanId).innerHTML = mess;
            getID(spanId).style.display = 'block';
            return false;
        }
    }
    this.checkPosition = function (input, mess, spanId) {
        if (input.selectedIndex !== 0) {
            getID(spanId).innerHTML = "";
            getID(spanId).style.display = 'none';
            return true;
        } else {
            swal("Lỗi", mess, "warning");
            getID(spanId).innerHTML = mess;
            getID(spanId).style.display = 'block';
            return false;
        }
    }
    // this.checkTrung=function(input,mess,spanId,arrEmp){
    //     arrEmp.forEach(function(item,index){
    //         if(item.id===input){

    //         }
    //     });
    // }
}