import { initializeApp, getApp } from "firebase/app"
import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}
let app
if (!getApp.length) {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
}
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { db }
