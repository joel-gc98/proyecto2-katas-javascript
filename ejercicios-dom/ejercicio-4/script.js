
// 1.1

const button = document.createElement("button");

button.id = "btnToClick";
button.textContent = "Haz click";

document.body.appendChild(button);

button.addEventListener("click", function (event) {
    console.log(event);
});


// 1.2

const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", function (event) {
    console.log(event.target.value);
});


// 1.3

const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", function (event) {
    console.log(event.target.value);
});