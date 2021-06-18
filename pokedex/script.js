const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
const main_types = Object.keys(colors);

const createPokemonCard = (pokemon) => {
    const pokeHTML = document.createElement('div');
    pokeHTML.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const poke_types = pokemon.types.map(type => type.type.name);

    const type = main_types.find(poke_type => poke_types.indexOf(poke_type) > -1);
    const color = colors[type];
    pokeHTML.style.backgroundColor = color;

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="pokemon">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">
                ${name}
            </h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `
    pokeHTML.innerHTML = pokeInnerHTML;
    pokeContainer.append(pokeHTML);
}

async function getPokemon(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
}
const fetchPokemons = async () => {
    for(let i = 1; i<= pokemonCount; i++){
        await getPokemon(i);
    }
}
fetchPokemons();
