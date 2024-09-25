<script>
  import Toolbar from "../../shared/components/toolbar.component.vue";

  export default {
    name:"Challenges",
      components:{
        Toolbar
      },methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<template>
<Toolbar/>
    <div class="challenges-container">
      <div class="challenges-content">
        <button class="back-button" @click="goBack">
          <i class="fas fa-arrow-left"></i> Atrás
        </button>
        <h2>Desafíos Financieros:</h2>

        <div class="challenges-cards">
          <div class="challenges-group">
            <div class="group-header">
              <h3>Desafíos Diarios</h3>
              <span><i class="fas fa-clock"></i> 12 horas</span>
            </div>
            <div class="challenge-card">
              <img src="/src/assets/light.png" alt="Icono Rayo" />
              <div class="challenge-details">
                <p>Leer dos temas de información financiera</p>
                <div class="progress-bar">
                  <div class="progress" :style="{ width: '41%' }"></div>
                </div>
                <span class="progress-percent">41%</span>
              </div>
            </div>
            <div class="challenge-card">
              <img src="/src/assets/pig.png" alt="Icono Alcancía" />
              <div class="challenge-details">
                <p>Ahorrar 10 soles en tu cuenta bancaria</p>
                <div class="progress-bar">
                  <div class="progress" :style="{ width: '25%' }"></div>
                </div>
                <span class="progress-percent">25%</span>
              </div>
            </div>
          </div>

          <!-- Desafíos Semanales -->
          <div class="challenges-group">
            <div class="group-header">
              <h3>Desafíos Semanales</h3>
              <span><i class="fas fa-clock"></i> 60 horas</span>
            </div>
            <div class="challenge-card">
              <img src="/src/assets/Girl.png" alt="Icono Amigos" />
              <div class="challenge-details">
                <p>Invitar a tres amigos a registrarse en Saifu</p>
                <div class="progress-bar">
                  <div class="progress" :style="{ width: '66%' }"></div>
                </div>
                <span class="progress-percent">66%</span>
              </div>
            </div>
            <div class="challenge-card">
              <img src="/src/assets/Reading.png" alt="Icono Libro" />
              <div class="challenge-details">
                <p>Terminar una unidad de información financiera</p>
                <div class="progress-bar">
                  <div class="progress" :style="{ width: '22%' }"></div>
                </div>
                <span class="progress-percent">22%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style>
div{
  font-family: 'Nunito', sans-serif;
}
/* Contenedor principal */
.challenges-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Contenido de los desafíos */
.challenges-content {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* Botón de retroceso */
.back-button {
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.back-button i {
  margin-right: 8px;
}

/* Título principal */
h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.challenges-cards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

/* Contenedor de cada grupo de desafíos */
.challenges-group {
  width: 48%;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.group-header h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.group-header span {
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
}

.group-header i {
  margin-right: 5px;
}

.challenge-card {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.challenge-card img {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.challenge-details {
  flex-grow: 1;
}

.challenge-details p {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.progress-bar {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  height: 30px;
  margin: 8px 0;
}

.progress {
  background-color: #7FD25B;
  height: 100%;
  border-radius: 5px;
}

.progress-percent {
  font-size: 14px;
  color: #666;
}
</style>