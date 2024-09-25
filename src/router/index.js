import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../saifu/profile/components/main-page.component.vue';
import Profile from '../saifu/profile/components/profile.component.vue';
import ProfileEdit from '../saifu/profile/components/profile-edit.component.vue';

import Login from "../saifu/loginRegister/Login.vue";


import EducationComponent from "../saifu/financial-education/education.component.vue";


const routes = [
    { path: '/', component: MainPage },
    { path: '/profile', component: Profile },
    { path: '/profile-edit', component: ProfileEdit },

    { path: '/login', component: Login}

    { path:'/education',component:EducationComponent}

];



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;