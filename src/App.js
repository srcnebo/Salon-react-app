import React, { useState, useEffect } from 'react';
import salonData from './data.json';
import NavBar from './components/NavBar/NavBar';
import Filter from './components/Filter/Filter';
import ListView from './components/ListView/ListView';
import './App.css';

function App() {
  const [filterValue, setfilterValue] = useState('');
  const [filteredSalon, setFilteredSalon] = useState([]);

  useEffect(() => {
    let filteredSalons = salonData;

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
  }, [filterValue, filteredSalon]);

  return (
    <div className='App'>
      <NavBar />
      <Filter setfilterValue={setfilterValue} />
      <div className='salon-list'>
        {filteredSalon.map((salon, idx) => (
          <ListView salon={salon} key={`${salon.name}_${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
