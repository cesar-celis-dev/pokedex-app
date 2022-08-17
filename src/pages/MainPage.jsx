import React, { useEffect, useState } from 'react';
import { getPokemons } from '../api/getPokemons';
import { Link } from 'react-router-dom';


export const MainPage = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      const pokemons = await getPokemons();
      setPokemons(pokemons);
    }
      getPokemonData();
  }, [])
  

  return (
    <>
      
          {
            pokemons.results?.map((pokemon, index) => {
              const pokemonArray = pokemon.url.split('/');
              const pokemonId = pokemonArray[pokemonArray.length - 2];

              return(
                <div key={index} className="pokeCard">
                  <div> Name: {pokemon.name} </div>
                  <div>
                    <img 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                      alt={pokemon.name}
                    /> 
                  </div>
                  <Link to={`/pokemon/${pokemonId}`}>
                    <button>View More</button>
                  </Link>
                </div>
              )
          })
          }
      
    </>
  );
};
