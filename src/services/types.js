export const types = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type/?limit=21')
        
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`)
        }
        const data = await response.json()
        
        return data.results.map(type => ({
            name: type.name,
            id: parseInt(type.url.split('/')[6], 10)
        }))
        
    } catch (e) {
        console.e('Error al hacer fetching a la API de tipos de Pokemon:', e)
        return [] 
    }
}



