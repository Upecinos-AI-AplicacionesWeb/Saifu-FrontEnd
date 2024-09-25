<template>
  <pv-card>
    <template #header>
      <div class="header-container">
        <pv-button class="left-aligned-button"><i class="pi pi-arrow-left"></i>Atras</pv-button>
      </div>
    </template>
    <template #title>
      <h2 class="main-card-title">¿Qué es una tasa crediticia?</h2>
    </template>
    <template #content>
      <div class="cards-container">
        <pv-card class="left-card">
          <template #header>
            <img src="../../assets/image3.jfif">
          </template>
          <template #footer>¿Qué es una tasa crediticia?</template>
        </pv-card>
        <div class="right-cards">
          <pv-card class="right-card">
            <template #title>
              <h3 class="inner-card-title">Tasa Crediticia</h3>
            </template>
            <template #content>
              <div class="card-content">
                <img src="../../assets/image4.png" class="small-image">
                <p class="inner-card-text">La tasa crediticia es el costo en porcentaje anual que un prestario paga al prestamista por un préstamo. Varía según el tipo de préstamo, la calidad crediticia y las condiciones del mercado.</p>
              </div>
            </template>
          </pv-card>
          <pv-card class="right-card">
            <template #title>
              <h3 class="inner-card-title">Gestión de tasa crediticia</h3>
            </template>
            <template #content>
              <p class="inner-card-text">La gestión de la tasa crediticia implica monitorear y ajustar los tipos de interés aplicados a préstamos o créditos para optimizar costos y riesgos financieros. Esto se hace para manetener la estabilidad financiera y garantizar condiciones competitivas en el mercado.</p>
            </template>
            <template #footer>
              <pv-button class="small-button" label="Descargar Material"></pv-button>
            </template>
          </pv-card>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: flex-start;
}

.left-aligned-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.main-card-title {
  text-align: left;
  font-size: 2rem;
  border-bottom: 2px solid #000;
  padding-bottom: 0.5rem;
  width: 100%;
}

.cards-container {
  display: flex;
  justify-content: space-between;
}

.left-card {
  flex: 1.5;
  margin-right: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombreado en la parte inferior */
}

.right-cards {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.right-card {
  flex: 1;
  margin-bottom: 1rem;
  height: calc(50% - 0.5rem); /* Ajusta la altura para que coincida con la card de la izquierda */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombreado en la parte inferior */
}

.small-image {
  width: 40%; /* Reduce el tamaño de la imagen */
  height: auto;
}

.inner-card-title {
  text-align: left;
  font-size: 1rem; /* Reduce el tamaño del título */
  padding-bottom: 0.5rem;
}

.inner-card-text {
  font-size: 0.875rem; /* Reduce el tamaño del texto */
}

.small-button {
  font-size: 0.875rem; /* Reduce el tamaño del botón */
  padding: 0.25rem 0.5rem; /* Ajusta el padding del botón */
}

.card-content {
  display: flex;
  align-items: center;
}
</style>