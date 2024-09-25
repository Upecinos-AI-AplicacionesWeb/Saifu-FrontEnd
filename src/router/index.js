import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../saifu/profile/components/main-page.component.vue';
import Profile from '../saifu/profile/components/profile.component.vue';

const routes = [
    { path: '/', component: MainPage },
    { path: '/profile', component: Profile }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;