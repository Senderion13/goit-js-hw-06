let form = document.querySelector(".login-form");
let obj = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(form.elements[0].value == "" || form.elements[1].value == ""){
        alert("All fields must be filled");
    }
    obj[`${form.children[0].textContent}`] = form.children[0].children[0].value;
    obj[`${form.children[1].textContent}`] = form.children[1].children[0].value;
    console.log(Object.entries(obj));
    form.reset();
})
