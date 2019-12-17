import React, { useState } from 'react';
import Input from '../Input';
import Score from '../Score';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;

console.log(process.env);

function App() {
  const [word, setWord] = useState('');
  const [score, setScore] = useState(null);

  const handleSubmit = async () => {
    const response = await axios.get(
      `${API_URL}:${API_PORT}/scrabblescore/${word}`
    );
    setScore(response.data.payload.score);
  };

  return (
    <div className="App">
      <h1>Enter word for scrabble score</h1>
      <Input value={word} handleChange={setWord} />
      <button disabled={!word.length} onClick={handleSubmit}>
        Submit your Word
      </button>
      <Score score={score} />
    </div>
  );
}

export default App;
