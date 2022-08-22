import React, { useEffect, useState } from 'react';
import { getPokemons } from '../../api/getPokemons';


export const Carrousel = () => {

    const [limit, setLimit] = useState(5);
    const [offseted, setOffseted] = useState(0);
    const [data, setData] = useState([]);

    const offset = (offseted);

    const handleNext = () => {
        setOffseted(offseted+5);
        setLimit(limit)
    }; 

    const handleBefore = () => {
        setOffseted(offseted-5);
        setLimit(limit)
    }; 
    
    useEffect(() => {
        getPokemonData(offset, limit);
    }, [limit, offset]);
  
    const getPokemonData = async (offset, limit) => {
      const pokemons = await getPokemons(offset, limit);
      setData(pokemons);
    }

  return (
    <div className='container'>
        <div className='carrousel'>
            <div className='btncarrouselbefore'>
                {offset >= 5 ? 
                    <button
                        onClick={handleBefore}
                    >
                        Before
                    </button>
                    : ""
                }
            </div>
            <div className="carrouselinfo">
                {
                data?.results?.map((pokemon,i) => (
                    <div key={i} >
                        <div>
                            <img
                                className='imgcard'
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(i+1)+offset}.png`}
                                alt={pokemon.name}
                            />
                        </div>   
                        <div>{pokemon.name}</div>
                        <div>Pokemon Number: {(i+1)+offset} </div>    
                    </div>                   
                ))
                }
            </div>
            <div className='btncarrouselnext'>
                {offset< 16 ?                    
                    <button
                        onClick={handleNext}
                    >
                        Next
                    </button>
                    : ""
                }
            </div>
        </div>
    </div>
  )
}
