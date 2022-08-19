import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPokemonById } from '../api/getPokemonById';


export const PokemonPage = () => {

  const [data, setData] = useState(null);
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
    <div className='detail-container'>
      <div>
        <div>
          <button
            className='btnback'
            onClick={handleReturn}
          > Back</button>
        </div>

        {data &&<div>
            <div>
              <img
                className='imgdetail' 
                src={data.sprites?.other?.dream_world?.front_default}
                alt={id}
              />
            </div>
            <div className='descriptionsdetail'>
              <div className='description'>Pokemon Number: {data.id} </div>
              <div className='description'>Pokemon Name: {data.name} </div>
              <div className='description'>Type: {data.types[0].type.name}</div>
              <div className='description'>height: {data.height}</div>
              <div className='description'>weight: {data.weight}</div>
            </div>
        </div>}
      </div>
    </div>
  )
}
