import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyDFZPlygZibkvYB23xcY93LKVhKwHh_VX8',
    authDomain: 'hodr-bc912.firebaseapp.com',
    databaseURL: 'https://hodr-bc912.firebaseio.com',
    projectId: 'hodr-bc912',
    storageBucket: 'hodr-bc912.appspot.com',
    messagingSenderId: '1040529069365',
    appId: '1:1040529069365:web:ed804c59299cab03e3a87c',
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
