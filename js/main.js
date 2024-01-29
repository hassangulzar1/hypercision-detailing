// Custom card Logic

let firstSec = document.getElementById("progress_Section1");
let secondSec = document.getElementById("progress_Section2");
let thirdSec = document.getElementById("progress_Section3");
let fourthSec = document.getElementById("progress_Section4");

// firstSectionCard click Logic

const firstSecCard = () => {
  firstSec.classList.remove("d-block");
  firstSec.classList.add("d-none");
  secondSec.classList.remove("d-none");
  secondSec.classList.add("d-block");
};

const secondSecCard = () => {
  secondSec.classList.remove("d-block");
  secondSec.classList.add("d-none");
  thirdSec.classList.remove("d-none");
  thirdSec.classList.add("d-block");
};

const thirdSecCard = () => {
  thirdSec.classList.remove("d-block");
  thirdSec.classList.add("d-none");
  fourthSec.classList.remove("d-none");
  fourthSec.classList.add("d-block");
};
