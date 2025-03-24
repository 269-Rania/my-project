<script setup>
import { ref } from 'vue'; 

defineProps({
  msg: String,
})
const count = ref(0)
import { useHistoryStore } from '@/stores/useHistoryStore';

const historyStore = useHistoryStore();
</script>


<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div>
    <h1>Les Cobayes de l'Histoire</h1>
    <ul>
      <li v-for="story in historyStore.stories" :key="story.id">
        <img :src="story.image" :alt="story.title">
        <h3>{{ story.title }}</h3>
        <p>{{ story.description }}</p>
        <button @click="historyStore.selectStory(story)">Voir plus</button>
      </li>
    </ul>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&display=swap" rel="stylesheet">
  </link>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
