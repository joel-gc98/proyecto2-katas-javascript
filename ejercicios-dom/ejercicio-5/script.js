const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist"
];

const albumList = document.querySelector("#album-list");

for (const album of albums) {
    const li = document.createElement("li");

    li.textContent = album;

    albumList.appendChild(li);
}