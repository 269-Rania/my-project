<script setup>
import { onMounted } from "vue"; 
onMounted(() => {
  document.title = "Les Cobayes de l'Histoire";
  });
</script>


<template>
<div class="background">
  <h1>À Propos</h1>
  <div class="image-links">
    <router-link to="/Contact">
      <img src="https://th.bing.com/th/id/OIP.GXJQiisTZjsA25H415CPoQHaHa?rs=1&pid=ImgDetMain" alt="Contact" class="image-button" />
    </router-link>
  </div>  
  <h2>Qui suis-je ?</h2>
  <p>
    Je suis étudiante en Sciences pour la Santé à Lyon 1, passionnée par la recherche médicale et l’histoire des sciences.  
    Mon projet "Les Cobayes de l'Histoire" explore les expériences médicales menées sur des populations vulnérables, avec un regard scientifique et éthique.
  </p>
  <section class="project">
    <h2>Le Projet "Les Cobayes de l'Histoire"</h2>
    <p>
      À travers ce site, je souhaite **mettre en lumière des faits historiques**, analyser leurs impacts et sensibiliser sur l’éthique en recherche médicale.
    </p>
    <ul>
      <li>📜 Expérimentations médicales dans l’histoire</li>
      <li>⚖️ Questions d’éthique et de bioéthique</li>
      <li>🔬 Liens avec la recherche scientifique moderne</li>
      </ul>
    </section>
    <section class="goal">
      <h2>Pourquoi ce projet ?</h2>
      <p>
        En tant que future professionnelle du domaine médical, je trouve essentiel de comprendre comment la recherche a évolué et d’en tirer des leçons pour l’avenir.
      </p>
    </section>
</div>
</template>
  
<style scoped>
.background {
    background-color:rgb(247, 245, 242); /* Gris clair */
    min-height: 100vh; /* Prend toute la hauteur de l'écran */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
h1 {
    font-family: "Cinzel", serif;
    font-weight: normal;
    font-size: 50px; /* Taille de police */
    color:rgb(18, 13, 3);
    margin-top: 0;  /* Supprime l’espace au-dessus */
    padding-top: 1px; /* Optionnel : Ajouter un petit espace */
    text-align: center; /* Centre le texte horizontalement */
}
h2 {
    font-family: "Cinzel", serif;
    font-weight: normal;
    font-size: 25px; /* Taille de police */
    color:rgb(18, 13, 3);
    margin-top: 0;  /* Supprime l’espace au-dessus */
    padding-top: 1px; /* Optionnel : Ajouter un petit espace */
    text-align: left, left ; 
}
h3{
  font-family: "Cinzel", serif;
    font-weight: normal;
    font-size: 20px; /* Taille de police */
    color:rgb(18, 13, 3);
    margin-top: 0;  /* Supprime l’espace au-dessus */
    padding-top: 1px; /* Optionnel : Ajouter un petit espace */
    text-align: left, left ; 
}
p {
  font-family: 'Moon Dance', ;
  font-size: 14px;
  font-style: normal; 
  color: #555; /* Gris foncé */
  text-align: justify; /* Justifier le texte */
  max-width: 650px; /* Limite la largeur à 800px */
  margin: 20px auto; /* Centre horizontalement */
  line-height: 1.6; /* Améliore la lisibilité */
}
li {
  font-family: 'Moon Dance', ;
  font-size: 14px;
  font-style: normal; 
  color: #555; /* Gris foncé */
  text-align: justify; /* Justifier le texte */
  max-width: 650px; /* Limite la largeur à 800px */
  margin: 20px auto; /* Centre horizontalement */
  line-height: 1.6; /* Améliore la lisibilité */
}
.about-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
ul li {
  margin: 5px 0;
  font-size: 1.1em;
}
.image-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}
.image-button {
  width:240px;
  height: 240px;
  border-radius: 30px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.image-button:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}
</style>