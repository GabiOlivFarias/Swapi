import Vue from 'vue';
import firebase from 'firebase';

// Isso aqui você pega quando faz o setup do firebase
const firebaseConfig = {
  apiKey: 'SUA API KEY',
  authDomain: 'SEU AUTH DOMAIN',
  databaseURL: 'SEU DATABASE URL',
  projectId: 'SEU PROJETO ID',
  storageBucket: 'SEU STORAGE BUCKET',
  messagingSenderId: 'SEU MESSAGING SENDER ID',
  appId: 'SEU APP ID',
  measurementId: 'SEU MEASUREMENT ID',
};

firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;

export default firebase;
