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
        <h1>Chirurgie</h1>
        <img src="https://daily.jstor.org/wp-content/uploads/2015/11/OperatingTheater_1050x700.jpg" style="width: 700px; height: auto">
    </div>
    <p>
        La chirurgie moderne, telle que nous la connaissons aujourd’hui, repose sur des siècles d’expérimentations, d’innovations et d’erreurs. 
        Cependant, derrière les avancées médicales majeures se cache une histoire sombre, celle des pratiques médicales et chirurgicales menées sans consentement sur des populations vulnérables, principalement issues des territoires colonisés. 
        Ces expériences ont souvent été justifiées par la "quête du savoir", mais elles révèlent surtout une hiérarchisation raciale et un mépris profond pour la dignité humaine des peuples dits du "tiers-monde". 
    </p>
    <h2>1. Expérimentations Chirurgicales sous l’Ère Coloniale</h2>
    <p>
        Avec l’expansion coloniale européenne aux XVIIIe et XIXe siècles, les médecins et chirurgiens occidentaux ont vu dans les colonies un "terrain d’expérimentation" idéal. 
        Les populations locales, souvent privées de tout droit et considérées comme "inférieures", ont été soumises à des procédures médicales risquées, souvent sans anesthésie ni précaution, et sans aucun consentement.
    </p>
    <div class="section ">
        <h3> L'Afrique, un laboratoire humain forcé</h3>
        <div class="container gauche">
            <ImageCard
        title="J.Marion Sims" 
        description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>
            De nombreux chirurgiens français, britanniques et belges ont utilisé les corps africains pour tester de nouvelles interventions chirurgicales. Par exemple, au Congo sous domination belge, les médecins expérimentaient des amputations et des greffes sur des Congolais, sous prétexte d’étudier les limites du corps humain et ses capacités de régénération.
        </p>  
        </div>
    </div>
    <div class="section">
        <h3>Les Caraïbes et les Antilles : un terrain d’essai pour la médecine tropicale</h3>
        <div class="container droite">
            <ImageCard
            title="J.Marion Sims" 
            description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>Dans les colonies françaises et britanniques des Caraïbes, des esclaves ont été utilisés pour tester des chirurgies innovantes. Des césariennes expérimentales ont été réalisées sur des femmes enceintes, souvent sans anesthésie, pour "étudier" la résistance des organes internes.</p>
        </div>
    </div>
    <div class="section">
        <h3>L’Inde et la vivisection humaine </h3>
        <div class="container gauche">
            <ImageCard
            title="J.Marion Sims" 
            description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>
            Pendant la domination britannique en Inde, des chirurgiens militaires ont réalisé des interventions chirurgicales expérimentales sur des prisonniers ou des indigents. Des dissections humaines étaient pratiquées pour mieux comprendre l’anatomie, alors même que ce type de recherche était strictement encadré en Europe. 
        </p>
        </div>
    </div>
    <h2>2. La Chirurgie Militaire : Une Expérimentation Sur Les Corps Colonisés</h2>
    <p>
        Les guerres coloniales ont également été une opportunité pour tester des techniques chirurgicales innovantes. Les soldats blessés issus des colonies n’avaient pas droit aux mêmes soins que les Européens et servaient souvent de cobayes pour tester de nouvelles méthodes :
    </p>
    <div class="section">
        <h3>Transfusions sanguines expérimentales</h3>
        <div class = "container gauche">
            <ImageCard
            title="J.Marion Sims" 
            description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>
            Lors des conflits coloniaux, les chirurgiens militaires ont expérimenté des transfusions sanguines sur les soldats africains et indiens. Plusieurs d’entre eux sont morts à cause de la méconnaissance des groupes sanguins et des incompatibilités.
        </p>
        </div>
        <h3>Greffes et amputations</h3>
        <div class = "container droite">
            <ImageCard
            title="J.Marion Sims" 
            description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>
            Des tentatives de greffes d’organes et de peau étaient réalisées sur des prisonniers et des blessés coloniaux, souvent sans suivi post-opératoire.
        </p>
        </div>
    </div>
    <h2>3. L’Héritage de Ces Expériences dans la Médecine Moderne  </h2>
    <p>
        Beaucoup des pratiques expérimentales menées sur ces populations ont posé les bases des techniques chirurgicales modernes. Pourtant, cet héritage est rarement mentionné dans les manuels d’histoire de la médecine.
    </p>
    <div class="section">
        <h3>L’amélioration des techniques de suture et de greffe</h3>
        <div class = "container gauche">
            <ImageCard
            title="J.Marion Sims" 
            description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
            </ImageCard>
            <p>Des chirurgiens européens ont utilisé des patients africains et asiatiques pour tester différentes techniques de points de suture et de cicatrisation, ce qui a permis des avancées en chirurgie plastique et reconstructive.</p>
            </div>
        </div>    
        <div class="section">
           <h3>Le perfectionnement des césariennes</h3>
           <div class = "container droite">
            <ImageCard
            title="J.Marion Sims" 
            description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>
            Les expériences réalisées sur les femmes des colonies ont contribué à l’amélioration des techniques obstétriques, mais au prix de souffrances extrêmes.
        </p>
        </div>
    </div>  
    <div class="section">
        <h3>Les progrès en anesthésie et en soins post-opératoires</h3>
        <div class = "container gauche">
            <ImageCard
            title="J.Marion Sims" 
            description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>
            Certaines recherches sur la gestion de la douleur et la prévention des infections post-opératoires ont été menées sans consentement sur des peuples colonisés.
        </p>
        </div>
    </div>
    <h2>4. Une Mémoire Effacée : Pourquoi Ces Expériences Sont Peu Mentionnées ? </h2>
    <p>
        Si les avancées chirurgicales issues de ces pratiques sont reconnues dans le monde médical, l’origine de ces découvertes est largement occultée. Plusieurs raisons expliquent ce silence
    </p>
    <div class="section">
        <h3>Un récit médical centré sur les "grands hommes" occidentaux</h3>
    </div>
    <div class="container droite">
        <ImageCard
        title="J.Marion Sims" 
        description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
        <p>
            L’histoire de la médecine met en avant des figures comme Ambroise Paré, Joseph Lister ou encore Alexis Carrel, mais ne mentionne presque jamais les patients sacrifiés au nom du progrès.
        </p>
    </div>
    <div class="section">
        <h3>Une volonté d’effacer les crimes coloniaux    </h3>
    </div>
    <div class="container gauche">
        <ImageCard
        title="J.Marion Sims" 
        description="Pionnier de la gynécologie moderne">
        <!-- Image insérée via le slot -->
        <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv0b-ga5AXTJXk0hwI40gUDxjhi5sEx4F-4HLxq5-J99x37FwEMPAsKWF81hOp9oJ9u9nIjTGzngGu4N96a6GQK5HM23tzW8iGStQTpuVLr6vkQ4NHxQmnj2VjxVJ1rjqYyvyPN79zFjZy/s400/medical+2sims.jpg" style="width: 300px; height: auto;" class="image">
        </ImageCard>
    <p>
        Reconnaître que la chirurgie moderne repose en partie sur l’exploitation de populations colonisées remettrait en cause la morale des institutions médicales occidentales. Mais aussi, beaucoup de documents relatant ces expérimentations ont été détruits ou restent inaccessibles, rendant difficile la reconstitution exacte des faits.
    </p>
    </div>
    <h2>Conclusion</h2>
    <p>
        Les avancées chirurgicales qui sauvent aujourd’hui des millions de vies n’auraient pas été possibles sans des expériences passées, souvent inhumaines, réalisées sur des populations vulnérables. Si la médecine moderne se veut éthique, elle ne peut ignorer cet héritage. Reconnaître ces pratiques, leur impact et leurs victimes est un premier pas vers une médecine réellement humaniste et universelle.
    </p>
</div>
</template>
  
<style scoped>
.section {
  text-align: center; /* Centre le titre H3 */
  margin-bottom: 30px; /* Espace entre les sections */
}

.content {
  display: flex; /* Active le mode Flexbox */
  align-items: center; /* Aligne verticalement l’image et le texte */
  justify-content: center; /* Centre le tout horizontalement */
  gap: 20px; /* Espace entre l’image et le texte */
}

img {
  width: 150px; /* Ajuste la taille de l’image */
  height: auto; /* Garde les proportions */
}
.header {
    text-align: center; /* Centre tout */
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
.center {
    flex-direction: column; /* Image au-dessus du texte */
}
</style>
