
let NoC = document.querySelector("#categories").children;
console.log(`Number of categories: ${NoC.length}\n\n`);

for (let index = 0; index < NoC.length; index++) {
    console.log(`Category: ${NoC[index].querySelector("h2").textContent}`);
    console.log(`Elements: ${NoC[index].querySelector("ul").children.length}\n\n`);
}