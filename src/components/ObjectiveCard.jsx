import React, { memo } from 'react';

const ObjectiveCard = ({ _src, heading, content }) => {
  console.log(_src);
  return (
    <>
      <img src={_src} alt={_src} />
      <h1 className='fw-bold fs-4 my-3 text-dark text-center text-sm-start'>{heading}</h1>
      <p className='text-dark custom-fontSize text-center text-sm-start'>{content}</p>
    </>
  )
}

export default memo(ObjectiveCard);