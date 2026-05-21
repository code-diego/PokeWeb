
export default function TarjetaPokemon({ pokemons }) {
    const link_sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png'
    
    return (
        <div className='Container'>
          {pokemons.map(pokemon => (
            <div className='TarjetaPokemon' key={pokemon.id}>
                <p>N° {pokemon.id} {pokemon.name} </p>
                <img src={link_sprite.replace('{id}', pokemon.id)} alt={pokemon.name} />
            </div>
          ))}
        </div>
    )
  }