import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Pokemon } from "../types/pokemon";

export const useTeamStorage = defineStore('team',() => {
    const team = ref<Pokemon[]>(loadFromStorage())


    const teamIsFull = computed(() => team.value.length >= 6)
    const isInTeam = (id: number) => team.value.some((pokemon) => pokemon.id === id)
    
    function addToTeam(pokemon: Pokemon) {
        if (teamIsFull.value) return
        if (isInTeam(pokemon.id)) return    
        team.value.push(pokemon)
        saveToStorage()
    }

    function removeFromTeam(id: number) {
        team.value = team.value.filter((pokemon)=>pokemon.id !== id)
        saveToStorage()
    }

    function loadFromStorage() {
        const saved = localStorage.getItem('team')
        return saved ? JSON.parse(saved) : []
    }

    function saveToStorage() {
        localStorage.setItem('team', JSON.stringify(team.value))

    }

    return {team, isInTeam, teamIsFull, addToTeam, removeFromTeam}
})
