var array=[1,2,'3',true,false,undefined];
// thêm vào cuối mảng
    // array.push(5);
// them vào đầu mảng
    // array.unshift(0);    
//xóa phần tử cuối cùng trong mảng
    // array.pop();
//xóa phần tử đầu trong mảng
    // array.shift();
//xóa vị trí bất kì tham số 1 vị trí bắt đầu xóa , tham số 2 số lượng phần tử muốn xóa 
    // array.splice(0,1);
    // console.log(array);


// vòng lập

// kiểm tra số nguyên tố 
function checkPrime(number){
    if(number===0 || number===1){
        return 0;    
    }
    for(var i = 2 ; i<=number/2;i++) {if(number%i===0)return 0;}
    return 1;
}
// console.log(checkPrime(2)+' 2');
// check Odd

function checkOdd(odd){
    var count=0;
    for(var i=0;i<odd.length;i++){
        if(odd[i]%2!==0){
            count++;
            document.writeln(odd[i]);
        }
    }
    if(count===0){
        document.writeln('Không có');
    }
}
checkOdd([3,2,6,8,6,5,11]);