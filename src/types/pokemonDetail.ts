import type { Pokemon } from "./pokemon";

export interface Stat {
    name: string
    value: number
}

export interface PokemonDetail extends Pokemon {
    height: number
    weight: number
    abilities: string[]
    stats: Stat[]
}