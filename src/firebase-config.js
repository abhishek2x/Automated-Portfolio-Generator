import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCqJbZ2CrSB_P9ZiIXeBAXbKRyaDbdw5co",
  authDomain: "automated-portfolio-generator.firebaseapp.com",
  projectId: "automated-portfolio-generator",
  storageBucket: "automated-portfolio-generator.appspot.com",
  messagingSenderId: "448064427092",
  appId: "1:448064427092:web:d70af744a8e4e57e8dc9c1"
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