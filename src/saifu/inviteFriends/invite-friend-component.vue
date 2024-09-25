<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
    nextPage() {
      if (this.endRow < this.totalTransactions) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.startRow > 1) {
        this.currentPage--;
      }
    },
  },
}
</script>
<template>
  <div class="invite-friends-container">
    <header class="main-header">
    </header>
    <main class="main-content">
      <div class="content-wrapper">
        <section class="invite-section">
          <div class="invite-card">
            <div class="back-button-container">
              <button class="back-button" @click="goBack">← Atrás</button>
            </div>
            <h2 class="invite-title">Invitar amigos:</h2>

            <div class="invite-link-container">
              <p class="invite-description">
                Comparte el link para recomendar nuestra aplicación y obtener recompensas:
              </p>
              <p class="invite-link">https://usuario1/recomendar/xbeowo19/share</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<style scoped>

.invite-friends-container {
  align-items: center;
  display: flex;
  flex-direction: column;

}

.invite-card {
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 141px;
  font-family: Nunito, sans-serif;
  padding: 15px 80px 113px 19px;

}

.back-button-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.back-button {
  background-color: transparent;
  color: #000000;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: bold;
}

.back-button:hover {
  background-color: #f4f4f4;
}

.invite-title {
  color: #000;
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
  margin-left: 50px;
}

.invite-link-container {
  border-radius: 10px;
  justify-content: center;
  background-color: rgba(251, 251, 251, 0.77);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 27px;
  text-align: center;
  max-width: 100%;
  max-width: 1600px;
  margin-left: 50px;
  padding: 22px 30px;
  border: 1px solid rgba(57, 57, 57, 0.36);
}

.invite-description {
  color: #000;
  font-size: 23px;
  font-weight: 500;
  line-height: 1;
}

.invite-link {

  border-radius: 25px;
  background-color: #437f54;
  margin-top: 29px;
  font-size: 20px;
  color: #fff;
  line-height: 22px;
  padding: 15px 70px;
}

</style>
<script setup lang="ts">
</script>