import React from 'react';

class CreatePokemon extends React.Component {
  render() { 
    const poke = this.props.pokemon
    return ( 
      <div className='pokemon'>
        <div className='pokemon-stats'>
          <p>{poke.name}</p>
          <p>{poke.type}</p>
          <p>Average Weight: {poke.averageWeight.value}{poke.averageWeight.measurementUnit}</p>
        </div>
        <div className='pokemon-img'>
          <img src={poke.image} alt={poke.name} />
        </div>
      </div>
     );
  }
}

export default CreatePokemon;