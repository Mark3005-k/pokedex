<script setup lang="ts">
import { useTeamStorage } from '../stores/team';
import { storeToRefs } from 'pinia';

const teamStore = useTeamStorage()
const { team } = storeToRefs(teamStore)
</script>

<template>
    <div>
        <h2>Моя команда ({{ team.length }}/6)</h2>

        <p v-if="team.length === 0" class="hint">
            Команда порожня — поверніться на Покедекс і додайте покемонів.
        </p>

        <div v-else class="pokemon-list">
            <router-link :to="`/pokemon/${pokemon.id}`" v-for="pokemon in team" :key="pokemon.id" class="pokemon-card">
                <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-card__img" />
                <h3 class="pokemon-card__name">{{ pokemon.name }}</h3>
                <button class="btn-remove" @click.stop.prevent="teamStore.removeFromTeam(pokemon.id)">
                    Видалити
                </button>
            </router-link>
        </div>
    </div>
</template>