//! Custom card Logic
let locationSec = document.getElementById("location-Sec");
let firstSec = document.getElementById("progress_Section1");
let secondSec = document.getElementById("progress_Section2");
let thirdSec = document.getElementById("progress_Section3");
let fourthSec = document.getElementById("progress_Section4");
let costElement = document.getElementById("costElement");

const costArray = [];
let sum = 0;

//! Function to handle section transitions
const handleSectionTransition = (currentSec, nextSec) => {
  currentSec.classList.add("section-leave-animation");
  currentSec.classList.remove("section-animation");
  nextSec.classList.add("section-animation");
  nextSec.classList.remove("section-leave-animation");

  setTimeout(() => {
    currentSec.classList.add("d-none");
    nextSec.classList.remove("d-none");
  }, 500);
};

//! Function to handle card transitions
const handleCardTransition = (currentCard, nextCard) => {
  currentCard.classList.remove("card-transition-active");
  nextCard.classList.add("card-transition-active");
};

// !firstSectionCard click Logic

const goToSage1 = () => {
  handleSectionTransition(locationSec, firstSec);
  handleCardTransition(locationSec, firstSec);
};
const firstSecCard = (price) => {
  handleSectionTransition(firstSec, secondSec);
  handleCardTransition(firstSec, secondSec);

  costArray.push(price);

  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};

const secondSecCard = (price) => {
  handleSectionTransition(secondSec, thirdSec);
  handleCardTransition(secondSec, thirdSec);

  costArray.push(price);

  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};

const thirdSecCard = (price) => {
  handleSectionTransition(thirdSec, fourthSec);
  handleCardTransition(thirdSec, fourthSec);

  costArray.push(price);

  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};

//! Back button login

const backToLocation = () => {
  handleSectionTransition(firstSec, locationSec);
  handleCardTransition(firstSec, locationSec);
};
const backBtn1 = () => {
  handleSectionTransition(secondSec, firstSec);
  handleCardTransition(secondSec, firstSec);

  costArray.pop();
  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};

const backBtn2 = () => {
  handleSectionTransition(thirdSec, secondSec);
  handleCardTransition(thirdSec, secondSec);

  costArray.pop();
  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};

const backBtn3 = () => {
  handleSectionTransition(fourthSec, thirdSec);
  handleCardTransition(fourthSec, thirdSec);

  costArray.pop();
  sum = costArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  costElement.innerHTML = sum + "£";
};
