import React, { useState } from 'react';
import { fetchPokemons } from '../api/fetchPokemons';

export const MainPage = () => {

  const [data, setData] = useState(null);


  const getPokemons = async (offset, limit) => {
    const pokemons = await fetchPokemons(
      offset,
      limit
    );
    setData(pokemons);
  };
console.log(data);
  return (
    <div>
          {
           data.results.map((item) => {
            const pokemonArray = item.url.split('/');
            const pokemonId = pokemonArray[pokemonArray.length - 2];

            return (
              <div>
                  <div>{item.name}</div>
                  <div>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                      alt={item.name}
                    />
                  </div>
                  <div>View More</div>
              </div>
            ); 
           })
          };
    </div>
  );
};
