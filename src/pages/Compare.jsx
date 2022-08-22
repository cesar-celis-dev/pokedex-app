import React, { useEffect, useState } from 'react';
import { getPokemonByName } from '../api/getPokemonByName';
import { usePokemons } from '../components/hooks/usePokemons';
import { Search } from '../components/search/Search';



export const Compare = () => {

  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  console.log({
    selectedPokemons,
  selectedData  })


  useEffect(() => {
    if(selectedPokemons.length){
      setSelectedPokemonsData();
    }    
  }, [selectedPokemons])
  

  const {
    data,
    searchTerm,
    renderPokemons,
    handleSearch
  } = usePokemons();

  const getPokemonData = async (name) => {
    const pokemons = await getPokemonByName(name);
    return pokemons;
  }

  const setSelectedPokemonsData = async() => {

    const newDataState = await Promise.all(selectedPokemons.map(async name => await getPokemonData(name)));

      setSelectedData(newDataState);
  }
  
  const handleDelete = (id) => {
      const newData = selectedData.filter((e) => id !== e.name);
      const newState = selectedPokemons.filter( item => item !== id );
      setSelectedPokemons(newState);
      setSelectedData(newData);
  }

  const handlePokemonSelect = (id) => {
    
    if(selectedPokemons && selectedPokemons.length >= 3 && !selectedPokemons.includes(id)){
      return;
    }

    if( selectedPokemons.includes(id)){
      const newState = selectedPokemons.filter( item => item !== id );
      const newDataState = selectedData.filter(item => id !== item.name);
      setSelectedPokemons(newState);
      setSelectedData(newDataState);
      return;
    }
    
    setSelectedPokemons([...selectedPokemons, id]);
  }
  
  if (!data) return '';

  return (
    <>
      <Search searchTerm={searchTerm} search={handleSearch} data={data} />
      <div className='selected-pokemons'>
        {
          selectedData.map((pokemon, i) => {

              const typeList = selectedData?.map(data => {
                if(data.name !== pokemon.name){
                  return data?.types[0]?.type?.name                  
                }
              } );
            
              const anyMatch = typeList?.some((type)=> type === pokemon?.types[0]?.type?.name ) ? 'type-mached' : '';

            return <div key={i} className="datacompare">
              <div className='divbtndelete'> 
                <button
                  className='btndelete'
                  onClick={() => handleDelete(pokemon.name)}
                >X</button> 
              </div>
              <div>
                <img
                  className='imgcard'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
              </div>
              <div className='descriptioncompare'> 
                Name: {pokemon.name} <br/> 
                <div className={anyMatch}>Type: {pokemon.types[0].type.name}</div>
                weigth: {pokemon.weight} <br/>
                heigth: {pokemon.height}
              </div>
            </div>}

        )}
      </div>

      <div className='checkbox-container'>
        {renderPokemons.map((pokemon, i) => {

          const selected = selectedPokemons.includes(pokemon.name) ? 'selected-item' : '';

          return <div className='pokemon-checkbox' key={i}>
            <div className={selected} onClick={() => handlePokemonSelect(pokemon.name)}>{pokemon.name}</div>
          </div>
        })}
      </div>
    </>
  );
};