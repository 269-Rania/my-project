<script>
export default {
  props: {
    title: String,
    description: String
  }
};
</script>


<template>
    <div class="image-card">
      <h2>{{ title }}</h2>
      <!-- Slot pour l'image dynamique -->
      <div class="image-container">
        <slot></slot> <!-- Ici, on insère l'image via le slot -->
      </div>
      <p>{{ description }}</p>
    </div>
</template>
  

  
<style scoped>
  .image-card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
  }
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style>
  