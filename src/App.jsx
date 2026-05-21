import { use } from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import TarjetaPokemon from './components/TarjetaPokemon'

function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const count = data.count
        const pokes = data.results.map(pk => ({
          name : pk.name,
          id : pk.url.split('/')[6]
        }))
        setPokemons(pokes)
      })

  }, [])


  return (
    <div className='App'>
      <header className='Header'>
        <h1 className='Title'>Pokedex</h1>
      </header>

      <main>
        <TarjetaPokemon pokemons={pokemons} />
      </main>
    </div>
  )
}

export default App
