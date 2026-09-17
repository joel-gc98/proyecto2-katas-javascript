const characterList = document.querySelector('#character-list');
const characterImage = document.querySelector('.character-image');

const getCharacters = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json();

    characters.forEach(character => {
        const option = document.createElement('option');

        option.value = character.imageUrl;
        option.textContent = character.fullName;

        characterList.appendChild(option);
    });
};

getCharacters();

characterList.addEventListener('change', () => {
    characterImage.src = characterList.value;
});