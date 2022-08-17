import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPokemons } from '../../api/getPokemons';


export const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [data, setData] = useState([]);

    const searchTerm = searchParams.get("name") || "";

    useEffect(() => { 
          getPokemonData();
      }, [])
    
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
//.filter(pokemon => pokemon.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
        <div>
            <div>Search</div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
            />
        </div>
        <ul>
        {
            data.length && data.filter(pokemon => pokemon.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((pokemon, i) => (
                    <li key={i}> {pokemon} </li>
                ))
        }
        </ul>
    </div>
  )
}
