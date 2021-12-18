import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {

  
  useEffect(() => {
    getPokemons();
  }, []);

  const [pokemons, setPokemons] = useState([]);
  
  const getPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`);
    const data = await response.json();
    setPokemons(data.results);
    console.log(pokemons);
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      <form>
        <input type="text" placeholder="Search for Pokemon..." />
      </form>
      <button onClick={getPokemons}>Get</button>
      {pokemons.map(pokemons => (
        <Card name={pokemons.name} url={pokemons.url} key={pokemons.name + Date.now()}/>
      ))};
    </div>
  );
}

export default App;
