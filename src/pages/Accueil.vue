<script setup>
import { onMounted } from "vue";
onMounted(() => {
  document.title = "Les Cobayes de l'Histoire";
  });
</script>

<template>
  <div class = "background">
    <h1>
      Les cobayes de l'histoire
    </h1>
    <h6>
      La vérité derrière le progrès fulgurant de la médecine occidentale.
    </h6>
    <p>Ici, vous découvrirez la vérité derrière le progrès fulgurant de la médecine occidentale. 
      Une médecine qui se présente aujourd'hui comme le fleuron du savoir scientifique, un modèle d’innovation et d’efficacité. 
      Pourtant, derrière cette façade de modernité et d’humanité, se cache une histoire méconnue, souvent occultée : 
      celle d’expérimentations inhumaines, de violations éthiques et d’exploitations systémiques infligées aux peuples considérés comme inférieurs, en particulier ceux des territoires colonisés.
    </p>
    <p>
      Depuis des siècles, les avancées médicales ont reposé sur des pratiques que l’histoire officielle préfère oublier. 
      À travers le temps, des populations entières ont servi de cobayes involontaires pour tester des vaccins, des traitements et des procédures chirurgicales encore incertaines. 
      Ces expérimentations ont été menées sous prétexte d’une mission civilisatrice, justifiant ainsi l’injustifiable. En Afrique, en Asie, en Amérique latine et même dans certaines régions défavorisées d’Occident, la médecine a souvent avancé au prix du sang et de la souffrance de ceux qui n’avaient ni voix ni droit à l’indignation.
    </p>
    <p>
      Les grandes découvertes en immunologie, en chirurgie et en pharmacologie doivent beaucoup à ces victimes anonymes, ces corps sacrifiés sur l’autel du progrès médical. 
      Chaque avancée a eu son prix, et ce prix a souvent été payé par les plus vulnérables, ceux que l’histoire ne nomme pas.
    </p>
    <p>
      Aujourd’hui, la médecine occidentale se veut éthique, réglementée par des protocoles stricts et des comités de bioéthique. 
      Pourtant, les inégalités persistent. Les essais cliniques de nouveaux médicaments sont encore majoritairement réalisés dans des pays où la régulation est plus souple, où la pauvreté pousse à accepter l’inacceptable. 
      Le spectre du passé hante encore le présent, nous forçant à nous interroger : jusqu’où peut-on justifier la souffrance au nom du progrès ?
    </p>
    <p>
      Il est temps d’exhumer cette histoire, d’en exposer les vérités les plus dérangeantes, afin que le progrès médical ne soit plus jamais synonyme d’exploitation.
    </p>
    <p>
      Ce site a pour but de rendre hommage à ces cobayes de l’histoire, de leur donner une voix et une place dans notre mémoire collective. 
      Nous ne pouvons pas changer le passé, mais nous pouvons l’affronter, le reconnaître et en tirer des leçons pour l’avenir. 
      En prenant conscience de ces réalités, nous espérons contribuer à une médecine plus juste, plus éthique et plus humaine, une médecine qui ne se construit pas sur la souffrance des autres.
    </p>
    <!-- Autres contenus de la page -->
    <div class="image-links">
      <router-link to="/Gynécologie">
        <img src="https://th.bing.com/th/id/OIP.wX0EAP34Zrh1LX0iv8t9BgHaFp?rs=1&pid=ImgDetMain" alt="Gyécologie" class="image-button" />
      </router-link>

      <router-link to="/Chirurgie">
        <img src="https://daily.jstor.org/wp-content/uploads/2015/11/OperatingTheater_1050x700.jpg" alt="Chirurgie" class="image-button" />
      </router-link>
      
      <router-link to="/Vaccins et Traitements">
        <img src="https://media.audiobookstore.com/e/e/eeab/eeab-square-1536.jpg" alt="Vaccins et Traitements" class="image-button" />
      </router-link>
    </div>
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
  text-align: justify; /* Centre le texte horizontalement */
}
h6{
  font-family: "Cinzel", serif;
  font-weight: italic;
  font-size: 13px; /* Taille de police */
  color:rgb(18, 13, 3);
  margin-top: 0;  /* Supprime l’espace au-dessus */
  padding-top: 1px; /* Optionnel : Ajouter un petit espace */
  text-align: justify; /* Centre le texte horizontalement */
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
.home-container {
  text-align: center;
  padding: 20px;
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
