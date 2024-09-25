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
  <div class="recommend-app">

    <main class="main-content">
      <section class="recommendation-section">
        <div class="recommendation-container">
          <div class="back-button-container">
            <button class="back-button" @click="goBack">← Atrás</button>
          </div>
          <h2 class="section-title">Recomendar aplicación</h2>
          <hr class="section-divider" />
          <div class="share-link-box">
            <p class="share-instruction">Comparte el link para recomendar nuestra aplicación y obtener recompensas:</p>
            <div class="share-link">
              <span class="link-text">https://usuario1/recomendar/xbeowo19/share</span>
            </div>
          </div>
          <div class="rewards-box">
            <h3 class="rewards-title">Mis recompensas son:</h3>
            <hr class="rewards-divider" />
            <div class="rewards-info">
              <div class="reward-item">
                <p class="reward-description">Este es el número de usuarios que recomendaste la aplicación:</p>
                <div class="reward-value"></div>
              </div>
              <div class="reward-item">
                <p class="reward-description">Tu recompensa es de:</p>
                <div class="reward-value"></div>
              </div>
            </div>
            <div class="user-level">
              <img src="https://i.postimg.cc/RVXcr01y/free-user-icon-3296-thumb.png" alt="User avatar" class="user-avatar" />
              <div class="level-info">
                <p class="level-text">Nivel 2</p>
                <div class="level-progress">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1640c187b08a570fd2431231f044e299896ee2798b16bc6edfa7784c6afefe92?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" class="level-icon" alt="Level start" />
                  <div class="progress-bar">
                    <div class="progress-fill"></div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5498e92d70657ad3bfd2f43ad2302f6e6760fa8ce703970d4e9866fdde4fb41?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" class="level-icon" alt="Level end" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
.recommend-app {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-content {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.recommendation-section {
  flex: 2;
  padding: 27px 1px 1px 132px;
}

.recommendation-container {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 27px 80px 73px 19px;
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

.section-title {
  color: #000;
  font: 700 30px/2 Nunito, sans-serif;
  margin-left: 15px;
}

.section-divider {
  width: 100%;
  border-bottom: 2px solid #757575;
  margin-bottom: 12px;
}

.share-link-box {
  background-color: rgba(251, 251, 251, 0.77);
  border: 1px solid rgba(57, 57, 57, 0.36);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 1px;
  margin-bottom: 22px;
  padding: 6px 96px 20px;
}

.share-instruction {
  color: #000;
  font: 500 23px/1 Nunito, sans-serif;
  margin-bottom: 22px;
  text-align: center;
  font-weight: bold;
}

.share-link {
  background-color: #437f54;
  border-radius: 25px;
  color: #fff;
  padding: 15px 25px;
  font: 400 20px/22px Nunito, sans-serif;
  text-align: center;
}

.rewards-box {
  background-color: #fff;
  border: 1px solid rgba(57, 57, 57, 0.36);
  border-radius: 20px;
  margin-top: 15px;
  padding: 10px 40px 20px;
}

.rewards-title {
  color: #000;
  font: 700 23px/3 Nunito, sans-serif;
  margin: auto;
}

.rewards-divider {
  border: 2px solid #757575;
  width: 323px;
  margin-bottom: 33px;
  margin-left: 0px;
}

.rewards-info {
  background-color: rgba(251, 251, 251, 0.77);
  border: 1px solid rgba(57, 57, 57, 0.36);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 23px 21px;
  font: 500 19px Nunito, sans-serif;
  color: #000;
}

.reward-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;
}

.reward-value {
  background-color: #dfdfdf;
  border: 1px solid #bababa;
  border-radius: 6px;
  width: 65px;
  height: 33px;
}

.user-level {
  display: flex;
  margin-top: 27px;
}

.user-avatar {
  width: 196px;
  height: 224px;
  object-fit: cover;
  filter: invert(28%) sepia(47%) saturate(3000%) hue-rotate(105deg) brightness(70%);
}

.level-info {
  margin-left: 20px;
}

.level-text {
  color: #000;
  font: 700 31px/1 Nunito, sans-serif;
  margin-bottom: 17px;
}

.level-progress {
  display: flex;
  align-items: center;
}

.level-icon {
  width: 96px;
  height: 75px;
  object-fit: contain;
}

.progress-bar {
  background-color: #d9d9d9;
  border-radius: 10px;
  height: 24px;
  width: 304px;
  margin: 0 10px;
}

.progress-fill {
  background-color: #4d6443;
  border-radius: 10px;
  height: 100%;
  width: 70%;
}


@media (max-width: 991px) {

  .section-title {
    margin-left: 10px;
  }

  .recommendation-container {
    padding: 27px 20px 73px;
  }

  .share-link-box,
  .rewards-info {
    padding: 20px;
  }

  .rewards-divider {
    max-width: 100%;
  }

  .user-level {
    flex-direction: column;
  }

  .level-info {
    margin-left: 0;
    margin-top: 20px;
  }

}
</style>