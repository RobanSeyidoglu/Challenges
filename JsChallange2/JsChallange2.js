let button = document.querySelector(".buttons button:first-child");
let reset = document.querySelector(".buttons button:last-child");

let totalbig = document.querySelector(".total tr:first-child td:last-child");
let totalsmall = document.querySelector(".total tr:last-child td:last-child");
let namebig = document.querySelector(".total tr:first-child td:first-child");
let namesmall = document.querySelector(".total tr:last-child td:first-child");

let TM = document.querySelectorAll(
  "table:not(.total) tr:first-child td:last-child input"
);
let TS = document.querySelectorAll(
  "table:not(.total) tr:last-child td:last-child input"
);

button.onclick = function () {
  let TMArray = Array.from(TM).map((input) => parseInt(input.value));
  let TSArray = Array.from(TS).map((input) => parseInt(input.value));

  let totalM = TMArray.reduce(function (acc, curr) {
    return acc + (isNaN(curr) ? 0 : curr);
  }, 0);

  let totalS = TSArray.reduce(function (acc, curr) {
    return acc + (isNaN(curr) ? 0 : curr);
  }, 0);

  if (totalS > totalM) {
    totalbig.innerHTML = totalS;
    totalsmall.innerHTML = totalM;
    namebig.innerHTML = "Sayed";
    namesmall.innerHTML = "Mahmoud";
  } else {
    totalbig.innerHTML = totalM;
    totalsmall.innerHTML = totalS;
    namesmall.innerHTML = "Sayed";
    namebig.innerHTML = "Mahmoud";
  }
};
reset.onclick = function () {
  totalbig.innerHTML = 0;
  totalsmall.innerHTML = 0;
  TM.forEach((e) => {
    e.value = "";
  });
  TS.forEach((e) => {
    e.value = "";
  });
};
