const pokemonImage = document.querySelector('.random-image');

const randomPokemon = Math.floor(Math.random() * 151) + 1;

const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
    const pokemon = await response.json();

    pokemonImage.src = pokemon.sprites.front_default;
};

getPokemon();

//cada vez que haces f5 se genera un nuevo pokemon