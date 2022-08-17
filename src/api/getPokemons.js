
export const getPokemons = async (
    offset = 0,
    limit = 100
  ) => {
    const getPokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const pokemonData = await getPokemons.json();
  
    return pokemonData;
  };