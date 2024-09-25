<script setup>
</script>

<template>
  <pv-card>
    <template #header>
      <pv-button class="left-aligned-button">
        <i class="pi pi-arrow-left"></i>
        Atras
      </pv-button>
    </template>
    <template #title>
      <h2 class="card-title">Información de la aplicación</h2>
    </template>
    <template #content>
      <pv-card class="inner-card">
        <template #title>
          <h3 class="inner-card-title">Sobre la Startup</h3>
        </template>
        <template #content>
          <div class="card-content">
            <img src="../../assets/logo-startup.png" class="left-image">
            <p class="right-text">Upecinos.AI, somos un grupo de jóvenes quienes buscan impulsar la educación financiera en el Perú. Para ello, se confronta el analfabetismo financiero y el desconocimiento del consumo responsable en los hogares peruanos. Upecinos.AI busca cambiar el paradigma a través de Saifu.
            </p>
          </div>
        </template>
      </pv-card>
      <pv-card class="inner-card">
        <template #title>
          <h3 class="inner-card-title">Sobre el Servicio</h3>
        </template>
        <template #content>
          <div class="card-content-reverse">
            <p class="left-text">El sistema "Saifu" es una plataforma dirigida a los jefes del hogar en los niveles económicos D y E en Perú.
              Esta herramienta innovadora utiliza proyecciones macroeconómicas proporcionadas por el Banco de la Nación para
              permitir una planificación precisa del presupuesto familiar. El objetivo principal es impulsar el consumo
              responsable y fomentar el ahorro.
            </p>
            <img src="../../assets/logo-saifu.png" class="right-image">
          </div>
        </template>
      </pv-card>
    </template>
  </pv-card>
</template>

<style scoped>
.left-aligned-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.card-title {
  text-align: left;
  font-size: 1.5rem; /* Aumenta el tamaño del texto */
  border-bottom: 1px solid #000; /* Agrega una línea debajo del título */
  padding-bottom: 0.5rem; /* Espacio entre el texto y la línea */
}

.inner-card-title {
  text-align: left;
  font-size: 1.25rem; /* Aumenta el tamaño del texto */
  border-bottom: 1px solid #000; /* Agrega una línea debajo del título */
  padding-bottom: 0.5rem; /* Espacio entre el texto y la línea */
}

.card-content {
  display: flex;
  align-items: center;
}

.left-image {
  margin-right: 1rem;
}

.right-text {
  text-align: justify;
  flex: 1;
}

.card-content-reverse {
  display: flex;
  align-items: center;
}

.left-text {
  text-align: left;
  flex: 1;
  margin-right: 1rem;
}

.right-image {
  margin-left: 1rem;
}

.inner-card {
  border: 2px solid #000; /* Aumenta el grosor del borde y cambia su color */
  padding: 1rem; /* Agrega un poco de padding */
  border-radius: 8px; /* Opcional: agrega bordes redondeados */
  margin-bottom: 1rem; /* Agrega espaciado entre las cards */
}
</style>