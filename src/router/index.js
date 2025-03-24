

import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Accueil from '../pages/Accueil.vue';
import Aproposdenous from '../pages/Aproposdenous.vue';
import Contact from '../pages/Contact.vue';
import Gynecologie from '../pages/Gynecologie.vue';
import Chirurgie from '../pages/Chirurgie.vue';
import VaccinsetTraitements from '../pages/VaccinsetTraitements.vue';
import stories from '../pages/stories.vue';


const routes = [
  { path: '/', redirect: '/Acceuil' }, 
  { path: '/Accueil', component: Accueil },
  { path: '/Aproposdenous', component: Aproposdenous },
  { path : '/Contact', component:Contact },
  { path : '/Gynecologie', component:Gynecologie },
  { path : '/Chirurgie', component:Chirurgie },
  { path : '/VaccinetTraitements', component:VaccinsetTraitements },
  { path : '/stories', component :stories },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;