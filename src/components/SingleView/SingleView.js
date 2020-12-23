import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import salonData from '../../data.json';

import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ReactComponent as ArrowBack } from '../../assets/icons/arrow.svg';
import { ReactComponent as Like } from '../../assets/icons/heart.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as Pin } from '../../assets/icons/pin.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Globe } from '../../assets/icons/globe.svg';
//Normally the Image url for each salon would be in the api, here we go static
import salonImage from '../../assets/images/hair.jpg';
import './SingleView.css';

const StyledTabs = withStyles({
  indicator: {
    backgroundColor: 'var(--primary)',
    textTransform: 'none',
  },
  root: {
    color: 'var(--darkText)',
  },
})(Tabs);

//Styling Material Ui component using withStyles HOC
const StyledRating = withStyles({
  iconFilled: {
    color: 'var(--primary)',
  },
  iconEmpty: {
    color: 'var(--primary)',
  },
})(Rating);

//Todo : fetch salon if no salon is passed

function SingleView({ match, salon, history }) {
  // State and change handler for Material Ui tabs
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Go back to List of Salons
  const handleGoBack = () => {
    history.push('/');
  };

  console.log(salonData);
  return (
    <div>
      <div className='single-salon__header'>
        <div className='single-salon__header-controls'>
          <div onClick={handleGoBack}>
            <ArrowBack />
          </div>
          <div>
            <Like />
          </div>
        </div>
        <img
          src={salonImage}
          alt='female hair'
          className='single-salon__header-image'
        />
        <div className='single-salon__header-info'>
          <h1>{salon.name}</h1>
          <div className='single-salon__rating'>
            <StyledRating
              readOnly
              name='customized-empty'
              defaultValue={salon.ratingsAverage}
              precision={1}
              size='small'
              emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
            <span className='single-salon__rating-text'>{`(${salon.ratingsQuantity})`}</span>
          </div>
        </div>
      </div>

      <Paper square>
        <StyledTabs
          value={value}
          variant='fullWidth'
          onChange={handleChange}
          aria-label='disabled tabs example'>
          <Tab label='Info' />
          <Tab label='Schema' />
        </StyledTabs>
      </Paper>
      <div className='single-salon__spacer'></div>
      <div className='single-salon__body'>
        <div className='single-salon__body-info'>
          <Pin />
          <span>{salon.address}</span>
        </div>
        <div className='single-salon__body-info'>
          <Clock />
          <span>Öppet till {salon.endTime} idag</span>
          <ArrowDown />
        </div>
        <div className='single-salon__body-info'>
          <Phone />
          <span>{salon.phoneNumber}</span>
        </div>
        <div className='single-salon__body-info'>
          <Globe />
          <span>{salon.webPage}</span>
        </div>
        <div className='single-salon__body-description'>
          <p>{salon.description}</p>
        </div>
      </div>
    </div>
  );
}

SingleView.propTypes = {};

export default withRouter(SingleView);
