import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUo7OXVlPeHd3JNouL31hqTiOOM-OPeHo",
  authDomain: "vit-folder.firebaseapp.com",
  projectId: "vit-folder",
  storageBucket: "vit-folder.appspot.com",
  messagingSenderId: "637430274103",
  appId: "1:637430274103:web:112403c677b617bc6fc7b2",
  measurementId: "G-JNZ872Y903"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = app.firestore();
const projectStorage = firebase.storage();

const providerGoogle = new firebase.auth.GoogleAuthProvider()
var providerGitHub = new firebase.auth.GithubAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, database, providerGitHub, providerGoogle, providerFacebook, projectStorage }