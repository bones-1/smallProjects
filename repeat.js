"use strict";

let input = document.getElementById("userInput");
let button = document.getElementById("submit");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  // if (result.innerText = "") {
  //   result = document.createElement("p");
  //   // result.style.backgroundColor = "grey";
  // }

  if (input.value == "") {
    result.innerText = "Nothing was entered!";
  } else {
    result.innerHTML = "You entered: <br><span class='result-text'></span>";
    result.querySelector('.result-text').innerText = input.value;
  }

  input.value = "";
  document.body.insertAdjacentElement("beforeend", result);
});
