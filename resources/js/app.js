/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCKUnK0E5EpPsXvS4_ChOnai-Avz3REG2c",
    authDomain: "laravel-b67d1.firebaseapp.com",
    projectId: "laravel-b67d1",
    storageBucket: "laravel-b67d1.appspot.com",
    messagingSenderId: "543561735466",
    appId: "1:543561735466:web:5b44bd4d901732b4381253",
    measurementId: "G-V6YFFMJXZE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

	var db = firebase.firestore();

	window.db = db;





/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('chat-component', require('./components/ChatComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
