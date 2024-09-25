<template>
  <div>
    <ToolbarComponent/>
  </div>
  <div class="profile">
    <div class="profile-content" v-if="person">
      <div class="profile-header">
        <div class="profile-info">
          <h2>{{ person.fullName }}</h2>
          <p>{{ person.username }}</p>
          <p>Se unió en septiembre de 2024</p>
          <p>{{ person.familyMemberCount }} miembros registrados</p>
          <button @click="navigateToEditProfile" class="edit-profile-button">Editar Perfil</button>
        </div>
        <div class="profile-image-container">
          <img :src="person.image_url" alt="Profile Picture" class="profile-image">
          <button class="edit-image-button">
            <span class="edit-icon">✏️</span>
          </button>
        </div>
      </div>
      <div class="profile-sections">
        <div class="achievements-section">
          <h3>Logros:</h3>
          <div class="achievement-item">
            <img src="/path-to-celebrate-icon.png" alt="Win Icon" class="achievement-icon">
            <div class="achievement-info">
              <h4>Eres un ganador!</h4>
              <p>Nivel 01</p>
              <div class="progress-bar">
                <div class="progress" style="width: 100%;"></div>
              </div>
              <span class="progress-text">100/100</span>
            </div>
          </div>
          <div class="achievement-item">
            <img src="/path-to-celebrate-icon.png" alt="Celebrate Icon" class="achievement-icon">
            <div class="achievement-info">
              <h4>Celebra a lo grande!</h4>
              <p>Nivel 02</p>
              <div class="progress-bar">
                <div class="progress" style="width: 100%;"></div>
              </div>
              <span class="progress-text">100/100</span>
            </div>
          </div>
        </div>
        <div class="members-section">
          <h3>Mis miembros:</h3>
          <ul>
            <li v-for="member in person.family_members" :key="member.id">
              <img :src="member.imageUrl" alt="Family Member" class="member-image">
              <span>{{ member.name }}</span>
            </li>
          </ul>
        </div>
        <div class="add-friends-section">
          <h3>Agregar amigos:</h3>
          <button class="add-friend-button">
            <span class="search-icon">🔍</span>
            Encuentra a tus amigos
          </button>
          <button class="add-friend-button">
            <span class="invite-icon">✉️</span>
            Invita a tus amigos
          </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { ref, onMounted } from 'vue';
import { personService } from '../services/person.service.js';
import { useRouter } from 'vue-router';
import ToolbarComponent from "../../../shared/components/toolbar.component.vue";
export default {
  name: 'Profile',
  components:{
    ToolbarComponent
  },
  setup() {
    const person = ref(null)
    const router = useRouter();

    function navigateToEditProfile() {
      router.push('/profile-edit');
    }

    onMounted(async () => {
      try {
        const users = await personService.getAll();
        person.value = users[0]; // Assuming we're showing the first user
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    });

    return {
      person,
      navigateToEditProfile
    };
  }
};
</script>

<style scoped>
.profile {
  color: #1a1a1a;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.profile-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-info h2 {
  margin: 0;
  font-size: 1.5rem;
}

.profile-info p {
  margin: 0.5rem 0;
  color: #666;
}

.profile-image-container {
  position: relative;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.edit-image-button {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #FFD700;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.edit-icon {
  color: white;
  font-size: 16px;
}

.profile-sections {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.achievements-section, .members-section, .add-friends-section {
  flex: 1 1 300px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
}

.achievement-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.achievement-icon {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  background-color: #FF6347;
  border-radius: 8px;
}

.achievement-info h4 {
  margin: 0;
  color: #333;
}

.achievement-info p {
  margin: 0.25rem 0;
  color: #666;
}

.progress-bar {
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 10px;
  width: 100%;
  margin-top: 0.5rem;
}

.progress {
  background-color: #FFD700;
  border-radius: 10px;
  height: 100%;
}

.progress-text {
  font-size: 0.8rem;
  color: #666;
}

.members-section ul {
  color: #1a1a1a;
  list-style-type: none;
  padding: 0;
}

.members-section li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.member-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.add-friend-button {
  color: #1a1a1a;
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-icon, .invite-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
}

.edit-profile-button {
  background-color: #e6c35c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
}

.edit-profile-button:hover {
  background-color: #d4b14e;
}
</style>