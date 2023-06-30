"use strict";

const login = document.querySelector(".login");
const container = document.querySelector(".container");
const loginButton = document.querySelector(".login-button");
const usernameFirstInput = document.querySelector(".username1");

const usernameSecondInput = document.querySelector(".username2");
const usernameFirst = document.querySelector(".username3");
const usernameSecond = document.querySelector(".username4");
const cells = document.querySelectorAll(".cell");
const againButton = document.querySelector(".again-button");
const row = document.querySelectorAll(".row");
const xValue = document.querySelector(".username3").innerHTML;
againButton.disabled = true;

const display = () => {
  login.setAttribute("style", "display:none;");
  container.removeAttribute("style", "display:none;");
  againButton.removeAttribute("style", "display:none;");

  usernameFirst.innerHTML = usernameFirstInput.value;
  usernameSecond.innerHTML = usernameSecondInput.value;
};

loginButton.addEventListener("click", display);

let mark = "X";

const changeMark = () => {
  if (mark === "X") {
    mark = "O";
  } else {
    mark = "X";
  }
};

const winnerChecking = () => {
  if (
    (cells[0].innerHTML === mark &&
      cells[1].innerHTML === mark &&
      cells[2].innerHTML === mark) ||
    (cells[3].innerHTML === mark &&
      cells[4].innerHTML === mark &&
      cells[5].innerHTML === mark) ||
    (cells[6].innerHTML === mark &&
      cells[7].innerHTML === mark &&
      cells[8].innerHTML === mark)
  ) {
    cells.forEach((cell) => cell.removeEventListener("click", addXorO));
    document.querySelector(".winner").innerHTML = `Winner is ${mark}!`;
  } else if (
    (cells[0].innerHTML === mark &&
      cells[3].innerHTML === mark &&
      cells[6].innerHTML === mark) ||
    (cells[1].innerHTML === mark &&
      cells[4].innerHTML === mark &&
      cells[7].innerHTML === mark) ||
    (cells[2].innerHTML === mark &&
      cells[5].innerHTML === mark &&
      cells[8].innerHTML === mark)
  ) {
    cells.forEach((cell) => cell.removeEventListener("click", addXorO));
    document.querySelector(".winner").innerHTML = `Winner is ${mark}!`;
  } else if (
    (cells[0].innerHTML === mark &&
      cells[4].innerHTML === mark &&
      cells[8].innerHTML === mark) ||
    (cells[2].innerHTML === mark &&
      cells[4].innerHTML === mark &&
      cells[6].innerHTML === mark)
  ) {
    cells.forEach((cell) => cell.removeEventListener("click", addXorO));
    document.querySelector(".winner").innerHTML = `Winner is ${mark}!`;
  }
};

const addXorO = (event) => {
  event.target.innerHTML = mark;
  winnerChecking();
  changeMark();
  event.target.removeEventListener("click", addXorO);
  againButton.disabled = false;
};

const deleteSigns = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
};

const reset = () => {
  deleteSigns();
  cells.forEach((cell) => cell.addEventListener("click", addXorO));
  document.querySelector(".winner").innerHTML = "";
  againButton.disabled = true;
};
reset();

againButton.addEventListener("click", reset);
