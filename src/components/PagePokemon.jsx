import { getSpriteUrl, getTypeSpriteUrl } from '../utils/spriteUrl.js'
import { useOnePokemon } from '../services/useOnePokemon.js'
import { types } from '../services/types.js'

export function PagePokemon({ pokemon , closeSection}) {
  const gif = getSpriteUrl('showdown', 'front_shiny', pokemon.id)
  const { pokemonData , loading } = useOnePokemon(pokemon)
  // TODO : mover este fetch a services/usePokemos.js
  
  return (
    <section className='Page-pokemon'>
      <button onClick={closeSection}>x</button>
      <h2>{pokemon.name}</h2>
      <img src={gif} alt={pokemon.name} />
      <p>Número en la pokedex: #{pokemonData?.id}</p>
      <p>Altura: {pokemonData?.height} m</p>
      <p>Peso: {pokemonData?.weight} kg</p>
      <h3>Habilidades:</h3>
      <ul>
        {pokemonData?.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Tipos:</h3>
      <ul>
        {pokemonData?.types.map((type, index) => (
          <li key={index}>
            {type.name}
            <img 
              className='Type-sprite'
              src={getTypeSpriteUrl(type.url.split('/')[6])} 
              alt={type.name} 
            />
          </li>
        ))}
      </ul>
      <h3>Stats:</h3>
      <ul>
        {pokemonData?.stats.map((stat, index) => (
          <li key={index}>{stat.name}: {stat.base_stat}</li>  
        ))}
      </ul>

    </section>
  )
}