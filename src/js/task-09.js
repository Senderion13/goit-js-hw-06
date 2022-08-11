function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let randomColor;

document.querySelector(".change-color").addEventListener("click", () => {
  randomColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector("span.color").textContent = randomColor;
})