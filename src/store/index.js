import { defineStore } from 'pinia'
import artService from '@/services/artService'

export const useArtStore = defineStore('art', {
  state: () => ({
    artCollection: [],
    selectedArt: null
  }),
  actions: {
    async fetchArtCollection() {
      this.artCollection = await artService.getArtCollection()
    },
    selectArt(id) {
      this.selectedArt = this.artCollection.find((art) => art.id === id)
    }
  }
})
