import React from 'react';

export const Search = ({
    searchTerm,
    search,
    data
}) => {

  return (
    <div>
        <div>
            <div>Search Pokemon</div>
            <input
                className='inputsearch'
                type="text"
                value={searchTerm}
                onChange={search}
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
