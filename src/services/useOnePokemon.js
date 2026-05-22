import { useState, useEffect } from 'react'

export function useOnePokemon(pokemon) {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false)

    const loadPokemonData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
            const data = await response.json()

            const pokemonDetails = {
                id : data.id,
                abilities: data.abilities,  
                types: data.types.map(types => ({
                    name: types.type.name,
                    slot: types.slot,
                    url: types.type.url 
                })),
                // TODO : filtrar los movimientos
                moves: data.moves.map(move => ({    
                    name: move.move.name,
                    url: move.move.url,
                })),
                stats: data.stats.map(stat => ({
                    name: stat.stat.name,
                    base_stat: stat.base_stat,
                    effort: stat.effort,
                    url: stat.stat.url
                })),
                // height : decimetros (/10 -> m)
                height: data.height / 10,
                // weight : hectogramos (/10 -> kg)
                weight: data.weight / 10,
            }
            setPokemonData(pokemonDetails);
                     
        } catch (e) {
            throw new Error('Error al cargar pokemon: ' + e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (pokemon) { loadPokemonData() }
      }, [pokemon])
    
    return { pokemonData, loading }
}