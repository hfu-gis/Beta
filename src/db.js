import firebase from "firebase/app"
import 'firebase/firestore'

// Get a Fire
export const db = firebase
    .initializeApp({projectId: 'bitofadvice-ff8b5'})
    .firestore();


const {TimeStamp, GeoPoint} = firebase.firestore
export {TimeStamp, GeoPoint}

