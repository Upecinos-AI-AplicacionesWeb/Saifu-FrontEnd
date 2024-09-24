<script>
export default {
  methods: {
    selectItem(item) {
      console.log(`Seleccionaste: ${item.name}`);
      // Aquí puedes implementar la navegación o cualquier acción necesaria
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <ul>
      <li>
        <button>
          <i class="pi pi-user"></i>
          Usuario
        </button>
      </li>
      <li>
        <button>
          <i class="pi pi-info-circle"></i>
          Información de la aplicación
        </button>
      </li>
      <li>
        <button>
          <i class="pi pi-users"></i>
          Invitar Amigos
        </button>
      </li>
      <li>
        <button>
          <i class="pi pi-headset"></i>
          Servicio al cliente
        </button>
      </li>
      <li>
        <button>
          <i class="pi pi-bell"></i>
          Notificaciones
        </button>
      </li>
      <li>
        <button>
          <i class="pi pi-dollar"></i>
          Suscripción
        </button>
      </li>
      <li>
        <button>
          <i class="pi pi-thumbs-up"></i>
          Recomendar Aplicación
        </button>
      </li>
      <li>
        <button>
          <i class="pi pi-sign-out"></i>
          Cerrar Sesión
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #fff;
  padding: 15px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 5.5rem;
  top: 5.9rem;
  right: 0;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 15px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.sidebar button {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
}

.sidebar button i {
  font-size: 1.5rem;
  margin-right: 15px;
  color: #000;
}

.sidebar li:hover button {
  background-color: #e0e0e0;
  border-radius: 5px;
}

.sidebar li:hover button i {
  color: #437F54; /* Color del ícono al hacer hover */
}
</style>