import { getSpriteUrl } from '../utils/spriteUrl'
import { usePokemons } from '../services/usePokemons.js'

function OneCard({ pokemon, setPokemonSelect }) {
  // const [spriteType, setSpriteType] = useState('official')
  // const [variant, setVariant] = useState('front')

  // MODES = ['default', 'dreamWorld', 'home', 'official', 'showdown']
  return (
    <div 
    className="Card-pokemon"
    onClick={() => setPokemonSelect(pokemon)} 
    >
    <p>N° {pokemon.id} {pokemon.name} </p>
    <img 
      src={getSpriteUrl('official', 'front', pokemon.id)} 
      alt={pokemon.name} 
    />
  </div>
  )
}

export function CardPokemon({ setPokemonSelect }) {
  const { pokemons, loadMore, loading, isFull } = usePokemons()
  return (
    <>
      {pokemons && pokemons.map(pokemon => (
        <OneCard 
          pokemon={pokemon}
          key={pokemon.id}
          setPokemonSelect={setPokemonSelect}
        />
      ))}
      <div className='Container-Button-more'>
        {loading && <p>Cargando...</p>}
        {!isFull && !loading && (
          <button onClick={loadMore}>Cargar más</button>
        )}
        {isFull && <p>Has llegado al final (1025 Pokémons)</p>}
      </div>
      
    </>
  )
}