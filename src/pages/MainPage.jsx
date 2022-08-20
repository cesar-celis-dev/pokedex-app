import React from 'react';
import { Link } from 'react-router-dom';
import { usePokemons } from '../components/hooks/usePokemons';
import { Search } from '../components/search/Search';



export const MainPage = () => {

  const {
    data,
    searchTerm,
    renderPokemons,
    handleSearch
  } = usePokemons();


  return (
    <>
      <Search searchTerm={searchTerm} search={handleSearch} data={data} />

      {data && <div className='main-container'>

        {renderPokemons &&
          renderPokemons.map((pokemon) => {
            const pokemonArray = pokemon.url.split('/');
            const pokemonId = pokemonArray[pokemonArray.length - 2];
            return (
              <div key={pokemonId} className="pokeCard">
                <img
                  className='imgcard'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={pokemon.name}
                />
                <div className='cardDescription'>
                  <div className='description'> Name: {pokemon.name} </div>
                  <div className='description'> Pokemon Number: {pokemonId} </div>

                  <div>
                    <Link to={`/pokemon/${pokemonId}`}>
                      <button className='btnview'>View More...</button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>}
    </>
  );
};