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
import PaymentComponent from "../saifu/payment/payment.component.vue";
import ChallengesComponent from "../saifu/financial-challenges/challenges.component.vue";
import AppRecomendationComponent from "../saifu/appRecomendations/app-recomendation-component.vue";
import ClientServiceComponent from "../saifu/clientService/client-service-component.vue";
import FinancialInformation from "../saifu/components/financial-information.component.vue";
import InviteFriendComponent from "../saifu/inviteFriends/invite-friend-component.vue";
import NotificationComponent from "../saifu/notification/notification-component.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/profile', component: Profile },
    { path: '/profile-edit', component: ProfileEdit },
    { path:'/education',component:EducationComponent},
    { path:'/suscription',component:PlanSubscription},
    { path: '/login', component: Login},
    { path:'/addTransaction',component:AddTransaction},
    { path:'/registerTransaction',component:RegisterTransaction},
    { path:'/registerData',component:RegisterData},
    { path: '/payment',component: PaymentComponent},
    {path:'/challenges',component: ChallengesComponent},
    { path: '/app-recommendation', component: AppRecomendationComponent },  // Ruta para la recomendación de aplicación
    { path: '/client-service', component: ClientServiceComponent },          // Ruta para el servicio al cliente
    { path: '/financial-info', component: FinancialInformation },            // Ruta para la información financiera
    { path: '/invite-friend', component: InviteFriendComponent },            // Ruta para invitar amigos
    { path: '/notifications', component: NotificationComponent }
];



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;