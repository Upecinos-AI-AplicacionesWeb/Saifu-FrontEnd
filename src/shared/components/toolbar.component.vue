<script>
import Sidebar  from "./sidebar.component.vue";
import { useRouter } from 'vue-router';

export default {
  components: {
    Sidebar
  },
  setup() {
    const router = useRouter();

    function navigateToMainPage() {
      router.push('/');
    }

    return {
      navigateToMainPage
    }
  },
  data() {
    return {
      isSidebarVisible: false // Estado para controlar la visibilidad del sidebar
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Alternar visibilidad
    }
  }
}
</script>

<template>
  <div class="app-container">
    <div class="c-toolbar">
      <pv-toolbar>
        <template #start>

          <img src="../../assets/logo.png" width="20%">
          <h1 style="padding-left: 0.5rem;">Saifu</h1>

        </template>
        <template #end>
          <button class="hamburger-button" @click="toggleSidebar">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </template>
      </pv-toolbar>
    </div>

    <Sidebar v-if="isSidebarVisible" />

  </div>
</template>

<style>
.app-container {

}

.c-toolbar {
  background-color: #437F54;
  color: white;
  padding-left: 1rem;
  margin: 0;
  font-size: 1rem;
  position: relative;
  font-family: 'Nunito', sans-serif;

}

.hamburger-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 15px;
  display: inline-block;
}

.hamburger-button span {
  display: block;
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
}

</style>