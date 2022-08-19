import React from 'react';

export const Search = ({
    searchTerm,
    search,
    data
}) => {

  return (
    <div>
        <div className='search-container'>
            <div className='description'>Search Pokemon</div>
            <input
                className='inputsearch'
                type="text"
                value={searchTerm}
                onChange={search}
                placeholder="Search"
                autoComplete='off'
            />
        </div>
        <ul>
        {
            data?.length && data.filter(pokemon => pokemon.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((pokemon, i) => (
                    <li key={i}> {pokemon} </li>
                ))
        }
        </ul>
    </div>
  )
}
