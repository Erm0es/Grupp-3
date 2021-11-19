let minNum = 0;
let maxNum = 10;

const giveStarAndGetNumbers = (event) => {
  let secondStar = document.getElementById("2");
  let inputNum = parseInt(event.target.id);
  if (
    event.target.id === "1" &&
    event.target.className === "fas fa-star" &&
    secondStar.className === "far fa-star"
  ) {
    let star = document.getElementById("1");
    star.className = "far fa-star";
    star.setAttribute("onlick", "ratingFilter1(event)");
    minNum = 0;
    filterRate(minNum);
  } else {
    if (inputNum <= 5) {
      if (inputNum < maxNum -5) {
        minNum = parseInt(event.target.id);
        filterRate(minNum);
        changeStar(1, minNum);
      } else {
        alert("Give a number which is less than maximum number");
      }
    } else {
      if (minNum < inputNum -5) {
        maxNum = parseInt(event.target.id);
        filterRate(maxNum);
        changeStar(6, maxNum);
      } else {
        alert(`Give a number which is more than minimum number`);
      }
    }
  }
};

// const ratingFilter1 = (event) => {
//   let secondStar = document.getElementById("2");
//   if (parseInt(event.target.id) < maxNum - 5) {
//     minNum = parseInt(event.target.id);
//   } else {
//     alert("Give a number which is less than maximum number");
//   }
//   if (
//     event.target.id === "1" &&
//     event.target.className === "fas fa-star" &&
//     secondStar.className === "far fa-star"
//   ) {
//     let star = document.getElementById("1");
//     star.className = "far fa-star";
//     star.setAttribute("onlick", "ratingFilter1(event)");
//     minNum = 0;
//   } else {
//     changeStar(1, minNum);
//   }
//   filterRate(minNum);
//   // changeStar(1, minNum);
// };
// const ratingFilter2 = (event) => {
//   if (parseInt(event.target.id) - 5 > minNum) {
//     maxNum = parseInt(event.target.id);
//   } else {
//     alert(`Give a number which is more than minimum number`);
//   }
//   filterRate(maxNum);
//   changeStar(6, maxNum);
// };

const changeStar = (num, bpNum) => {
  let max = num > 5 ? 10 : 5;
  for (let i = num; i < bpNum + 1; i++) {
    let star = document.getElementById(`${i}`);
    star.setAttribute("class", "fas fa-star");
    star.setAttribute("onlick", "ratingFilter1(event)");
    star.style.color = "#6558F5";
    star.style.cursor = "pointer";
  }
  for (let i = bpNum; i < max; i++) {
    let star = document.getElementById(`${i + 1}`);
    star.setAttribute("class", "far fa-star");
    star.style.color = "#6558F5";
    star.style.cursor = "pointer";

  }
};

let min;
let max =5;
let rate = { min : 0, max:5};
const filterRate = (num) => {
  num > 5 ? (max = num - 5) : (min = num);
  rate.min = min;
  rate.max = max;
  console.log(rate)

  printFilteredCard();
};
