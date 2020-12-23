import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';

import './ListItem.css';

//Styling Material Ui component using withStyles HOC
const StyledRating = withStyles({
  iconFilled: {
    color: 'var(--primary)',
  },
  iconEmpty: {
    color: 'var(--primary)',
  },
})(Rating);

function ListItem(props) {
  const {
    name,
    price,
    address,
    duration,
    appointment,
    ratingsQuantity,
    ratingsAverage,
  } = props.salon;

  return (
    <div className='salon-list__item'>
      <div className='salon-list__appointment'>
        <span>{appointment}</span>
      </div>
      <h2 className='salon-list__name'>{name}</h2>
      <div className='salon-list__price'>
        {price}
        <span>kr</span>
      </div>
      <div className='salon-list__arrow'>
        <span>
          <ArrowRightIcon />
        </span>
      </div>
      <div className='salon-list__rating'>
        <StyledRating
          readOnly
          name='customized-empty'
          value={ratingsAverage}
          defaultValue={1}
          precision={1}
          size='small'
          emptyIcon={<StarBorderIcon fontSize='inherit' />}
        />
        <span className='salon-list__rating-text'>{`(${ratingsQuantity})`}</span>
      </div>
      <div className='salon-list__duration'>
        <span>{duration}mins</span>
      </div>
      <div className='salon-list__address'>
        <span>{address.split(',')[0]}</span>
      </div>
    </div>
  );
}

ListItem.propTypes = {};

export default ListItem;
