import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {

  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState(`pokemon?limit=100&offset=200`)
  
  useEffect(() => {
    getPokemons();
  }, [query]);


  
  const getPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/${query}`);
    const data = await response.json();
    setPokemons(data.results);
    console.log(pokemons);
  };

  const updateSearch = e => {
    e.preventDefault();
    setSearch(e.target.value); 
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(`pokemon/${search}`);
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      <form onSubmit={getSearch}>
        <input type="text" placeholder="Search for Pokemon..." onChange={updateSearch} value={search}/>
        <button type="submit">Search</button>
      </form>
      {pokemons.map(pokemons => (
        <Card name={pokemons.name} url={pokemons.url} key={pokemons.name + Date.now()}/>
      ))};
    </div>
  );
}

export default App;
