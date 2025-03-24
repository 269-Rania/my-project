<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
</script>

<template>
  <nav class="navbar">
    <button @click="menuOpen = !menuOpen" class="menu-toggle">☰</button>
    <ul :class="{ open: menuOpen }">
      <li><router-link to="/Accueil" active-class="active">Accueil</router-link></li>
      <li><router-link to="/Aproposdenous" active-class="active">A Propos de nous</router-link></li>
      <li><router-link to="/Contact" active-class="active">Contact</router-link></li>
      <li><router-link to="/Chirurgie" active-class="active">Chirurgie</router-link></li>
      <li><router-link to="/Gynecologie" active-class="active">Gynécologie</router-link></li>
      <li><router-link to="/VaccinetTraitements" active-class="active">Vaccin et Traitements</router-link></li>
      <li><router-link to="/stories" active-class="active">Histoires</router-link></li>
    </ul>
  </nav>
</template>
  

<style scoped>
  /* Centrage de la navigation */
.nav-container {
    display: flex;
    justify-content: center;  /* Centre horizontalement */
    align-items: center;       /* Centre verticalement */
    height: 100vh;             /* Prend toute la hauteur de l'écran */
}
  
  /* Style des boutons */
.nav-button {
    text-decoration: none;
    padding: 15px 30px;
    margin: 10px;
    border: 2px solid #bf7308; /* Bordure bleue */
    border-radius: 8px;
    background-color: white;
    color: #7b5303;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
  
  /* Effet dynamique au survol */
.nav-button:hover {
    background-color: #875c05;
    color: white;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
}
.logo h1 {
  font-size: 1.5rem;
}
.menu-toggle {
  display: none;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}
/* Liens de navigation */
ul {
  display: flex;
  list-style: none;
  padding: 0;
}
li {
  margin: 0 15px;
}
router-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background 0.3s ease;
}
router-link:hover {
  background: rgba(255, 255, 255, 0.2);
}
.active {
  background: rgba(255, 255, 255, 0.4);
}
/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background: #7b5001;
    width: 200px;
    border-radius: 5px;
  }

  ul.open {
    display: flex;
  }

  li {
    text-align: center;
    padding: 10px;
  }
}
</style>
