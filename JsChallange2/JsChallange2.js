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
// First Method:

// button.onclick = function () {
//   let TMArray = Array.from(TM).map((input) => parseInt(input.value));
//   let TSArray = Array.from(TS).map((input) => parseInt(input.value));

//   let totalM = TMArray.reduce(function (acc, curr) {
//     return acc + (isNaN(curr) ? 0 : curr);
//   }, 0);

//   let totalS = TSArray.reduce(function (acc, curr) {
//     return acc + (isNaN(curr) ? 0 : curr);
//   }, 0);

//   if (totalS > totalM) {
//     totalbig.innerHTML = totalS;
//     totalsmall.innerHTML = totalM;
//     namebig.innerHTML = "Sayed";
//     namesmall.innerHTML = "Mahmoud";
//   } else {
//     totalbig.innerHTML = totalM;
//     totalsmall.innerHTML = totalS;
//     namesmall.innerHTML = "Sayed";
//     namebig.innerHTML = "Mahmoud";
//   }
// };
// reset.onclick = function () {
//   totalbig.innerHTML = 0;
//   totalsmall.innerHTML = 0;
//   TM.forEach((e) => {
//     e.value = "";
//   });
//   TS.forEach((e) => {
//     e.value = "";
//   });
// };

// Second Method:

let t1 = 0;
let t2 = 0;

button.onclick = function () {
  if (!button.classList.contains("alwalid")) {
    button.classList.add("alwalid");
    TM.forEach((e) => {
      t1 += Number(e.value);
    });
    TM.forEach((e) => {
      e.value = "";
    });
    TS.forEach((e) => {
      t2 += Number(e.value);
    });
    TS.forEach((e) => {
      e.value = "";
    });
    if (t1 > t2) {
      totalbig.innerHTML = t1;
      totalsmall.innerHTML = t2;
      namesmall.innerHTML = "Mahmoud";
      namebig.innerHTML = "Sayed";
    } else {
      totalbig.innerHTML = t2;
      totalsmall.innerHTML = t1;
      namebig.innerHTML = "Sayed";
      namesmall.innerHTML = "Mahmoud";
    }
  }
};

reset.onclick = function () {
  button.classList.remove("alwalid");
  totalbig.innerHTML = 0;
  totalsmall.innerHTML = 0;
  TM.forEach((e) => {
    e.value = 0;
  });
  TS.forEach((e) => {
    e.value = 0;
  });
  t1 = 0;
  t2 = 0;
};
