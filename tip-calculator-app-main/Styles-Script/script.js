// ! selecting needed elements :--
let billsAmount = document.querySelector(".billAmount");
let tipPercentage = document.querySelectorAll(".tipPercentage");
let persentage5 = document.querySelector(".percentage-5");
let persentage10 = document.querySelector(".percentage-10");
let persentage15 = document.querySelector(".percentage-15");
let persentage25 = document.querySelector(".percentage-25");
let persentage50 = document.querySelector(".percentage-50");
let customTips = document.querySelector(".customTipPercentage");
let peopleNumber = document.querySelector(".amountOfPeople");
let tipsPerPerson = document.querySelector(".result1");
let totalPerPerson = document.querySelector(".result2");

// ! main variables :--
let bills, tips;

// ! main functions :--

// the reset button function
let resetBtnFunction = () => {
  let resetBTN = document.querySelector(".resetBTN");
  resetBTN.style.cssText = `color : hsl(183, 100%, 15%); background-color:hsl(172, 67%, 45%) ; cursor : pointer`;
  resetBTN.onclick = () => {
    window.location.reload();
  };
};

//function that handels most of things in the persentage buttons
let tipsPercentageFunction = (index) => {
  for (let i = 0; i < tipPercentage.length - 1; i++) {
    if (tipPercentage[i].classList.contains("clicked")) {
      tipPercentage[i].classList.remove("clicked");
    }
    tipPercentage[i].removeAttribute("style");
  }

  tipPercentage[index].classList.add("clicked");
  let clicked = document.querySelector(".clicked");
  clicked.style.cssText = `   color: hsl(183, 100%, 15%) !important; background-color: hsl(172, 67%, 45%) !important;`;

  billsAmount.onfocus = () => {
    tipPercentage[index].removeAttribute("style");
  };

  customTips.onfocus = () => {
    tipPercentage[index].removeAttribute("style");
    tipPercentage.forEach((ele) => {
      ele.classList.remove("clicked");
    });
  };

  if (peopleNumber.value == 0) {
    let error = document.querySelector(".error");
    error.style.cssText = `display: block ;`;
    peopleNumber.style.cssText = ` border : 2px solid red ;`;
  }
};

// the Result Shower in page Functions
const tipsResult = () => {
  let result = (tips / peopleNumber.value).toFixed(2);
  return (tipsPerPerson.textContent = `$ ${result}`);
};

const totalResult = () => {
  let result = (bills / peopleNumber.value + tips / peopleNumber.value).toFixed(
    2
  );
  return (totalPerPerson.textContent = `$ ${result}`);
};

// script :--

billsAmount.addEventListener("change", (e) => {
  resetBtnFunction();
  bills = e.target.value;
  return bills;
});

persentage5.onclick = () => {
  tipsPercentageFunction(0);
  tips = 0.05 * bills;
  tipsResult();
  totalResult();

  return tips;
};

persentage10.onclick = () => {
  tipsPercentageFunction(1);
  tips = 0.1 * bills;
  tipsResult();
  totalResult();
  return tips;
};

persentage15.onclick = () => {
  tipsPercentageFunction(2);
  tips = 0.15 * bills;
  tipsResult();
  totalResult();

  return tips;
};

persentage25.onclick = () => {
  tipsPercentageFunction(3);
  tips = 0.25 * bills;
  tipsResult();
  totalResult();

  return tips;
};

persentage50.onclick = () => {
  tipsPercentageFunction(4);
  tips = 0.5 * bills;
  tipsResult();
  totalResult();

  return tips;
};

customTips.addEventListener("change", (e) => {
  let input = e.target.value;

  tips = (input / 100) * bills;

  if (peopleNumber.value == 0) {
    let error = document.querySelector(".error");
    error.style.cssText = `display: block ;`;
    peopleNumber.style.cssText = ` border : 2px solid red ;`;
  } else {
    tipsResult();
    totalResult();
  }

  return tips;
});

peopleNumber.addEventListener("change", (e) => {
  let error = document.querySelector(".error");

  let input = e.target.value;

  if (input > 0) {
    error.style.cssText = `display: none ;`;
    peopleNumber.style.cssText = ` border : none;`;
    console.log(input);
  }

  if (peopleNumber.value == 0) {
    let error = document.querySelector(".error");
    error.style.cssText = `display: block ;`;
    peopleNumber.style.cssText = ` border : 2px solid red ;`;
  } else {
    tipsResult();
    totalResult();
  }
});
