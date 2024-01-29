// Custom card Logic

let firstSec = document.getElementById("progress_Section1");
let secondSec = document.getElementById("progress_Section2");
let thirdSec = document.getElementById("progress_Section3");
let fourthSec = document.getElementById("progress_Section4");
let costElement = document.getElementById("costElement");

const costArray = [];
let sum = 0;
// firstSectionCard click Logic

const firstSecCard = (price) => {
  firstSec.classList.remove("d-block");
  firstSec.classList.add("d-none");
  secondSec.classList.remove("d-none");
  secondSec.classList.add("d-block");
  costArray.push(price);

  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};

const secondSecCard = (price) => {
  secondSec.classList.remove("d-block");
  secondSec.classList.add("d-none");
  thirdSec.classList.remove("d-none");
  thirdSec.classList.add("d-block");
  costArray.push(price);

  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};

const thirdSecCard = (price) => {
  thirdSec.classList.remove("d-block");
  thirdSec.classList.add("d-none");
  fourthSec.classList.remove("d-none");
  fourthSec.classList.add("d-block");
  costArray.push(price);

  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};
