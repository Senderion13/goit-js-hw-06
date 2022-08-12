

document.querySelector("#name-input").addEventListener("input", () => {
    if(document.querySelector("#name-input").value == "") {
        document.querySelector("#name-output").textContent = "Anonymous";
    }
    else {
        document.querySelector("#name-output").textContent = document.querySelector("#name-input").value;
    }
})
