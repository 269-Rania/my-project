<script setup>
import { onMounted } from "vue";
onMounted(() => {
    document.title = "Les Cobayes de l'Histoire";
  });
import ImageCard from '../components/ImageCard.vue';
</script>

<template>
<div class="background">
    <div class="header">
        <h1>Vaccins et traitements </h1>
        <img src="https://media.audiobookstore.com/e/e/eeab/eeab-square-1536.jpg" style="width: 700px; height: auto;" class="image">
    </div>
    <p>
        Depuis des siècles, les populations du tiers-monde et les minorités ont été utilisées comme cobayes pour le développement de la médecine moderne, souvent sans leur consentement et au mépris de leur dignité humaine. 
        Ces expérimentations, menées au nom de la science et du progrès médical, ont causé d'immenses souffrances et ont permis aux pays occidentaux de développer des traitements sans prendre en compte l'éthique médicale.
    </p>
    <h2>1. L'étude de Tuskegee : Une expérience raciste</h2>
    <div class="container gauche">
        <ImageCard
        title="Tuskegee" 
        description="Expérimentation sur la syphilis">
        <img src="https://th.bing.com/th/id/OIP.RrLMISc2MKji4HqlBD1ywAHaEK?w=320&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p>
        De 1932 à 1972, aux États-Unis, le Service de Santé Publique américain a mené une étude sur la syphilis auprès de 600 hommes afro-américains pauvres, dont 399 étaient infectés. 
        Les chercheurs ont sciemment laissé ces hommes sans traitement, même après la découverte de la pénicilline en 1947, pour observer l'évolution naturelle de la maladie. 
        Beaucoup d’entre eux sont morts, ont contaminé leurs épouses et ont transmis la maladie à leurs enfants. Ce scandale a marqué l'histoire de l'éthique médicale et a contribué à la mise en place des lois sur le consentement éclairé.
    </p>
    </div>
    <h2>2. Expérimentations en Afrique</h2>
    <div class="container droite">
        <ImageCard
        title="Tests de vaccins en Afrique" 
        description="Abus médicaux sur les populations vulnérables">
        <img src="https://th.bing.com/th/id/OIP.k7b3UR2XryxWoJS5zxgEMAHaE8?w=244&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p>
        L'Afrique a été un terrain d'expérimentation pour de nombreuses entreprises pharmaceutiques occidentales. En 1996, la société Pfizer a testé un antibiotique, le Trovan, sur des enfants nigérians atteints de méningite bactérienne. 
        Ce médicament n'avait pas encore été entièrement testé, et l'expérience a conduit à la mort de plusieurs enfants, tandis que d'autres ont souffert de séquelles irréversibles.
    </p>
    </div>
    <p>
        De plus, plusieurs campagnes de vaccination ont été menées sans information préalable aux populations locales, suscitant une méfiance persistante envers la médecine occidentale. 
        Des essais cliniques ont également été réalisés dans des conditions douteuses sur le VIH et le paludisme, renforçant l'idée que les vies des populations noires et pauvres valent moins aux yeux des grandes entreprises pharmaceutiques.
    </p>
    <h2>3. Expériences au Guatemala</h2>
    <div class="container gauche">
        <ImageCard
        title="Expérimentations sur la syphilis au Guatemala" 
        description="Tests non éthiques sur des prisonniers et patients">
        <img src="https://th.bing.com/th/id/OIP.MiD8j2emdKVSn6H6gTmHVwAAAA?w=312&h=191&c=7&r=0&o=5&dpr=2&pid=1.7" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p>
        Entre 1946 et 1948, des chercheurs américains ont mené des expériences médicales secrètes au Guatemala, où ils ont intentionnellement infecté plus de 1 500 personnes avec des maladies sexuellement transmissibles, notamment la syphilis et la gonorrhée. 
        Les victimes comprenaient des prisonniers, des soldats et des patients d'hôpitaux psychiatriques, qui n'étaient pas informés de ce qui leur était injecté. L'objectif était d'étudier l'efficacité de certains traitements antibiotiques.
    </p>
</div>
    <p>
        Cette expérience inhumaine est restée secrète pendant des décennies avant d'être révélée en 2010. Le gouvernement américain a alors présenté des excuses officielles, mais aucune réparation significative n'a été accordée aux victimes et à leurs familles.
    </p>
    <h2>Conclusion</h2>
    <p>
        Ces expériences médicales ont laissé des cicatrices profondes dans l'histoire de la médecine et ont contribué à la méfiance de certaines populations envers les systèmes de santé occidentaux. 
        Elles rappellent l'importance de l'éthique médicale et du consentement éclairé dans la recherche biomédicale moderne.
    </p>
    <p>
        Aujourd'hui encore, les populations pauvres et marginalisées sont souvent utilisées comme cobayes pour tester de nouveaux médicaments, sous prétexte d'aide humanitaire. 
        Il est essentiel de se souvenir de ces abus pour s'assurer qu'ils ne se reproduisent plus et pour garantir une médecine véritablement éthique et équitable.
    </p>
</div>
</template>
  
  
<style scoped>
.header {
    text-align: center; /* Centre tout */
}
img {
    margin: 10px 0; /* Ajoute un espace autour */
    width: 100%;
    height: 400px; /* Ajuste la hauteur */
    display: flex;
    align-items: center;
    justify-content: center
}
.container {
  display: flex; /* Active Flexbox */
  align-items: center; /* Centre l’image et le texte verticalement */
  gap: 20px; /* Espace entre l’image et le texte */
}
.gauche {
  flex-direction: row; /* Image à gauche, texte à droite */
}

.droite {
  flex-direction: row-reverse; /* Image à droite, texte à gauche */
}
</style>

