import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Notifications from 'vue-notification'

import login from './components/Login.vue'
import PageNotFound from './components/Page404.vue'
import todo from './components/Todo.vue'
import register from './components/Register.vue'
import store from './components/store/index'


const firebaseConfig = {
  apiKey: "AIzaSyAjBiYXlMX5w-AoXmc2FTi7sfgHr8He7S8",
  authDomain: "vue-todo-1.firebaseapp.com",
  databaseURL: "https://vue-todo-1.firebaseio.com",
  projectId: "vue-todo-1",
  storageBucket: "vue-todo-1.appspot.com",
  messagingSenderId: "203196754559",
  appId: "1:203196754559:web:6dd477dc3577b801"
};

firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false
Vue.use(Notifications)
Vue.use(VueRouter);

const routes = [
  { path:  '/', component: login },
  { path:  '/login', component: login },
  { path: '/todo', component: todo },
  { path: "*", component: PageNotFound},
  { path: '/register', component: register },
];

const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
