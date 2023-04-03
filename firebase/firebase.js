import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmR9f6RuKR7Q3lV3wjKe7fiySF_MnnMHM",
  authDomain: "mbti-1eef2.firebaseapp.com",
  projectId: "mbti-1eef2",
  storageBucket: "mbti-1eef2.appspot.com",
  messagingSenderId: "164826534194",
  appId: "1:164826534194:web:7d3178538b5a5b821a872b",
  measurementId: "G-CY037QQ6C8",
}

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase_app)

export { db }
