var array = [1, 2, '3', true, false, undefined];
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
function checkPrime(number) {
    if (number === 0 || number === 1) {
        return 0;
    }
    for (var i = 2; i <= number / 2; i++) { if (number % i === 0) return 0; }
    return 1;
}
// console.log(checkPrime(2)+' 2');
// check Odd

function checkOdd(odd) {
    var count = 0;
    for (var i = 0; i < odd.length; i++) {
        if (odd[i] % 2 !== 0) {
            count++;
            document.writeln(odd[i]);
        }
    }
    if (count === 0) {
        document.writeln('Không có');
    }
}
// function 3 cho một mảng bất kì, kiểm tra xem trong mảng có 2 số bất kì cộng lại =0
// function checkSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// let C = checkSum([5, 3, 8, 2, 9, -2, 10, -3, -5]);
// console.log(C);

// function 4: cho một mảng dc sắp xếp sẵn, kiểm tra xem trong mảng có 2 số bất kì cộng lại =0

function checkSum(arr) {
    let i = 0;
    let k = arr.length - 1;
    while (i !== k) {
        let c = arr[i] + arr[k];
        if (c === 0) {
            return true;
        }
        if (c > 0) {
            k--;
        } else if (c < 0) {
            i++;
        }
        return false;
    }

}
let C = checkSum([-3, -2, -1, 0, 1, 5]);
console.log(C);

//         i :là điểm đầu mảng          k :là điểm cuối mảng
// dùng multiple point so sánh (i+k) ? 0 
// th1 : ===0 =>return true;
// th2 : >0 => giảm k 
// th3 : <0 => tăng i 
// điều kiện dừng i === k