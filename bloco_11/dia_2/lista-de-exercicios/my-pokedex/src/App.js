import './App.css';
import './pokemon.css'
import Pokemons from './data';
import CreatePokemon from './CreatePokemon'


function App() {
  return (
    <div className="main-div">
      <h1>Pokedex</h1>
      <div className="pokedex">
        {Pokemons.map(pokemon => (
          <CreatePokemon pokemon={pokemon}/>
        ))}
      </div>
    </div>
  );
}

export default App;
