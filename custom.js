let calculator = document.querySelector(".calculator");
let circle = document.querySelector(".circle");

circle.onclick = function () {
  calculator.classList.toggle("dark");
};
////////////////////////////////////////
function ipToInt32(s, d) {
  let sss = s;
  let arr = [];
  for (let i = 0; i < Math.ceil(s / 2); i++) {
    if (sss === 1) {
      arr.push(sss);
    } else {
      arr.push(Math.pow(sss, d) - Math.pow(sss - 2, d));
      sss -= 2;
    }
  }
  return arr;
}
console.log(ipToInt32(3, 1));

// if (str[i] === str[i].toUpperCase()) {
//   if (i === 0) {
//     arr.push(str[0].toLowerCase());
//   } else {
//     arr.push(s.toLowerCase());
//     s = str[i];
//   }
// } else if (i === str.length - 1) {
//   s += str[i];
//   arr.push(s.toLowerCase());
// } else {
//   s += str[i];
// }
