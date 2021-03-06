import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Journal from '../components/Journal.vue';
import Signup from '../components/Signup.vue';
import Signup2 from '../components/Signup2.vue';
import Account from '../components/Account.vue';
import Affirmations from '../components/Affirmations.vue';
import ResetPassword from '../components/ResetPassword.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Affirmations',
    component: Affirmations,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/signup2',
    name: 'Signup2',
    component: Signup2,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/reset_password',
    name: 'ResetPassword',
    component: ResetPassword,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
