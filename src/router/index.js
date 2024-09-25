import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../saifu/profile/components/main-page.component.vue';
import Profile from '../saifu/profile/components/profile.component.vue';
import ProfileEdit from '../saifu/profile/components/profile-edit.component.vue';
import AddTransaction from "../saifu/addTransaction/addTransaction.vue";
import Login from "../saifu/loginRegister/Login.vue";
import RegisterTransaction from "../saifu/registerTransaction/registerTransaction.vue";
import RegisterData from "../saifu/registerData/registerData.vue";
import EducationComponent from "../saifu/financial-education/education.component.vue";
import PlanSubscription from "../saifu/plan-suscription/plan-suscription.component.vue";


const routes = [
    { path: '/', component: MainPage },
    { path: '/profile', component: Profile },
    { path: '/profile-edit', component: ProfileEdit },
    { path:'/education',component:EducationComponent},
    { path:'/suscription',component:PlanSubscription},
    { path: '/login', component: Login},
    
    { path:'/addTransaction',component:AddTransaction},
    { path:'/registerTransaction',component:RegisterTransaction},
    { path:'/registerData',component:RegisterData}

];



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;