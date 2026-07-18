import type { PokemonDetail } from "../types/pokemonDetail";
import { ref, onMounted } from "vue";


export function usePokemonDetail(id: string) {
    const pokemon = ref< PokemonDetail | null>(null)
    const loading = ref<boolean>(true)
    const error = ref<string | null>(null)

    onMounted(async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            console.log(data);
            pokemon.value = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                types: data.types.map((t: any) => t.type.name),
                abilities: data.abilities.map((a: any) => a.ability.name),
                height: data.height / 10,
                weight: data.weight / 10,
                stats: data.stats.map((s:any) => {
                    return {
                        name: s.stat.name,
                        value: s.base_stat,
                    }
                })

            }

        } catch (e) {
            error.value ='Не вдалось завантажити Покемона'
        } finally {
            loading.value=false
        }
    })

    return {pokemon, loading, error}
    
}