import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
    </div>
  )
}
