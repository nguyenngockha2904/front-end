/**
 * Project : website thi trắc nghiệm
 * -feature : 
 *      - get list question from back-end
 *      -show list question out minitor
 *      -calculate grade
 *      object: 
 *          Question={
 *          id ,
 *          content,
 *          answers:[
 *              {}
 * ]
 *  }
 *  
 *  
 */

const listQuestion = [];

const fetchQuestions = () => {
    axios({
        url: '../DeThiTracNghiem.json',
        method: 'GET'
    }).then((res) => {
        console.log(res);
        mapData(res.data);
        renderQuestion();
    }).catch((err) => {
        console.log(err);
    });
}
fetchQuestions();
// đã có dữ liệu
console.log(listQuestion);
const renderQuestion = () => {
    let htmlContent = '';
    for (let index in listQuestion) {
        htmlContent += listQuestion[index].render(+index + 1);
    }
    document.getElementById('groupQuestion').innerHTML = htmlContent;

}
/**
 * @param {Array} data
 * @return {Array} questionList
 */

const mapData = (data) => {
    // for (let item of data) {
    //     let newQuestion;
    //     if (item.questionType === 1) {
    //         newQuestion =
    //             new multipleChoice(
    //                 item.questionType,
    //                 item._id,
    //                 item.content,
    //                 item.answers);
    //     } else {
    //         newQuestion =
    //             new FillinBlank(
    //                 item.questionType,
    //                 item._id,
    //                 item.content,
    //                 item.answers);
    //     }
    //     listQuestion.push(newQuestion);
    // }
    // es6
    listQuestion = data.map((item) => {
        const { questionType, _id, content, answers } = item;
        if (questionType === 1) {
            return new multipleChoice(questionType, _id, content, answers);
        }
        return new FillinBlank(questionType, _id, content, answers);
    });
    console.log(listQuestion);
}
const submit = () => {
    let result = 0;
    for (let q of listQuestion) {
        if (q.checkExact()) result++;
    }
    console.log(`result ${result}/${listQuestion.length}`);
}
document.getElementById('btn-submit').addEventListener('click', submit);



// 9 ----------------OBjectq literal------------------
// // ---------------------object chân phương-----------
// let student = { name: 'kha', age: 12 }
// let keyName = 'name';
// let keyAge = 'age';

// let student2 = { [keyName]: 'hùng', [keyAge]: 12 };
// console.log(student2);
// // kq :{name: "hùng", age: 12}


// 10--------------------high order function es6------------

// // đếm số lần xuất hiện
let arr = [1, 2, 2, 4, 5, 6];
let obj = {};
for (let item of arr) {
    if (item in obj) {
        obj[item] = obj[item] + 1;
    } else {
        obj[item] = 1;
    }
}
console.log(Object.keys(obj).map(item =>+item));
console.log(_.uniq(arr));