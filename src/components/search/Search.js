import React from 'react';

export const Search = ({
    searchTerm,
    search,
    data
}) => {

    const filter = data?.results?.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
   
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
                {data && searchTerm && <ul>
                    {
                        filter.map((pokemon, i) => (
                            <li key={i}> {pokemon.name} </li>
                        ))
                    }
                </ul>}
            </div>

        </div>
    )
}