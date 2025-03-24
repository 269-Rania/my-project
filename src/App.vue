<script>
import MedicalErrors from './components/MedicalErrors.vue';
import NavBar from './components/NavBar.vue';  // Assure-toi d'importer aussi NavBar si tu l'utilises

export default {
  name: 'App',
  components: {
    MedicalErrors,  // Enregistrement du composant MedicalErrors
    NavBar,  // Enregistrement du composant NavBar
  },
};
</script>

<template>
  <MedicalErrors />
  <div class="banner">
    <h1>Les Cobayes de l'Histoire</h1>
  </div>
  <navBar>
    <RouterLink to="/Accueil">Accueil</RouterLink>
    <RouterLink to="/A propos de nous">A propos de nous</RouterLink>
    <RouterLink to="/Contact">Contact</RouterLink>
    <RouterLink to="/Gynecologie">Gynécologie</RouterLink>
    <RouterLink to="/Chirurgie">Chirurgie</RouterLink>
    <RouterLink to="/VaccinsetTraitements">Vaccins et Traitements</RouterLink>
    <RouterLink to="/stories">Histoires</RouterLink>
  </navBar>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.banner {
  background-image: url("http://www.cvltnation.com/wp-content/uploads/2014/10/dissection29.jpg?_gl=1*cdctcw*_ga*MjEyMjg4MTgxOC4xNzQwNTYyOTkx*_ga_68MYBLZC6Y*MTc0MDU2Mjk5MS4xLjEuMTc0MDU2MzA1NC42MC4wLjA."); /* Image d'Internet */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Effet parallax */
  width: 100%;
  height: 400px; /* Ajuste la hauteur */
  display: flex;
  align-items: center;
  justify-content: center;
}
.h1{
  font-family: "Alegreya SC", serif;
  font-size: 10px; /* Taille de police */
  color:rgb(18, 13, 3);
  padding-top: 1px; /* Optionnel : Ajouter un petit espace */
  text-align: justify; /* Centre le texte horizontalement */
}
</style>
