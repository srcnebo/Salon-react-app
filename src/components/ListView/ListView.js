import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import salonData from '../../data.json';
import NavBar from '../NavBar/NavBar';
import Filter from '../Filter/Filter';
import ListItem from '../ListItem/ListItem';
import './ListView.css';

function ListView({ setSalon }) {
  const [filterValue, setfilterValue] = useState('');
  const [filteredSalon, setFilteredSalon] = useState([]);

  const history = useHistory();
  useEffect(() => {
    let filteredSalons = salonData;

    if (filterValue === '--') {
      filteredSalons = filteredSalons.filter((salon) => salon);
    }
    if (filterValue === '0 - 249') {
      filteredSalons = filteredSalons.filter(
        (salon) => salon.price > 0 && salon.price < 250
      );
    }
    if (filterValue === '250 - 500') {
      filteredSalons = filteredSalons.filter(
        (salon) => salon.price >= 250 && salon.price <= 500
      );
    }
    if (filterValue === '501 - 2000') {
      filteredSalons = filteredSalons.filter(
        (salon) => salon.price > 500 && salon.price <= 2000
      );
    }

    setFilteredSalon(filteredSalons);
  }, [filterValue]);

  return (
    <div>
      <NavBar />
      <Filter setfilterValue={setfilterValue} />
      <div className='salon-list'>
        {filteredSalon.map((salon, idx) => (
          <div
            onClick={() => {
              setSalon(salon);
              history.push(`/salons/${salon.id}`);
            }}
            key={`${salon.name}_${idx}`}>
            <ListItem salon={salon} />
          </div>
        ))}
      </div>
    </div>
  );
}

ListView.propTypes = {
  setSalon: PropTypes.func,
};

export default ListView;
