import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPokemonById } from '../api/getPokemonById';


export const PokemonPage = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1)
 }

  useEffect(() => {
    const getPokemonData = async (id) => {
      const pokemons = await getPokemonById(id);
      setData(pokemons);
    }
      getPokemonData(id);
  }, [])


  return (
    <div className='container'>

        <div>
          <button
            onClick={handleReturn}
          >Back</button>
        </div>

        <div>
            <div>
              <img 
                src={data.sprites?.other?.dream_world?.front_default}
                alt={id}
              />
            </div>
            <div>
              <div>Pokemon Number: {data.id} </div>
              <div>Pokemon Name: {data.name} </div>
              <div>height: {data.height}</div>
              <div>weight: {data.weight}</div>
            </div>
        </div>

    </div>
  )
}
