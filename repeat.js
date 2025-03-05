"use strict";

let input = document.getElementById("userInput");
let button = document.getElementById("submit");
let result;

button.addEventListener("click", () => {
  if (!result) {
    result = document.createElement("p");
    result.style.backgroundColor = "grey";
  }

  if (input.value == "") {
    result.innerText = "Nothing was entered!";
  } else {
    result.innerText = "You entered: " + input.value;
  }

  input.value = "";
  document.body.insertAdjacentElement("beforeend", result);
});
