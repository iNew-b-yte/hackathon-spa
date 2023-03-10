import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ObjectiveCard = ({ _src, heading, content }) => {
   return (
    <>
      <img src={_src} alt={_src} />
      <h1 className='fw-bold fs-4 my-3 text-dark'>{heading}</h1>
      <p className='text-dark custom-fontSize'>{content}</p>
    </>
  )
}

ObjectiveCard.propTypes = {
  _src : PropTypes.string,
  heading : PropTypes.string,
  content : PropTypes.string,
}

export default memo(ObjectiveCard);