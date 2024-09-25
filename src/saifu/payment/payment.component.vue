<script>
import Toolbar from "../../shared/components/toolbar.component.vue";
export default {
  name:"Payment",
  components:{
    Toolbar
  },data() {
    return {
      paymentData: {
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        email: ''
      }
    };
  },
  methods: {
    submitPayment() {
      console.log('Datos de pago enviados:', this.paymentData);
    }
  }
}
</script>

<template>
  <Toolbar/>
  <div class="payment-container">
    <div class="payment-content">
      <div class="payment-form">
        <h2>Información de pago</h2>
        <form @submit.prevent="submitPayment">
          <div class="form-group">
            <label for="cardholder-name">Nombre del propietario</label>
            <input type="text" id="cardholder-name" v-model="paymentData.name" placeholder="Nombre del propietario" />
          </div>
          <div class="form-group">
            <label for="card-number">Número de tarjeta</label>
            <input type="text" id="card-number" v-model="paymentData.cardNumber" placeholder="Número de tarjeta" />
          </div>
          <div class="form-group-row">
            <div class="form-group">
              <label for="expiry-date">Fecha de vencimiento</label>
              <input type="text" id="expiry-date" v-model="paymentData.expiryDate" placeholder="MM / AA" />
            </div>
            <div class="form-group">
              <label for="cvc">CVC</label>
              <input type="text" id="cvc" v-model="paymentData.cvc" placeholder="CVC" />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" v-model="paymentData.email" placeholder="Correo electrónico" />
          </div>
          <button type="submit" class="confirm-button">Confirmar</button>
        </form>
      </div>

      <div class="payment-image">
        <img src="/path-to-main-page.png" alt="Payment Image" />
      </div>
    </div>
  </div>
</template>

<style>
div{
  font-family: 'Nunito', sans-serif;
}
.payment-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.payment-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
}

.payment-form {
  width: 50%;
}

.payment-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-group-row {
  display: flex;
  justify-content: space-between;
}

.form-group-row .form-group {
  width: 48%;
}

.confirm-button {
  background-color: #d7b581;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.confirm-button:hover {
  background-color: #c49c6b;
}

.payment-image {
  width: 45%;
}

.payment-image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>