<script setup lang="ts">
import { useTeamStorage } from './stores/team';
const teamStore = useTeamStorage()
</script>

<template>
  <header class="header">
<h1 class="title">Pokedex</h1>
<nav class="menu">
<router-link class="link" to="/">Головна</router-link>
<router-link class="link" to="/team">Моя команда: <span class="team-badge">{{ teamStore.team.length }}/6</span></router-link>

</nav>
</header>

<main>
<router-view></router-view>
</main>
</template>

<style scoped>

</style>
