/*
    author: Nguyễn Ngọc Kha
    Date: 11-7-2020
    version:1.0
*/

function calcAverage(math, physics, chemistry) {
  let average = (math + physics + chemistry) / 3;
  return average;
}
function classifyStudent(average) {
  if (average < 5) {
    return "yếu";
  } else if (average >= 5 && average < 6.5) {
    return "TB";
  } else if (average >= 6.5 && average < 8) {
    return "Khá";
  } else if (average >= 8 && average < 10) {
    return "Giỏi";
  } else {
    return "none";
  }
}

function onCal() {
  var math = document.getElementById("math").value;
  var physics = document.getElementById("physics").value;
  var chemistry = document.getElementById("chemistry").value;

  // chuyển từ chuỗi sang số
  //  c1

  //   math = parseFloat(math);
  //   physics = parseFloat(physics);
  //   chemistry = parseFloat(chemistry);

  //   c2
  //   math = math * 1;
  //   physics = physics * 1;
  //   chemistry = chemistry * 1;

  // c3
  math = +math;
  physics = +physics;
  chemistry = +chemistry;

  var average = calcAverage(math, physics, chemistry);
  console.log(average, math, physics, chemistry);
  var xl = classifyStudent(average);
  alert(xl);
}
