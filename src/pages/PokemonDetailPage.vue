<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { usePokemonDetail } from '../composables/usePokemonDetail';
import { useTeamStorage } from '../stores/team';
const route = useRoute()
const router = useRouter()
const teamStore = useTeamStorage()

const {pokemon, loading, error} = usePokemonDetail(route.params.id as string)
</script>

<template>
    <div>
        <button class="btn-back" @click="router.push('/')">← Назад до Покедекса</button>

        <p v-if="loading" class="hint">Завантаження покемона...</p>
        <p v-else-if="error" class="error">{{ error }}</p>

        <div v-else-if="pokemon" class="pokemon-detail">
            <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-detail__img" />
            <h2 class="pokemon-detail__name">{{ pokemon.name }}</h2>

            <div class="pokemon-card__types">
                <span v-for="type in pokemon.types" :key="type" class="type-badge">
                    {{ type }}
                </span>
            </div>

            <p><strong>Зріст:</strong> {{ pokemon.height }} м</p>
            <p><strong>Вага:</strong> {{ pokemon.weight }} кг</p>
            <p><strong>Здібності:</strong> {{ pokemon.abilities.join(', ') }}</p>

            <h3>Характеристики</h3>
            <ul class="stats-list">
                <li v-for="stat in pokemon.stats" :key="stat.name">
                    {{ stat.name }}: {{ stat.value }}
                </li>
            </ul>

            <button class="pokemon-card__button" 
                :disabled="teamStore.teamIsFull && !teamStore.isInTeam(pokemon.id)"
                @click="teamStore.addToTeam(pokemon)">
                {{ teamStore.isInTeam(pokemon.id) ? 'Вже в команді' : 'Додати' }}
            </button>
        </div>
    </div>
</template>