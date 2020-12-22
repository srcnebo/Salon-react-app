import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../hooks';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg';
import './Dropdown.css';

function Dropdown({ title, currency, items, setfilterValue }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('-');

  const ref = useRef();
  const toggleDropdown = () => setOpen(!open);

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  function handleOnClick(item) {
    setSelected(item);
    setfilterValue(item);
    setOpen(false);
  }

  return (
    <div className='dropdown-wrapper' ref={ref}>
      <div
        className='dropdown-header'
        role='button'
        onKeyPress={() => toggleDropdown()}
        onClick={() => toggleDropdown()}>
        <div>
          <p>
            {title} {selected} {currency}
          </p>
        </div>
        <div>
          <p>
            <ArrowDownIcon />
          </p>
        </div>
      </div>
      {open && (
        <ul className='dropdown-list'>
          {items.map((item, idx) => (
            <li className='dropdown-list-item' key={`${item}_${idx}`}>
              <button type='button' onClick={() => handleOnClick(item)}>
                <span>
                  {title} {item} {currency}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
