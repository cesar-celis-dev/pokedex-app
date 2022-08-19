import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>

      <div className='divnavbar'>
        <div className='navbarhome'>
          <Link to="/">
            <button className='btnhome'>Home</button>
          </Link>
        </div>
        <div className='navbarcompare'>
          <Link to="/compare">
            <button className='btnhome'>Compare</button>
          </Link>
        </div>
      </div>

    </div>
  )
}
