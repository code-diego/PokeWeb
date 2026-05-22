import { useState, useEffect, useRef } from 'react'
const LIMIT = 200
const MAX_POKEMONS = 1025

export function usePokemons() {
    const [pokemons, setPokemons] = useState([])
    const loadingRef = useRef(false)

    const loadPokemons = async () => {
        if (pokemons.length >= MAX_POKEMONS || loadingRef.current) return
        loadingRef.current = true
        const offset = pokemons.length
        
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
            const data = await response.json()

            const newPokemons = data.results.map(pk => ({
                name : pk.name.charAt(0).toUpperCase() + pk.name.slice(1),
                id: parseInt(pk.url.split('/').filter(Boolean).pop())
            }))
            setPokemons(prev => {
                const total = [...prev, ...newPokemons]
                return total.slice(0, MAX_POKEMONS)
            })
            
        } catch (e) {
            throw new Error('Error al cargar pokemons: ' + e.message)
        } finally {
            loadingRef.current = false
        }
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return { 
        pokemons, 
        loadMore: loadPokemons, 
        loading: loadingRef.current,
        isFull: pokemons.length >= MAX_POKEMONS
    }
}
