import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTaJU7UfdTnjfY7XIvP5nMm8LLQgadMmY",
    authDomain: "bitofadvice-ff8b5.firebaseapp.com",
    databaseURL: "https://bitofadvice-ff8b5.firebaseio.com",
    projectId: "bitofadvice-ff8b5",
    storageBucket: "bitofadvice-ff8b5.appspot.com",
    messagingSenderId: "807677565886",
    appId: "1:807677565886:web:405d399473083f888bb7ef",
    measurementId: "G-T7WBC780QX"
}

const db = firebase.initializeApp(firebaseConfig).firestore()
export default db

