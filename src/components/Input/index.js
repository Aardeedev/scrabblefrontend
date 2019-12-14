import React from 'react';

const Input = ({ value, handleChange, ...rest }) => (
  <input
    type="text"
    value={value}
    onChange={event => handleChange(event.target.value)}
  />
);

export default Input;
