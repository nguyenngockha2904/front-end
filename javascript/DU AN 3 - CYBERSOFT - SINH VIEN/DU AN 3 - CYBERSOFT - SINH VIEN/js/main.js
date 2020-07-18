/**
 * bài tập : Quản lý sinh viên
 * chức năng :
 *      1. Lấy danh sách điểm từ giao diện bỏ vào mảng điểm.
 *      2. Tính điểm trung bình của toàn bộ sinh viên.
 *      3. Kiểm tra có bao nhiêu sinh viên dưới 5 điểm trong danh sách
 *      4. Tìm điểm tb cao nhất và cao nhì.
 *      5. Sắp xếp danh sách điểm tăng dần.
*/


// function 1 lấy danh sách điểm từ giao diện
const gradeList = [];
function getGradeFromUI() {
    let td_grade = document.getElementsByClassName('td_grade');
    // console.log(td_grade[0].innerHTML);
    for (let i = 0; i < td_grade.length; i++) {
        gradeList.push(+td_grade[i].innerHTML);
    }
}
getGradeFromUI();
// console.log(gradeList);
// function 2 Tính điểm trung bình của toàn bộ sinh viên
function CalAverage() {
    let sum = 0;
    for (let i = 0; i < gradeList.length; i++) sum += gradeList[i];

    return sum / gradeList.length;
}
let average = CalAverage();
console.log(average);
console.log(Math.floor(average)); //làm tròn xuống
console.log(Math.ceil(average)); //làm tròn lên
console.log(Math.round(average));
console.log(average.toFixed(2));
// đếm sv dưới 5 điểm
function countWeakStudent() {
    let count = 0;
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] < 5) {
            count++;
        }
    }
    return count;
}
console.log("Weak student :" + countWeakStudent() + " person");

// Tìm điểm tb cao nhất và cao nhì.
function findMaxAndSecond() {
    let max = gradeList[0];
    let second = 0;
    for (let i = 1; i < gradeList.length; i++) {
        if (gradeList[i] > max) { //nếu nó lớn hơn max thì max hiện tại gán cho second và gáng nó cho max
            second = max;
            max = gradeList[i];
        } else if (gradeList[i] > second && gradeList[i] !== max) { //nếu nó lớn hơn second và ko bằng max hiện tại thì sẽ gán nó = second
            second = gradeList[i];
        }
    }
    return [max, second];
}
console.log('1st grade: ' + findMaxAndSecond()[0]);
console.log('2nd grade: ' + findMaxAndSecond()[1]);
// console.log('1st grade: '+searchAverageFrist());
// function searchAverageSecond() {
//     let second=gradeList[0];
//     let max=searchAverageFrist();
//     for(let i=1; i<gradeList.length; i++){
//         if(gradeList[i]>second && gradeList[i]<max){
//             second = gradeList[i];
//         }
//     }
//     return second;
// }
// console.log('2nd grade: '+searchAverageSecond());
// sắp xếp danh sách tăng dần

console.log(gradeList);
// // interchange sort
// function ArrageList() {
//     for (let i = 0; i < gradeList.length; i++) {
//         for (let j = i+1; j < gradeList.length; j++) {
//             if (gradeList[i] > gradeList[j]) {
//                 let temp = gradeList[i];
//                 gradeList[i] = gradeList[j];
//                 gradeList[j] = temp;
//             }
//         }
//     }
// }
// // bubble sort
function ArrageList() {
    noSwap=true;
    for (let i = gradeList.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (gradeList[j] > gradeList[j + 1]) {
                let temp = gradeList[j];
                gradeList[j] = gradeList[j + 1];
                gradeList[j + 1] = temp;
                noSwap=false;
            }
            console.log('j:' + j, gradeList, gradeList[j], gradeList[j + 1]);
        }
        console.log('---------------------');
        if(noSwap){
            break;
        }
    }
}
console.log('interchange sort : ' + gradeList);