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
        <h1>Gynécologie</h1>
        <img src= "https://th.bing.com/th/id/OIP.wX0EAP34Zrh1LX0iv8t9BgHaFp?rs=1&pid=ImgDetMain" style="width: 700px; height: auto;" class="image">
    </div>
    <p>
        J. Marion Sims était un gynécologue du milieu du 19e siècle qui a acheté des femmes noires esclaves et les a utilisées comme cobayes pour ses expériences chirurgicales non testées.
        Il a pratiqué à plusieurs reprises des chirurgies génitales sur des femmes noires sans anesthésie car selon lui « les femmes noires ne souffrent pas ». 
        Malgré son test inhumain sur les femmes noires, Sims a été nommé « le père de la gynécologie moderne », 
        et sa statue se trouvait juste à l’extérieur de l’Académie de médecine de New York jusqu’à son retrait en avril 2018, à la suite de manifestations à travers le pays contre les statues confédérées. 
    </p>
    <h2>1. James Marion Sims : Expérimentations sur les Femmes et Bébés Esclaves – Une Histoire de Violence Médicale</h2>
    <div class="container gauche ">
        <ImageCard
        title="J.Marion Sims" 
        description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p class="texte">L’histoire de la médecine moderne est jalonnée de découvertes majeures, mais certaines d’entre elles sont entachées par des pratiques inhumaines. 
        Parmi ces figures controversées, James Marion Sims (1813-1883), souvent surnommé « le père de la gynécologie moderne », a mené des expériences cruelles et non éthiques sur des femmes et des bébés esclaves au XIXe siècle aux États-Unis.
    </p>
    </div>
    <h2>2. Le Contexte Médical et Historique  </h2>
    <div class="container droite">
        <ImageCard
        title="Fistule vésico-vaginale " 
        description="Marie Curie a été une pionnière dans la recherche sur la radioactivité.">
        <!-- Image insérée via le slot -->
        <img src= "https://www.researchgate.net/profile/Fatoumata-Binta-Balde/publication/341762871/figure/fig2/AS:896885451653121@1590845563574/Vue-laterale-gauche-des-moyens-de-fixite-de-la-vessie-hors-plancher-pelvien-22_Q320.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p class = "texte">
        Au milieu du XIXe siècle, la médecine obstétrique et gynécologique était encore balbutiante. 
        Les femmes souffraient fréquemment de complications post-accouchement, notamment la fistule vésico-vaginale, une perforation entre la vessie et le vagin causant des douleurs, des infections chroniques et une incontinence sévère. 
        Cette condition, bien que tragique, était particulièrement répandue chez les femmes esclaves, souvent contraintes à des grossesses répétées et à des accouchements dans des conditions déplorables. James Marion Sims, alors médecin en Alabama, voyait ces femmes non pas comme des patientes, mais comme des objets d’expérimentation pour perfectionner des techniques chirurgicales.
    </p>
    </div>
    <h2>3. Les Expériences sur les Femmes Esclaves                                                            </h2>
    <div class="container gauche">
        <ImageCard
        title="Instrument de torture " 
        description="Interventions chirurgicales">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR_eppWkNQfL4l_-oLJ6W2ohmV-vOLSRp2SEJpxW3KIY0VzZTSsA_vgKxAhVUuyX4A7rU-5ZcL6uDb06Yp115ljdcihrYJQ-vltlViZnp7lAqEya1U1R4_jJJlJYP2_jY0_nu4YG1xesEw/s400/medical+Sims.Speculum.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p class="texte">
        Sims a pratiqué des dizaines d’interventions chirurgicales sur des femmes esclaves sans anesthésie, car il croyait (à tort) que les personnes noires ressentaient moins la douleur que les Blancs. Parmi ses « cobayes », trois femmes sont restées célèbres : Anarcha, Lucy et Betsey.
        Lucy, âgée de 18 ans, a été l’une des premières à subir une intervention. Sims lui a introduit un spéculum en métal qu’il avait inventé pour examiner l’intérieur de son vagin. Après une intervention ratée, elle a souffert de douleurs insupportables et d’une infection sévère qui l’a laissée alitée pendant plusieurs mois.
        Anarcha, une adolescente enceinte, a enduré 30 opérations sans anesthésie dans l’espoir de trouver une solution définitive à la fistule.Betsey, dont les témoignages historiques sont plus rares, aurait également subi des interventions brutales.
        Ces expériences ont été menées sous le regard de plusieurs médecins blancs, alors que les patientes étaient immobilisées de force par d’autres esclaves. Les cris de douleur de ces femmes n’ont jamais interrompu ces expériences, et leurs souffrances ont été justifiées sous prétexte d’avancées scientifiques.
    </p>
    </div>
    <h2>4. L’Expérimentation sur les Bébés Esclaves                                                             </h2>
    <div class="container droite">
        <ImageCard
        title="Expérimenttaions sur des enfants" 
        description="2eme victime de J.Marion Sims">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7CiXB4PZGRZ3WKJ8vgvYb3Qs_VNmo0jS7qP5bFPxBvF6hdqO7WbVHkkO98AqFuBm5NQaTHDBc0U9-5qwR955PG0LWe1DlW8Qvpawr65hUo0mkw9bE7WoVoxTZKWfRfGyIbfw4gIgsTm8V/s400/medical+baby+with+tetnus.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p class="texte">
        Sims ne s’est pas limité aux femmes adultes. Il a également expérimenté sur des nouveaux-nés esclaves souffrant de tétanos néonatal, une maladie fréquente à l’époque en raison des conditions insalubres des accouchements.
        Persuadé que la maladie était causée par un déplacement des os du crâne, il a utilisé un instrument appelé « trocart » pour percer les têtes des nourrissons et tenter de les soulager. Ces opérations, menées sans la moindre preuve scientifique, ont abouti à la mort de nombreux bébés.
    </p>
    </div>
    <h2>5. Une Médecine Fondée sur la Violence et l’Exploitation                                               </h2>
    <div class="container gauche">
    <p class="texte">
        Les expériences de Sims ont largement contribué au développement de la chirurgie gynécologique, mais à un coût humain inacceptable. Il a perfectionné le spéculum vaginal, encore utilisé aujourd’hui, et mis au point des techniques chirurgicales pour traiter la fistule. 
        Cependant, ces avancées n’excusent en rien la torture et l’inhumanité de ses pratiques.Contrairement à ses patientes esclaves, Sims a appliqué l’anesthésie lorsqu’il a commencé à opérer des femmes blanches, preuve supplémentaire du racisme médical de l’époque.
    </p>
    </div>
    <h2>6. Un Héritage Controversé                                                                             </h2>
    <div class="container gauche">
        <ImageCard
        title="Statut de J.marion Sims" 
        description="Central Parks New York">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX-OQwFht2zG8vc6zTjvfxmDTX3ww7BKjAguTFVMTXr5MwLDh4UDtTMT4-YLVAFc3DDPDPZEnHsqYF-_uvMDKQ3hcKaWGkVUs6ueQOXE_PjR7R7hWWd2ZrRKjrnGOUNWzKWewv1htcaKk6/s400/medical+sims3.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p class = "texte">
        Pendant longtemps, Sims a été glorifié comme un pionnier de la médecine. Des statues ont été érigées en son honneur aux États-Unis, notamment à New York et en Caroline du Sud. Mais à mesure que la vérité sur ses expérimentations a émergé, ces hommages ont été contestés. 
        En 2018, sous la pression des activistes et des chercheurs en bioéthique, sa statue a été retirée de Central Park à New York.Aujourd’hui, son histoire illustre les abus commis au nom de la science et les injustices dont les populations noires ont été victimes dans le domaine médical.
    </p>
    </div>
    <h2>7. Pourquoi est-il essentiel de se souvenir de cette histoire ?                                          </h2>
    <div class="container droite">
        <ImageCard
        title="Hommage aux femmes noires torturés pour la science" 
        description="Hommages">
        <!-- Image insérée via le slot -->
        <img src= "https://www.teachingtraveling.com/wp-content/uploads/2023/02/20230210_161506-768x1024.jpeg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p class = "texte">
        Parce qu’elle rappelle les racines racistes et sexistes de certaines pratiques médicales. Parce qu’elle met en lumière les inégalités persistantes en santé (les femmes noires, par exemple, ont encore aujourd’hui un taux de mortalité maternelle plus élevé que les femmes blanches).
        Parce qu’elle déconstruit le mythe d’une médecine toujours éthique et invite à une réflexion sur la bioéthique et le consentement dans la recherche scientifique.
    </p>
    </div>
    <h2>Conclusion </h2>
    <p>
        James Marion Sims incarne un paradoxe troublant : celui d’un homme qui a contribué aux progrès médicaux, mais au prix d’une immense souffrance humaine. 
        Ses travaux sont aujourd’hui étudiés sous un prisme critique, non plus comme des avancées scientifiques isolées, mais comme un exemple flagrant de la violence médicale exercée sur les populations noires dans l’histoire.
        Se souvenir des victimes comme Anarcha, Lucy et Betsey, c’est refuser d’oublier les fondations inhumaines sur lesquelles repose une partie de la médecine moderne. C’est aussi un appel à ne plus jamais laisser la science justifier l’exploitation des plus vulnérables.
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
.app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>