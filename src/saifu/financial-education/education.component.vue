<template>
  <Toolbar />
  <div class="financial-education-container">
    <div class="financial-education-menu">
      <div class="menu-content">

        <div class="menu-header">
          <div class="menu-info">
            <h2>Información Financiera</h2>
            <p>Explora los diferentes temas sobre educación financiera</p>
          </div>
          <!-- Contenedor de la imagen -->
          <div class="menu-image-container">
            <img src="/path-to-main-page.png"alt="Financial Education" class="menu-image" />
          </div>
        </div>

        <!-- Botones del menú -->
        <div class="menu-buttons">
          <button
              v-for="item in menuItems"
              :key="item.id"
              @click="navigateToItem(item.path)"
              class="menu-button">
            {{ item.label }}
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../../shared/components/toolbar.component.vue"

export default {
  name: "Education",
  components: {
    Toolbar
  },
  data() {
    return {
      menuItems: [
        {id: 1, label: 'Tasa Crediticia', path: '/credit-rate'},
        {id: 2, label: 'Funcionamiento de las entidades financieras', path: '/financial-entities'},
        {id: 3, label: 'Gestión y Planificación de Gastos', path: '/expense-management'},
        {id: 4, label: 'Métodos de Ahorro', path: '/saving-methods'},
        {id: 5, label: 'Consumo Responsable e Inversiones', path: '/responsible-consumption'},
        {id: 6, label: 'Desafíos Financieros', path: '/challenges'}
      ]
    };
  },
  methods: {
    navigateToItem(path) {
      // Método para navegar a un ítem específico del menú
      this.$router.push({path});
    },
    navigateToChallenges() {
      // Método para navegar a la sección de desafíos financieros
      this.$router.push({name: "FinancialChallenges"});
    }
  }
};
</script>
<style scoped>
  div{
    font-family: 'Nunito', sans-serif;
  }
  .financial-education-container {
    max-width: 1000px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

  .financial-education-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .menu-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

  .menu-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding-right: 20px;
}

  .menu-info {
    margin-bottom: 20px;
}

  .menu-info h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

  .menu-info p {
  margin: 5px 0;
  color: #777;
}

  .menu-image-container {
  display: flex;
  justify-content: center;
}

  .menu-image {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  object-fit: cover;
}

  .menu-buttons {
  display: flex;
  flex-direction: column;
  width: 50%;
}

  .menu-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
}

  .menu-button:hover {
    background-color: #45a049;
}

  .arrow-icon {
    font-size: 18px;
  color: #ffffff;
}

  .challenge-button {
    background-color: #388E3C;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

  .challenge-button:hover {
    background-color: #2e7d32;
}
</style>
