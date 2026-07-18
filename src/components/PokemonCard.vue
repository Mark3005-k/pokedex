<script setup lang="ts">
import type { Pokemon } from '../types/pokemon';
import { useTeamStorage } from '../stores/team';
const teamStore = useTeamStorage()
defineProps<{
pokemon: Pokemon
}>()
</script>

<template>
    <router-link :to="`/pokemon/${pokemon.id}`" class="pokemon-card">
        <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-card__img">
        <h2 class="pokemon-card__name">{{pokemon.name}}</h2>
        <div class="pokemon-card__types-box">
            <span v-for="type in pokemon.types" :key="type" class="pokemon-card__type-badge">
                {{ type }}
            </span>
        </div>
        <button :disabled="teamStore.teamIsFull || teamStore.isInTeam(pokemon.id)" @click.stop.prevent="teamStore.addToTeam(pokemon)" type="submit" class="pokemon-card__button" >{{ teamStore.isInTeam(pokemon.id)?'Вже в команді'  : 'Додати'}}</button>
    </router-link>
</template>

<script>

</script>