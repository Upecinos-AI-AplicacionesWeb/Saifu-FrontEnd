<script setup>
import { ref, computed } from 'vue';
import image1 from '../../assets/image1.jfif';
import image2 from '../../assets/image2.jfif';
import image3 from '../../assets/image3.jfif';

const searchTerm = ref('');
const cards = [
  { id: 1, title: 'Crédito al consumidor', image: image1 },
  { id: 2, title: 'Política Monetaria', image: image2 },
  { id: 3, title: '¿Qué es una tasa crediticia?', image: image3 },
  { id: 4, title: 'Crédito al consumidor', image: image1 },
  { id: 5, title: 'Política Monetaria', image: image2 },
  { id: 6, title: '¿Qué es una tasa crediticia?', image: image3 },
];

const filteredCards = computed(() => {
  return cards.filter(card => card.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
});
</script>
<template>
  <pv-card>
    <template #header>
      <div class="header-container">
        <pv-button>Atras</pv-button>
      </div>
    </template>
    <template #content>
      <div class="search-container">
        <pv-input-text v-model="searchTerm" placeholder="Buscar" class="search-bar" />
        <i class="pi pi-search search-icon"></i>
      </div>
      <div class="card-container">
        <pv-card v-for="card in filteredCards" :key="card.id" class="inner-card">
          <template #header>
            <img :alt="card.title" :src="card.image" class="card-image" />
          </template>
          <template #footer>
            <div class="card-content">
              <p class="card-title">{{ card.title }}</p>
              <pv-button class="play-button">
                <div class="button-content">
                  Reproducir
                  <i class="pi pi-play play-icon"></i>
                </div>
              </pv-button>
            </div>
          </template>
        </pv-card>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: flex-start;
}

.search-container {
  position: relative;
  margin-bottom: 1rem;
}

.search-bar {
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #333;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.inner-card {
  flex: 1 1 calc(33.333% - 1rem);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-image {
  width: 100%;
  height: 200px; /* Altura fija para todas las imágenes */
  object-fit: cover; /* Ajusta la imagen para que cubra el área sin distorsión */
}

.card-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

.card-title {
  flex: 1;
  margin: 0;
}

.play-button {
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}

.button-content {
  display: flex;
  align-items: center;
}

.play-icon {
  margin-left: 8px;
  font-size: 1.2rem;
}
</style>