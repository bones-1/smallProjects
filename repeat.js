"use strict";

export let input = document.getElementById("userInput");
export let button = document.getElementById("submit");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  if (input.value == "") {
    result.innerText = "Nothing was entered!";
    new Audio("./media/radar-ping-306440.mp3").play();
  } else {
    result.innerHTML = "You entered: <br><span class='result-text'></span>";
    result.querySelector(".result-text").innerText = input.value;
    new Audio("./media/ping-82822.mp3").play();
  }

  input.value = "";
  document.body.insertAdjacentElement("beforeend", result);
});
