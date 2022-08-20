
export const getPokemonByName = async (name) => {
    const getPokemons = await fetch(
   `https://pokeapi.co/api/v2/pokemon/${name}`
 );
 const pokemonData = await getPokemons.json();

 return pokemonData;
};