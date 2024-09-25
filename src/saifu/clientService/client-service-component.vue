<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
    nextPage() {
      if (this.endRow < this.totalTransactions) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.startRow > 1) {
        this.currentPage--;
      }
    },
  },
}
</script>
<template>
  <section class="customer-service">
    <div class="service-container">
      <div class="back-button-container">
        <button class="back-button" @click="goBack">← Atrás</button>
      </div>
      <h1 class="service-title">Servicio al cliente:</h1>
      <hr class="divider" />
      <article class="contact-info">
        <p class="contact-details">
          <span>Si quiere contactarse con nosotros puede escriba al siguiente número: </span>
          <strong>936789014</strong>
          <br /><br />
          <span>También, puede comunicarse mediante el correo: </span>
          <strong>contacto@saifu.pe</strong>
          <br /><br />
          <span>Contactenos en nuestras redes sociales:</span>
        </p>
        <div class="social-icons">
          <img loading="lazy" src="https://i.postimg.cc/0jpq4QzB/Instagram-icon.png" alt="Social media icon" class="social-icon" />
          <img loading="lazy" src="https://i.postimg.cc/Gp73PHDP/Whats-App-icon.png" alt="Social media icon" class="social-icon" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed16e8ec6bd8013e82e55002ccb27cdfe41c0c046f30bd6892a195b3b555c44?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" alt="Social media icon" class="social-icon" />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>

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
.customer-service {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 56px 80px;
}

.service-container {
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 1019px;
  max-width: 100%;
  flex-direction: column;
  padding: 23px 80px 52px 19px;
}

.service-title {
  color: #000;
  align-self: start;
  margin: 7px 0 0 43px;
  font: 700 30px/2 Nunito, sans-serif;
}

.divider {
  align-self: end;
  margin-top: 35px;
  width: 868px;
  max-width: 100%;
  height: 2px;
  border: 2px solid #757575;
}

.contact-info {
  border-radius: 15px;
  background-color: rgba(251, 251, 251, 0.77);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  align-self: end;
  display: flex;
  margin-top: 23px;
  width: 868px;
  max-width: 100%;
  flex-direction: column;
  padding: 39px 69px 24px 27px;
  border: 1px solid rgba(57, 57, 57, 0.36);
}

.contact-details {
  color: #000;
  font: 500 20px/20px Nunito, sans-serif;
}

.social-icons {
  align-self: center;
  display: flex;
  margin-top: 15px;
  width: 306px;
  max-width: 100%;
  align-items: start;
}

.social-icon {
  aspect-ratio: 0.95;
  object-fit: contain;
  object-position: center;
  width: 103px;
  max-width: 100%;
}

@media (max-width: 991px) {
  .customer-service {
    padding: 100px 20px;
  }

  .service-container {
    padding-right: 20px;
  }

  .service-title {
    margin-left: 10px;
  }

  .contact-info {
    padding: 0 20px;
  }

  .contact-details {
    max-width: 100%;
  }
}
</style>