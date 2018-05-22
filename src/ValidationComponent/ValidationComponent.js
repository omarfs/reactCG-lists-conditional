import React from 'react';

const validationComponent = (props) => {

  const validationText = props.textLength < 5 ?
      <p> Text too short </p> :
      <p> Text long enough </p>;

  return (
    <div className='validationComponent'>
      {validationText}
    </div>
  )
};

export default validationComponent;
