import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

import PropTypes from 'prop-types';

const items = ['0 - 249', '250 - 500', '501 - 2000'];

function Filter({ setfilterValue }) {
  return (
    <div className='filter-container'>
      <Dropdown
        title='Pris'
        currency='kr'
        items={items}
        setfilterValue={setfilterValue}
      />
    </div>
  );
}

Filter.propTypes = {};

export default Filter;
