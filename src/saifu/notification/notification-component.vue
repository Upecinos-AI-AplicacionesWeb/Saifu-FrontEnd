<script>
import ToolbarComponent from "../../shared/components/toolbar.component.vue";

export default {
  components: {ToolbarComponent},
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
  <div>
    <ToolbarComponent/>
  </div>
  <main class="notifications-page">
    <section class="notifications-container">
      <header class="notifications-header">
        <div class="back-button-container">
          <button class="back-button" @click="goBack">← Atrás</button>
        </div>
        <h1 class="notifications-title">Notificaciones</h1>
      </header>
      <div class="separator"></div>
      <section class="periodic-notifications">
        <div class="notification-option">
          <label class="checkbox-container">
            <input type="checkbox" class="visually-hidden">
            <span class="custom-checkbox">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc8dc80872dd560477b13766b14761645d5e957db2e81edaa8ab5c175ec15779?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" alt="" class="checkbox-icon">
            </span>
            <span class="notification-label">Activar notificaciones periódicas de apuntes de gastos</span>
          </label>
        </div>
        <div class="notification-timing">
          <label for="notificationTime" class="timing-label">Establecer tiempo de notificaciones:</label>
          <input type="number" id="notificationTime" class="time-input" min="1" max="24">
          <span class="time-unit">horas</span>
        </div>
        <p class="share-link">https://usuario1/recomendar/xbeowo19/share</p>
      </section>
      <section class="economic-reminders">
        <div class="reminder-option">
          <label class="checkbox-container">
            <input type="checkbox" class="visually-hidden">
            <span class="custom-checkbox">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc8dc80872dd560477b13766b14761645d5e957db2e81edaa8ab5c175ec15779?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" alt="" class="checkbox-icon">
            </span>
            <span class="reminder-label">Recordatorios económicos:</span>
          </label>
        </div>
        <p class="notification-preference">Deseo recibir notificaciones de:</p>
        <div class="preference-list">
          <div class="preference-header"></div>
          <div class="preference-options">
            <div class="checkbox-group">
              <label class="checkbox-container">
                <input type="checkbox" class="visually-hidden">
                <span class="custom-checkbox">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b60bf4fe36229cac8df6c461f3b05d77d668f41e48f3cab271d99d5ecd17b13?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" alt="" class="checkbox-icon">
                </span>
                <span class="option-label">Precios de alimentos</span>
              </label>
              <label class="checkbox-container">
                <input type="checkbox" class="visually-hidden">
                <span class="custom-checkbox">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b60bf4fe36229cac8df6c461f3b05d77d668f41e48f3cab271d99d5ecd17b13?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" alt="" class="checkbox-icon">
                </span>
                <span class="option-label">Tipo de cambio</span>
              </label>
              <label class="checkbox-container">
                <input type="checkbox" class="visually-hidden">
                <span class="custom-checkbox">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b60bf4fe36229cac8df6c461f3b05d77d668f41e48f3cab271d99d5ecd17b13?placeholderIfAbsent=true&apiKey=02dd0833c9cc4e1c855ca8ac5fba7e53" alt="" class="checkbox-icon">
                </span>
                <span class="option-label">Otros</span>
              </label>
            </div>
          </div>
        </div>
        <p class="permission-note">Nota: Para activar las notificaciones tiene que dar permiso a la aplicación</p>
      </section>
    </section>
  </main>
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
.notifications-page {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 109px 80px 0;
}

.notifications-container {
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 1048px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-end;
  fill: #fff;
  margin-top: -1px;
  padding: 27px 80px 179px 19px;
}

.notifications-header {
  align-self: flex-start;
  display: flex;
  align-items: center;
  width: 100%;
}

.go-back-button {
  background-blend-mode: exclusion;
  width: 76px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.notifications-title {
  color: #000;
  margin-left: 42px;
  font: 700 30px/2 Nunito, sans-serif;
}

.separator {
  margin-top: 35px;
  width: 868px;
  max-width: 100%;
  height: 2px;
  border: 2px solid #757575;
}

.periodic-notifications {
  border-radius: 15px;
  background-color: rgba(251, 251, 251, 0.77);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-top: 15px;
  width: 868px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 80px 25px 29px;
  border: 1px solid rgba(57, 57, 57, 0.36);
}

.notification-option {
  display: flex;
  width: 525px;
  max-width: 100%;
  gap: 7px;
  flex-wrap: wrap;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.custom-checkbox {
  background-color: #fff;
  display: flex;
  min-height: 33px;
  align-items: center;
  justify-content: center;
}

.checkbox-icon {
  aspect-ratio: 1;
  object-fit: contain;
  width: 16px;
  border-radius: 4px;
}

.notification-label,
.reminder-label {
  color: #000;
  flex-grow: 1;
  width: 486px;
  flex-basis: auto;
  font: 500 20px/0.9 Nunito, sans-serif;
}

.notification-timing {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin: 11px 0 0 34px;
  font: 20px Nunito, sans-serif;
}

.timing-label {
  color: #000;
  font-weight: 400;
  line-height: 30px;
  flex-basis: auto;
}

.time-input {
  border-radius: 6px;
  background-color: #dfdfdf;
  width: 101px;
  height: 24px;
  border: 1px solid #bababa;
}

.time-unit {
  color: #000;
  font-weight: 500;
  line-height: 0.9;
  margin: auto 0;
}

.share-link {
  color: #fff;
  align-self: center;
  font: 400 20px/22px Nunito, sans-serif;
}

.economic-reminders {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  width: 867px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-start;
  fill: #fff;
  margin: 25px 0 -36px;
  padding: 40px 36px;
  border: 1px solid rgba(57, 57, 57, 0.36);
}

.reminder-option {
  display: flex;
  width: 277px;
  max-width: 100%;
  gap: 12px;
}

.notification-preference {
  color: #000;
  margin: 17px 0 0 39px;
  font: 500 20px/0.9 Nunito, sans-serif;
}

.preference-list {
  border-radius: 10px;
  background-color: #f7f7f7;
  align-self: flex-end;
  display: flex;
  margin-top: 32px;
  width: 575px;
  max-width: 100%;
  padding-bottom: 31px;
  flex-direction: column;
}

.preference-header {
  border-radius: 10px;
  background-color: #3e704d;
  z-index: 10;
  display: flex;
  margin-top: -4px;
  height: 29px;
}

.preference-options {
  display: flex;
  width: 214px;
  max-width: 100%;
  gap: 15px;
  margin: 12px 0 0 23px;
}

.checkbox-group {
  align-self: flex-start;
  display: flex;
  margin-top: 9px;
  flex-direction: column;
}

.option-label {
  color: #000;
  font: 400 20px/30px Nunito, sans-serif;
}

.permission-note {
  color: #000;
  margin: 50px 0 0 47px;
  font: 500 20px/1 Nunito, sans-serif;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 991px) {
  .notifications-page {
    padding: 0 20px 100px;
  }

  .notifications-container {
    padding: 0 20px 100px 0;
  }

  .notifications-title {
    margin-left: 10px;
  }

  .periodic-notifications {
    padding: 0 20px;
  }

  .notification-label,
  .reminder-label {
    max-width: 100%;
  }

  .economic-reminders {
    margin-bottom: 10px;
    padding: 0 20px;
  }

  .notification-preference {
    margin-left: 10px;
  }

  .preference-header {
    max-width: 100%;
    margin-right: -3px;
  }

  .preference-options {
    margin-left: 10px;
  }

  .permission-note {
    max-width: 100%;
    margin-top: 40px;
  }
}
</style>