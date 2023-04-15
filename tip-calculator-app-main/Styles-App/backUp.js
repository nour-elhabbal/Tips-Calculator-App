let billsAmount = document.querySelector(".billAmount");

let resetBtnFunction = () => {
  let resetBTN = document.querySelector(".resetBTN");
  resetBTN.style.cssText = `color : hsl(183, 100%, 15%); background-color:hsl(172, 67%, 45%) ; cursor : pointer`;
  resetBTN.onclick = () => {
    window.location.reload();
  };
};

let billsArr = [];
billsAmount.onblur = function () {
  document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
  });
  billsArr.push(billsAmount.value);

  resetBtnFunction();
};

let tipPercentage = document.querySelectorAll(".tipPercentage");
let persentage5 = document.querySelector(".percentage-5");
let persentage10 = document.querySelector(".percentage-10");
let persentage15 = document.querySelector(".percentage-15");
let persentage25 = document.querySelector(".percentage-25");
let persentage50 = document.querySelector(".percentage-50");
let customTips = document.querySelector(".customTipPercentage");

let tipsArr = [];

persentage5.onclick = () => {
  for (let i = 0; i < tipPercentage.length - 1; i++) {
    if (
      tipPercentage[i].classList[1] !== "percentage-5" &&
      tipPercentage[0].classList[2] === "available"
    ) {
      tipPercentage[i].classList.remove("available");
      persentage5.style.cssText += `color : hsl(183, 100%, 15%) ; background-color:hsl(172, 67%, 45%)`;
      resetBtnFunction();
      return tipsArr.push(billsArr[0] * 0.05);
    }
  }
};

persentage10.onclick = () => {
  for (let i = 0; i < tipPercentage.length - 1; i++) {
    if (
      tipPercentage[i].classList[1] !== "percentage-10" &&
      tipPercentage[1].classList[2] === "available"
    ) {
      tipPercentage[i].classList.remove("available");
      persentage10.style.cssText += `color : hsl(183, 100%, 15%) ; background-color:hsl(172, 67%, 45%)`;
      resetBtnFunction();
      return tipsArr.push(billsArr[0] * 0.1);
    }
  }
};

persentage15.onclick = () => {
  for (let i = 0; i < tipPercentage.length - 1; i++) {
    if (
      tipPercentage[i].classList[1] !== "percentage-15" &&
      tipPercentage[2].classList[2] === "available"
    ) {
      tipPercentage[i].classList.remove("available");
      persentage15.style.cssText += `color : hsl(183, 100%, 15%) ; background-color:hsl(172, 67%, 45%)`;
      resetBtnFunction();
      return tipsArr.push(billsArr[0] * 0.15);
    }
  }
};

persentage25.onclick = () => {
  for (let i = 0; i < tipPercentage.length - 1; i++) {
    if (
      tipPercentage[i].classList[1] !== "percentage-25" &&
      tipPercentage[3].classList[2] === "available"
    ) {
      tipPercentage[i].classList.remove("available");
      persentage25.style.cssText += `color : hsl(183, 100%, 15%) ; background-color:hsl(172, 67%, 45%)`;
      resetBtnFunction();
      return tipsArr.push(billsArr[0] * 0.25);
    }
  }
};

persentage50.onclick = () => {
  for (let i = 0; i < tipPercentage.length - 1; i++) {
    if (
      tipPercentage[i].classList[1] !== "percentage-50" &&
      tipPercentage[4].classList[2] === "available"
    ) {
      tipPercentage[i].classList.remove("available");
      persentage50.style.cssText += `color : hsl(183, 100%, 15%) ; background-color:hsl(172, 67%, 45%)`;
      resetBtnFunction();
      return tipsArr.push(billsArr[0] * 0.5);
    }
  }
};

customTips.onblur = function () {
  document.forms[1].addEventListener("submit", (e) => {
    e.preventDefault();
  });
  for (let i = 0; i < tipPercentage.length - 1; i++) {
    tipPercentage[i].classList.remove("available");
  }
  return tipsArr.push((customTips.value / 100) * billsArr[0]);
};

let numberOfPeople = document.querySelector(".amountOfPeople");
let tipAmountPerPerson = [];

numberOfPeople.onblur = function () {
  document.forms[2].addEventListener("submit", (e) => {
    e.preventDefault();
  });

  if (numberOfPeople.value == 0) {
    let error = document.querySelector(".error");
    error.style.cssText = `display: block ;`;

    numberOfPeople.style.cssText = ` border : 2px solid red ;`;
  } else {
    let result1 = document.querySelector(".result1");
    let result2 = document.querySelector(".result2");

    tipAmountPerPerson.push(tipsArr[0] / numberOfPeople.value);
    result1.textContent = `$ ${tipAmountPerPerson[0].toFixed(2)}`;
    result2.textContent = `$ ${(
      tipsArr[0] / numberOfPeople.value +
      billsArr[0] / numberOfPeople.value
    ).toFixed(2)}`;
  }
};
