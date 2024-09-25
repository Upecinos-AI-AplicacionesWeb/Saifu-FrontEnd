<template>
  <div class="edit-profile">
    <div class="profile-content" v-if="person">
      <h1>Mi perfil</h1>
      <div class="profile-layout">
        <div class="profile-image-container">
          <img :src="person.image_url" alt="Profile Picture" class="profile-image">
          <div class="level-indicator">
            <span class="level-number">2</span>
            <div class="level-bar">
              <div class="level-progress"></div>
            </div>
            <span class="level-number">3</span>
          </div>
        </div>
        <form @submit.prevent="saveProfile" class="edit-form">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input id="nombre" v-model="fullName" required>
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico:</label>
            <input id="email" v-model="person.email" type="email" required>
          </div>
          <div class="form-group">
            <label for="familyMembers">Nro de miembros en la familia:</label>
            <input id="familyMembers" v-model="person.num_family_members" type="number" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input id="password" v-model="person.password" type="password" required>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Actualizar</button>
            <button type="button" class="btn btn-secondary" @click="showDeleteModal = true">Eliminar</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Delete Profile Modal -->
    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Mi perfil</h2>
        <p>¿Deseas eliminar tu cuenta de forma permanente?</p>
        <div class="modal-actions">
          <button @click="confirmDelete" class="btn btn-confirm">Confirmar</button>
          <button @click="showDeleteModal = false" class="btn btn-cancel">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { personService } from '../services/person.service';
import { baseService } from '../../../shared/services/base.service';

export default {
  name: 'EditProfile',
  setup() {
    const person = ref(null);
    const showDeleteModal = ref(false);

    onMounted(async () => {
      try {
        const usuarios = await baseService.get('/usuarios');
        const userId = 2; // Assuming we're editing the second user
        person.value = await personService.getByUserId(userId);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    });

    const fullName = computed({
      get: () => person.value ? person.value.fullName : '',
      set: (value) => {
        const [nombre, apellido] = value.split(' ');
        person.value.nombre = nombre;
        person.value.apellido = apellido;
      }
    });

    const saveProfile = async () => {
      try {
        await personService.update(person.value.id_persona, person.value);
        console.log('Profile updated successfully');
        // Here you might want to redirect to the profile page or show a success message
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    };

    const confirmDelete = async () => {
      try {
        await personService.delete(person.value.id_persona);
        console.log('Profile deleted successfully');
        // Here you would typically navigate to a logout page or home page
        showDeleteModal.value = false;
      } catch (error) {
        console.error('Error deleting profile:', error);
      }
    };

    return {
      person,
      fullName,
      saveProfile,
      showDeleteModal,
      confirmDelete
    };
  }
};
</script>

<style scoped>
.edit-profile {
  color: #1a1a1a;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
}
.profile-content {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.profile-layout {
  display: flex;
  gap: 2rem;
}
.profile-image-container {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #4CAF50;
  object-fit: cover;
}
.level-indicator {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.level-number {
  font-weight: bold;
  color: #4CAF50;
}
.level-bar {
  width: 100px;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 0 0.5rem;
}
.level-progress {
  width: 60%;
  height: 100%;
  background-color: #4CAF50;
  border-radius: 5px;
}
.edit-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
.btn-primary {
  background-color: #e6c35c;
  color: white;
}
.btn-primary:hover {
  background-color: #d4b14e;
}
.btn-secondary {
  background-color: #e6c35c;
  color: white;
}
.btn-secondary:hover {
  background-color: #d4b14e;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}
.modal-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.btn-confirm, .btn-cancel {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.btn-confirm {
  background-color: #e6c35c;
  color: white;
}
.btn-cancel {
  background-color: #f44336;
  color: white;
}
</style>