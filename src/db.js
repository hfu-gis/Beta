import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTaJU7UfdTnjfY7XIvP5nMm8LLQgadMmY",
    authDomain: "bitofadvice-ff8b5.firebaseapp.com",
    databaseURL: "https://bitofadvice-ff8b5.firebaseio.com",
    projectId: "bitofadvice-ff8b5",
    storageBucket: "bitofadvice-ff8b5.appspot.com",
    messagingSenderId: "807677565886",
    appId: "1:807677565886:web:1b2644c88deeb78e8bb7ef",
    measurementId: "G-BCEY57FVGQ"
};
const db = firebase.initializeApp(firebaseConfig).firestore()
export default db
const {TimeStamp, GeoPoint} = firebase.firestore
export {TimeStamp, GeoPoint}

