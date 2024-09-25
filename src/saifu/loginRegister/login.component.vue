<template>
  <div class="auth-container">
    <pv-card class="auth-card">
      <template #content>
        <div class="content-wrapper">
          <img src="../../assets/LoginRegisterImage.png" alt="Crear Cuenta Saifu" class="auth-image" />

          <div class="auth-form">
            <h2>Bienvenidos a Saifu!</h2>
            <p>Para usar la aplicación, por favor <span @click="setActiveTab('login')">inicia sesión</span> o <span @click="setActiveTab('register')">regístrate</span></p>

            <!-- Pestañas -->
            <div class="tabs">
              <button
                  :class="['tab-button', { active: activeTab === 'login' }]"
                  @click="setActiveTab('login')"
              >
                Iniciar Sesión
              </button>
              <button
                  :class="['tab-button', { active: activeTab === 'register' }]"
                  @click="setActiveTab('register')"
              >
                Regístrate
              </button>
            </div>

            <!-- Contenido dinámico -->
            <div v-if="activeTab === 'login'" class="login-form">
              <form @submit.prevent="login">
                <input type="email" placeholder="Correo electrónico" class="input-field" />
                <input type="password" placeholder="Contraseña" class="input-field" />
                <div class="remember-section">
                  <input type="checkbox" id="remember" v-model="rememberMe" />
                  <label for="remember">Recordarme</label>
                </div>
                <pv-button label="Iniciar Sesión" class="auth-button" />
                <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
              </form>
            </div>

            <div v-if="activeTab === 'register'" class="register-form">
              <form @submit.prevent="register">
                <input type="text" placeholder="Nombre de usuario" class="input-field" />
                <input type="email" placeholder="Correo electrónico" class="input-field" />
                <input type="password" placeholder="Contraseña" class="input-field" />
                <ul class="password-requirements">
                  <li>Al menos un carácter en mayúscula y minúscula</li>
                  <li>Al menos un número</li>
                  <li>Al menos un carácter especial</li>
                  <li>Al menos 8 caracteres</li>
                </ul>
                <div class="terms-section">
                  <input type="checkbox" id="accept-terms" v-model="acceptTerms" />
                  <label for="accept-terms">He leído y acepto los <a href="#">Términos y Condiciones</a></label>
                </div>
                <pv-button label="Crear Cuenta" class="auth-button" />
              </form>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'login', // Pestaña activa por defecto
      rememberMe: false,
      acceptTerms: false,
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    login() {
      // Lógica para iniciar sesión
      console.log('Iniciando sesión...');
    },
    register() {
      // Lógica para registrar un usuario
      if (!this.acceptTerms) {
        alert('Debes aceptar los términos y condiciones');
        return;
      }
      console.log('Registrando usuario...');
    }
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Nunito', sans-serif;
}

.auth-card {
  max-width: 900px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.content-wrapper {
  display: flex;
}

.auth-image {
  max-width: 300px;
  margin-right: 2rem;
}

.auth-form {
  width: 100%;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1.5rem;
}

.tabs {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
}

.tab-button {
  flex: 1;
  padding: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #777;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease;
}

.tab-button.active {
  color: #000;
  border-bottom: 2px solid #000;
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.auth-button {
  background-color: #437f54;
  color: white;
  padding: 10px 2rem;
  border-radius: 50px;
  cursor: pointer;
}

.forgot-password {
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #777;
}

.password-requirements {
  list-style: none;
  padding: 0;
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 1rem;
}

.terms-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.terms-section label a {
  color: #437f54;
  text-decoration: none;
}

.terms-section label a:hover {
  text-decoration: underline;
}
</style>
