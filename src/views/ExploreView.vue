<template>
  <div class="explore-view">
    <Header />

    <div class="search-bar">
      <input type="text" placeholder="Search by artwork, artist name..." />
    </div>

    <div class="tabs">
      <button class="tab">Home</button>
      <button class="tab active">Explore</button>
      <button class="tab">Create</button>
      <button class="tab">Settings</button>
    </div>

    <div class="filters">
      <span>collection</span>
      <span>type</span>
      <span>year</span>
      <span>virtual gallery</span>
    </div>

    <div class="gallery">
      <ArtCard v-for="art in artCollection" :key="art.id" :art="art" @select-art="handleSelect" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useArtStore } from '@/store'
import ArtCard from '@/components/ArtCard.vue'
import Header from '@/components/PageHeader.vue'

const store = useArtStore()

const artCollection = computed(() => store.artCollection)

function handleSelect(id) {
  store.selectArt(id)
}

store.fetchArtCollection()
</script>

<style scoped>
.explore-view {
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.search-bar {
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
}

.search-bar input {
  width: 100%;
  max-width: 300px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
}

.tabs {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
}

.tab {
  padding: 8px 16px;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  transition: all 0.3s ease;
}

.tab.active {
  background-color: #000;
  color: #fff;
}

.filters {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #777;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: start;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
