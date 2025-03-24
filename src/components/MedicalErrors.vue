<template>
    <div>
      <!-- Bouton Flottant -->
      <button @click="fetchData" class="fetch-button">Les Cobayes du présent</button>
  
      <!-- Boîte Modale -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <h3>Les Cobayes du présent</h3>
          <div v-if="loading">Chargement...</div>
          <div v-else>
            <ul v-if="errors.length > 0">
              <li v-for="error in errors" :key="error.safetyreportid">
                <strong>Médicament :</strong> {{ error.patient?.drug[0]?.medicinalproduct || "Non précisé" }} <br>
                <strong>Effet :</strong> {{ error.patient?.reaction[0]?.reactionmeddrapt || "Non précisé" }} <br>
                <strong>Pays :</strong> {{ error.occurcountry || "Non spécifié" }} <br>
                <strong>Date :</strong> {{ error.receivedate }}
                <hr>
              </li>
            </ul>
            <p v-else>Aucune donnée trouvée.</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  name: 'MedicalErrors',
    data() {
      return {
      errors: [],
      showModal: false,
      loading: false,
      };
    },
    methods: {
      fetchData() {
        this.showModal = true;
        this.loading = true;
        fetch("https://api.fda.gov/drug/event.json?limit=5")
          .then(response => response.json())
          .then(data => {
            this.errors = data.results || [];
            this.loading = false;
          })
          .catch(error => {
            console.error("Erreur :", error);
            this.loading = false;
          });
      }
    }
  };
</script>
  
<style>
  /* Bouton flottant */
.fetch-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #875c05;
    color: rgb(11, 0, 0);
    border: none;
    font-family: "Cinzel", serif;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}
  
.fetch-button:hover {
    background-color: #5b3b06;
}
  
  /* Modale */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(249, 242, 242, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: rgb(19, 2, 2);
    padding: 20px;
    border-radius: 5px;
    width: 400px;
    max-width: 90%;
}
.close {
    float: right;
    font-size: 24px;
    cursor: pointer;
}
  
.close:hover {
    color: rgb(138, 88, 3);
}
</style>
  