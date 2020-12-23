import React from 'react';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';

import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <ArrowIcon className='navbar-arrow' />
      <h1>Hår</h1>
      <FilterIcon />
    </div>
  );
}

export default NavBar;
