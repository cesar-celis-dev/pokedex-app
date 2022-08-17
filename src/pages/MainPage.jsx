import React, { useEffect, useState } from 'react';
import { getPokemons } from '../api/getPokemons';
import { Link } from 'react-router-dom';
import { Search } from '../components/search/Search';


export const MainPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      const pokemons = await getPokemons();
      setData(pokemons);
    }
      getPokemonData();
  }, [])
  

  return (
    <>
    <Search />
      <div className='cardCol container'>
          {
            data.results?.map((pokemon, index) => {
              const pokemonArray = pokemon.url.split('/');
              const pokemonId = pokemonArray[pokemonArray.length - 2];

              return(
                <div key={index} className="pokeCard">
                  <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                      alt={pokemon.name}
                    /> 
                  <div> Name: {pokemon.name} </div>
                  <div> Pokemon Number: {index+1} </div>
                  <div>
                    
                  </div>
                  <Link to={`/pokemon/${pokemonId}`}>
                    <button>View More</button>
                  </Link>
                </div>
              )
          })
          }
      </div>
    </>
  );
};
