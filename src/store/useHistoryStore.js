import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('example', {
  state: () => ({
    count: 0,
    name: 'Pinia Store'
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})
