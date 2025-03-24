<script setup>
import { useHistoryStore } from '../store/useHistoryStore'

const store = useHistoryStore()
const incrementCount = () => {
  store.increment()
}
</script>

<template>
  <div>
    <h1>{{ store.name }}</h1>
    <p>Compteur : {{ store.count }}</p>
    <p>Compteur x2 : {{ store.doubleCount }}</p>
    <button @click="incrementCount">Incrémenter</button>
  </div>
</template>
