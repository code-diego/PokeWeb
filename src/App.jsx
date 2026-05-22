import './App.css'
import { useState, useEffect } from 'react'
import { CardPokemon } from './components/CardPokemon.jsx'
import { PagePokemon } from './components/PagePokemon.jsx'

function App() {
  const [pokemonSelected, setPokemonSelected] = useState(null)

  return (
    <div className='App'>
      <header>
        <h1 className='Title-page'>Pokedex</h1>
        <input className='Input-pokemon' type='text' placeholder='Pikachu, charizard... o #25, #6' />
        <button className='Button-search'>Buscar</button>
      </header>

      <main className={pokemonSelected ? 'with-detail' : ''}>
        <section className='Container-Cards'> 
          <CardPokemon 
            setPokemonSelect={setPokemonSelected}
          />     
        </section>

        {/* Section para mostrar detalles del pokemon seleccionado */}
        {pokemonSelected && 
          <PagePokemon 
          pokemon={pokemonSelected} 
          closeSection={() => setPokemonSelected(null)}
        /> 
        }
      </main>
    </div>
  )
}

export default App
