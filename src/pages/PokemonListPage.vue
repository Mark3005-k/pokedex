<script setup lang="ts">
import PokemonCard from '../components/PokemonCard.vue'
import { usePokemonList } from '../composables/usePokemonList'

const { pokemons, loading, error } = usePokemonList()
</script>

<template>
    <h1>Список покемонів</h1>

    <p v-if="loading" class="hint">Завантаження покемонів</p>
    <p v-else-if="error" class="error">{{ error }}</p>

    <div v-else class="pokemon-list">
        <PokemonCard 
        v-for="pokemon in pokemons" :key="pokemon.id"
        :pokemon="pokemon"
        />
    </div>
</template>