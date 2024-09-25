<script>
import Toolbar from "../../shared/components/toolbar.component.vue";
export default {
  name:"Plan",
  components:{
    Toolbar
  }
}
</script>

<template>
  <Toolbar/>
  <div class="plan-subscription-container">
  <!-- Contenido de suscripción de planes -->
  <div class="plan-subscription">
    <h1>Selecciona un plan</h1>
    <div class="plans-container">
      <!-- Plan Básico -->
      <div class="plan-card basic">
        <h2>Básico</h2>
        <p class="price">S/10 <span>/month      </span></p>
        <ul class="features">
          <li><span class="check-icon">✔</span>Registrar tres miembros</li>
          <li><span class="check-icon">✔</span>Generar 03 reportes max</li>
        </ul>
        <button class="accept-button outlined-button">Acepto</button>
      </div>

      <!-- Plan Regular -->
      <div class="plan-card regular">
        <div class="recommendation">Recomendación de SAIFU</div>
        <h2>Regular</h2>
        <p class="price">S/35,85 <span>/month</span></p>
        <ul class="features">
          <li><span class="check-icon">✔</span>Acceso a material educativo adicional</li>
          <li><span class="check-icon">✔</span>Creación de foros en comunidad</li>
        </ul>
        <button class="accept-button outlined-button">Acepto</button>
      </div>

      <!-- Plan Premium -->
      <div class="plan-card premium">
        <h2>Premium</h2>
        <p class="price">S/67,75 <span>/month</span></p>
        <ul class="features">
          <li><span class="check-icon">✔</span>Creación de biblioteca virtual</li>
          <li><span class="check-icon">✔</span>Acceso a información de alta calidad</li>
          <li><span class="check-icon">✔</span>Registro ilimitado de datos financieros</li>
        </ul>
        <button class="accept-button outlined-button">Acepto</button>
      </div>

    </div>
  </div>
  </div>
</template>

<style>
div{
  font-family: 'Nunito', sans-serif;
}
.plan-subscription-container {
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.plan-subscription h1 {
  font-size: 36px;
  font-weight: bold;
  color: white;
}

.plans-container {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 40px;
}

.plan-card {
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 280px;
  padding: 30px;
  margin: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.basic {
  height: 400px;
}
.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.plan-card h2 {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 15px;
  color: white;
  text-align: left;
}
.regular h2{
  color: #000000;
  font-weight: normal;
  font-size: 24px;
}
.price {
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0 12px 0;
  color: white;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 6px;
}

.price span {
  font-size: 12px;
  font-weight: normal;

}

.features {
  padding: 0;
  margin: 20px 0;
}

.features li {
  font-size: 16px;
  color: white;
  margin-bottom: 5px;
  display: flex;
  text-align: left;
}

.check-icon {
  color: white;
  margin-right: 10px;
  font-weight: bold;
}
.regular .features .check-icon{
  color:#000000;
}
.outlined-button {
  background-color: #fff;
  border: 2px solid #ddd;
  color: #333;
  padding: 10px 25px;
  border-radius: 25px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.outlined-button:hover {
  background-color: #f9f9f9;
  border-color: #ccc;
}
.basic {
  background-color: #E8D4A1;
  border: 2px solid #e0bfb8;
}

.regular {
  background-color: #fff;
  border: 2px solid #ffd54f;
}
.regular .features li,.regular .price {
  color:#000000;
}

.regular .recommendation {
  background-color: #ffd54f;
  color: #fff;
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: inline-block;
}

.premium {
  background-color: #F6B205;
  color: white;
  border: 2px solid #ffd54f;
}

.premium .features li {
  color: white;
}
.regular{
  margin: -40px 0;
}
</style>