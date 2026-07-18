import { ref, onMounted } from 'vue'
import type { Pokemon } from '../types/pokemon'
interface ApiPokemon {
    name: string
    url: string
} 
interface ApiResponse {
    results:ApiPokemon[]
}


const sprite = (id: number): string =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

export function usePokemonList() {

const pokemons = ref<Pokemon[]>([])
const loading = ref<boolean>(true)
const error = ref<string | null>(null)

onMounted(async () => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        const data: ApiResponse = await response.json()
        pokemons.value = data.results.map((p) => {
            let arr = p.url.split('/')
            const id = +arr[arr.length -2]
            return {
                id,
                name: p.name,
                image: sprite(id),
                types:[]
            }
        })
    } catch (e) {
        error.value ='Не вдалось завантажити'
    } finally {
        loading.value=false
    }
})

    return {
        pokemons, loading, error
    }
}