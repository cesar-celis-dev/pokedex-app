import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPokemons } from '../../api/getPokemons';

export const usePokemons = () => {

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

  return {
    data,
    searchTerm,
    renderPokemons,
    handleSearch
  }
}
