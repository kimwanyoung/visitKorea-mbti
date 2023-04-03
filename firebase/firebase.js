import { initializeApp, getApp } from "firebase/app"
import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}
let app
if (!getApp.length) {
  app = initializeApp(firebaseConfig)
}
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { db }
