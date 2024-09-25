<template>
  <pv-card class="add-transaction-card">
    <!-- Botón de regreso -->
    <template #header>
      <div class="back-button-container">
        <button class="back-button" @click="goBack">← Atrás</button>
      </div>
      <h2>Agregar Transacción</h2>
    </template>

    <!-- Contenido del card -->
    <template #content>
      <div class="transaction-fields">
        <!-- Producto y Precio -->
        <pv-card class="prod-preci">
          <template #content>
            <div class="field-horizontal">
              <!-- Producto -->
              <div class="field">
                <label for="producto" id="productosid">Producto:</label>
                <input type="text" id="producto" v-model="producto" placeholder="Ingrese el nombre del producto" class="input-producto" />
              </div>

              <!-- Precio -->
              <div class="field">
                <label for="precio">Precio:</label>
                <div class="input-precio-container">
                  <span>S/</span>
                  <input type="number" id="precio" v-model="precio" placeholder="Ingrese el precio" class="input-precio" />
                </div>
              </div>
            </div>
          </template>
        </pv-card>

        <!-- Detalles -->
        <pv-card class="prod-det">
          <template #content>
            <div class="field-vt">
              <label for="detalles">Agregar Detalles:</label>
              <textarea
                  id="detalles"
                  v-model="detalles"
                  placeholder="Ingrese los detalles de la transacción"
                  class="input-detalles"
                  :disabled="sinDetalles"
              ></textarea>
              <div class="checkbox-container">
                <input type="checkbox" id="sin-detalles" v-model="sinDetalles" />
                <label for="sin-detalles">No deseo agregar detalles</label>
              </div>
            </div>
          </template>
        </pv-card>
      </div>
    </template>

    <!-- Botones del footer -->
    <template #footer>
      <div class="footer-buttons">
        <pv-button label="Guardar" class="guardar-button" @click="guardarTransaccion" />
        <pv-button label="Regresar" class="regresar-button" @click="goBack" />
      </div>
    </template>
  </pv-card>
</template>

<script>
export default {
  data() {
    return {
      producto: '',
      precio: 0,
      detalles: '',
      sinDetalles: false,
    };
  },
  methods: {
    guardarTransaccion() {
      // Lógica para guardar la transacción
      console.log('Transacción guardada:', {
        producto: this.producto,
        precio: this.precio,
        detalles: this.sinDetalles ? 'Sin detalles' : this.detalles,
      });
    },
    goBack() {
      this.$router.go(-1); // Navegar hacia atrás
    },
  },
};
</script>

<style scoped>
.add-transaction-card {
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  font-family: 'Nunito', sans-serif;
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

.transaction-fields {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field-horizontal {
  justify-content: space-between;
  gap: 2rem;
}

.field {
  display: flex;
  margin-bottom: 1rem;
}

.field label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input-producto,
.input-precio {
  width: 80%;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #e0e0e0; /* Fondo gris claro como en la imagen */
  margin-left: auto;
}

.input-precio-container {
  width: 10rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 3.5rem;


}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
}

.guardar-button {
  background-color: #437f54;
  color: white;
  padding: 10px 2rem;
  border-radius: 50px;
}

.regresar-button {
  background-color: transparent;
  color: #437f54;
  border: 2px solid #437f54;
  padding: 10px 2rem;
  border-radius: 50px;
}

.prod-preci {
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.prod-det {
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.field-vt {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-detalles {
  width: 100%;
  height: 150px; /* Altura del textarea */
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #e0e0e0; /* Fondo gris */
  resize: none; /* Deshabilita el resize */
}

.input-detalles:disabled {
  background-color: #f4f4f4;
  cursor: not-allowed;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.checkbox-container input {
  width: 20px;
  height: 20px;
}

.checkbox-container label {
  font-size: 0.9rem;
  color: #333;
}
</style>
