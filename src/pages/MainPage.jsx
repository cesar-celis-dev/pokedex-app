import React, { useEffect, useState } from 'react';
import { getPokemons } from '../api/getPokemons';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from '../components/search/Search';


export const MainPage = () => {

  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";

  const renderPokemons = searchTerm
    ? data?.results?.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : data?.results

  useEffect(() => {
      getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const pokemons = await getPokemons();
    setData(pokemons);
  }
  
 const handleSearch = event => {
        const name = event.target.value;

        if(name){
            setSearchParams({name});
        }else{
            setSearchParams({});
        }
    }

  return (
    <>
      <Search searchTerm={searchTerm} search={handleSearch} data={data} />
      
      {data && <div className='main-container'>

          {renderPokemons && 
            renderPokemons.map((pokemon, index) => {
              const pokemonArray = pokemon.url.split('/');
              const pokemonId = pokemonArray[pokemonArray.length - 2];
        return (
                  <div key={index} className="pokeCard">
                        <img
                            className='imgcard'
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                            alt={pokemon.name}
                          />
                        <div className='cardDescription'>
                          <div className='description'> Name: {pokemon.name} </div>
                          <div className='description'> Pokemon Number: {index+1} </div>
                          <div>
                            
                          </div>
                          <Link to={`/pokemon/${pokemonId}`}>
                            <button className='btnview'>View More...</button>
                          </Link>
                        </div> 
                  </div>
        )
          })
          }
      </div>}
    </>
  );
};