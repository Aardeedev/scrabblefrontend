import React from 'react';

const Score = ({ score }) =>
  !score ? (
    <h2>Please submit a valid word</h2>
  ) : (
    <h2>Your word score is {score}.</h2>
  );

export default Score;
