import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import Notifications from 'vue-notification'
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
Vue.use(Notifications)

new Vue({
  el: '#app',
  render: h => h(App)
})
