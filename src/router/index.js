import NotFoundPage from '@/pages/NotFoundPage.vue'
import PokemonDetailPage from '@/pages/PokemonDetailPage.vue'
import PokemonListPage from '@/pages/PokemonListPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    { path: '/', name: 'pokedex', component: PokemonListPage },
    { path: '/team', name: 'team', component: TeamPage },
    { path: '/pokemon/:id', name: 'pokemon', component: PokemonDetailPage },
    { path: '/:pathMatch(.*)*', name: '404', component: NotFoundPage },
  ]
})

export default router
