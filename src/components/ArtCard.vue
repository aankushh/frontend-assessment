<template>
  <div class="art-card">
    <img :src="art.imageUrl" alt="Art Image" class="art-image" />
    <div class="art-info">
      <h3>{{ art.title }}</h3>
      <p>{{ art.type }}</p>
      <div class="details">
        <span class="dot" :class="art.colorClass"></span>
        <span class="year">{{ art.year }}</span>
      </div>
      <button class="select-button" @click="selectArt(art.id)">select</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['art'])

function selectArt(id) {
  console.log('Add Emit event to get more data with', id)
}
</script>

<style scoped>
.art-card {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
}

.art-image {
  width: 250px;
  height: 250px;
  border-radius: 12px;
  object-fit: cover;
}

.art-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  width: 100%;
}

h3 {
  font-size: 16px;
  font-weight: 600;
}

p {
  font-size: 14px;
  color: #666;
}

.details {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.year {
  font-weight: 500;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
}

.select-button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;
}

.select-button:hover {
  background-color: #333;
}

/* Adding specific colors to match the design */
.dot.yellow {
  background-color: #ffd700;
}

.dot.red {
  background-color: #ff4500;
}

.dot.blue {
  background-color: #00bfff;
}

.dot.green {
  background-color: #32cd32;
}

@media (max-width: 758px) {
  .art-image {
    width: 165px;
    height: 165px;
    border-radius: 8px;
    object-fit: cover;
  }
  h3 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  .select-button {
    font-size: 10px;
    padding: 6px 12px;
  }
}
</style>
