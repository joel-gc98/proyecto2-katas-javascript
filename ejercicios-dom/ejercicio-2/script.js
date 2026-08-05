// 2.1
const div = document.createElement("div");

document.body.appendChild(div);


// 2.2
const div2 = document.createElement("div");
const p = document.createElement("p");

div2.appendChild(p);
document.body.appendChild(div2);


// 2.3
const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    div3.appendChild(p);
}

document.body.appendChild(div3);


// 2.4
const p2 = document.createElement("p");

p2.textContent = "Soy dinámico!";

document.body.appendChild(p2);


// 2.5
const h2 = document.querySelector(".fn-insert-here");

h2.textContent = "Wubba Lubba dub dub";


// 2.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (const app of apps) {
    const li = document.createElement("li");

    li.textContent = app;
    ul.appendChild(li);
}

document.body.appendChild(ul);


// 2.7
const elementos = document.querySelectorAll(".fn-remove-me");

for (const elemento of elementos) {
    elemento.remove();
}


// 2.8
const p3 = document.createElement("p");

p3.textContent = "Voy en medio!";

const divs = document.querySelectorAll("body > div");

divs[0].after(p3);


// 2.9
const divsInsert = document.querySelectorAll(".fn-insert-here");

for (const div of divsInsert) {
    const p4 = document.createElement("p");

    p4.textContent = "Voy dentro!";
    div.appendChild(p4);
}