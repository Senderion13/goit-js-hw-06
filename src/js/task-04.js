let counterValue = 0;
let value = document.querySelector("#value");

document.querySelector(`[data-action="decrement"]`).addEventListener("click", () => {
    value.textContent = --counterValue;
});

document.querySelector(`[data-action="increment"]`).addEventListener("click", () => {
    value.textContent = ++counterValue;
});
