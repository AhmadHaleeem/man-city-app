import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCWOlQz_vmLicHJ3gGdy4RWzeeJ6BmsA-A',
  authDomain: 'm-city-33ba4.firebaseapp.com',
  databaseURL: 'https://m-city-33ba4.firebaseio.com',
  projectId: 'm-city-33ba4',
  storageBucket: 'm-city-33ba4.appspot.com',
  messagingSenderId: '906932955101',
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
// firebaseDB
//   .ref('matches')
//   .once('value')
//   .then(snapshot => {
//     console.log(snapshot.val());
//   });

export { firebase, firebaseMatches, firebasePromotions };
