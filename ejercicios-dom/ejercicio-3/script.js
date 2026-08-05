// 1.1
const countries = [
    "Japón",
    "Nicaragua",
    "Suiza",
    "Australia",
    "Venezuela"
];

const ul = document.createElement("ul");

for (const country of countries) {
    const li = document.createElement("li");

    li.textContent = country;

    ul.appendChild(li);
}

document.body.appendChild(ul);


// 1.2
const elementToRemove = document.querySelector(".fn-remove-me");

elementToRemove.remove();


// 1.3
const cars = [
    "Mazda 6",
    "Ford fiesta",
    "Audi A4",
    "Toyota corola"
];

const divPrintHere = document.querySelector('[data-function="printHere"]');

const ulCars = document.createElement("ul");

for (const car of cars) {
    const li = document.createElement("li");

    li.textContent = car;

    ulCars.appendChild(li);
}

divPrintHere.appendChild(ulCars);


// 1.4
const countriesImages = [
    {
        title: "Random title",
        imgUrl: "https://picsum.photos/300/200?random=1"
    },
    {
        title: "Random title",
        imgUrl: "https://picsum.photos/300/200?random=2"
    },
    {
        title: "Random title",
        imgUrl: "https://picsum.photos/300/200?random=3"
    },
    {
        title: "Random title",
        imgUrl: "https://picsum.photos/300/200?random=4"
    },
    {
        title: "Random title",
        imgUrl: "https://picsum.photos/300/200?random=5"
    }
];

const divs = [];

for (const country of countriesImages) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");

    h4.textContent = country.title;
    img.src = country.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);

    document.body.appendChild(div);

    divs.push(div);
}


// 1.5
const deleteLastButton = document.createElement("button");

deleteLastButton.textContent = "Eliminar último";

document.body.appendChild(deleteLastButton);

deleteLastButton.addEventListener("click", function () {
    if (divs.length > 0) {
        const lastDiv = divs[divs.length - 1];

        lastDiv.remove();

        divs.pop();
    }
});


// 1.6
for (const div of divs) {
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Eliminar";

    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        div.remove();
    });
}