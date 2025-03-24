<script setup>
import { onMounted } from "vue"; 
onMounted(() => {
  document.title = "Les Cobayes de l'Histoire";
  });
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');

const submitForm = () => {
  if (name.value && email.value && message.value) {
    successMessage.value = "Merci ! Votre message a été envoyé.";
    // Réinitialiser le formulaire
    name.value = '';
    email.value = '';
    message.value = '';
  } else {
    successMessage.value = "Veuillez remplir tous les champs.";
  }
};
</script>

<template>
<div class="background">
  <h1>Contact</h1>
  <div class="image-links">
    <router-link to="/Aproposdenous">
      <img src="https://th.bing.com/th/id/OIP.GXJQiisTZjsA25H415CPoQHaHa?rs=1&pid=ImgDetMain" alt="A Propos de nous" class="image-button" />
    </router-link>
  </div>  
    <h2>HAMADY Rania </h2>
    <p>
        Je suis étudiante en Sciences pour la Santé à Lyon 1, passionnée par la recherche scientifique, notamment par les histoires scientifiques qu'on ne vous raconte pas...  
        Mon projet "Les Cobayes de l'Histoire" explore les expérimentations médicales controversées dans l'histoire.  
    </p>
    <h3>Compétences & Intérêts</h3>
    <ul>
        <li>Recherche en sciences de la santé</li>
        <li>Droit en santé</li>
        <li>Histoire des sciences & éthique</li>
    </ul>

    <h3>Envoyez-moi un message 📩</h3>
    <form @submit.prevent="submitForm">
      <input v-model="name" type="text" placeholder="Votre nom">
      <input v-model="email" type="email" placeholder="Votre email">
      <textarea v-model="message" placeholder="Votre message..."></textarea>
      <button type="submit">Envoyer</button>
      <p v-if="successMessage">{{ successMessage }}</p>
    </form>
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
form {
  display: flex;
  flex-direction: column;
}
input, textarea {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
}
button {
  padding: 10px;
  background-color: #4b3105;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #714504;
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