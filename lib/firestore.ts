import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore"
import { db } from "../firebase/firebase"

export const addDocument = async (
  collectionName: string,
  type: string,
  data: any
) => {
  try {
    const docRef = await setDoc(doc(collection(db, collectionName), type), {
      data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const getDocument = async (collectionName: string, type: string) => {
  const docRef = doc(db, collectionName, type)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return Number(docSnap.data().data)
  } else {
    return undefined
  }
}

export const addTotal = async (collectionName: string) => {
  try {
    const prevData = await getDocument(collectionName, "total")
    const mbtiRef = collection(db, collectionName)
    const q = query(mbtiRef)
    const snapShot = await getDocs(q)
    let sum = 0
    snapShot.forEach((doc) => {
      sum += Number(doc.data().data)
    })
    if (prevData) {
      await setDoc(doc(collection(db, collectionName), "total"), {
        data: sum - prevData,
      })
    } else {
      await setDoc(doc(collection(db, collectionName), "total"), {
        data: sum,
      })
    }
    
  } catch (err) {
    console.error(err)
  }
}
