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
    <div className="header">
      <h1>Pokedex</h1>
      <h2>(ポケモン</h2>
    </div>
      <form onSubmit={getSearch} className="search">
        <input type="text" placeholder="Search for Pokemon..." onChange={updateSearch} value={search} className="input"/>
        <button type="submit" className="btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </button>
      </form>
      <div className="pokeContainer">
        {pokemons.map(pokemons => (
          <Card className="pokeCard" name={pokemons.name} url={pokemons.url} key={pokemons.name + Date.now()}/>
        ))}
      </div>
    </div>
  );
}

export default App;
