<template>
  <div class="dashboard">
    <main class="main-content">
      <h1>Hola {{ person ? person.nombre : 'Usuario' }}, bienvenido a Saifu!</h1>
      <p class="subtitle">Explora una de las funcionalidades</p>
      <div class="dashboard-content">
        <div class="image-container">
          <img src="/path-to-main-page.png" alt="User using laptop" class="dashboard-image">
        </div>
        <div class="action-buttons">
          <button class="btn btn-primary" @click="showFinancialData">
            Registro de Transacciones
            <span class="arrow">›</span>
          </button>
          <button class="btn btn-primary" @click="showFinancialData">
            Registro de Datos Financieros
            <span class="arrow">›</span>
          </button>
          <button class="btn btn-primary" @click="showReports">
            Generador de reportes
            <span class="arrow">›</span>
          </button>
          <button class="btn btn-primary" @click="showEducation">
            Educación Financiera
            <span class="arrow">›</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { personService } from '../services/person.service';

export default {
  name: 'Dashboard',
  setup() {
    const person = ref(null);

    onMounted(async () => {
      try {
        const userId = 1; // Assuming we're using the first user
        person.value = await personService.getByUserId(userId);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    });

    const showFinancialData = () => {
      console.log('Navigate to financial data page');
    };

    const showReports = () => {
      console.log('Navigate to reports page');
    };

    const showEducation = () => {
      console.log('Navigate to education page');
    };

    return {
      person,
      showFinancialData,
      showReports,
      showEducation
    };
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.main-content {
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.dashboard-content {
  display: flex;
  gap: 2rem;
}

.image-container {
  flex: 1;
}

.dashboard-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
}

.action-buttons {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
}

.btn-primary:hover {
  background-color: #45a049;
}

.arrow {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .dashboard-content {
    flex-direction: column;
  }

  .image-container {
    order: -1;
  }
}
</style>