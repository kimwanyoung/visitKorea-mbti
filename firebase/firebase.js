import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KET,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase_app)

export { db }
