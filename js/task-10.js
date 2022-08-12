let boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    boxes.innerHTML += `<div style="background-color:${getRandomHexColor()};width:${30 + index * 10}px;height:${30 + index * 10}px"></div>`;
  }
}

document.querySelector("[data-create]").addEventListener("click", () => {
  createBoxes(document.querySelector("input[type=number]").value);
})

document.querySelector("[data-destroy]").addEventListener("click", () => {
  boxes.innerHTML = "";
})