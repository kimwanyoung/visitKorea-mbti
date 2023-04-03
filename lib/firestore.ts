import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

export const addDocument = async (
  collectionName: string,
  type: string,
  data: any
) => {
  // const citiesRef = collection(db, "mbti")
  try {
    const docRef = await setDoc(doc(collection(db, collectionName), type), {
      data,
    })
    // console.log("Document written with ID: ", docRef.id)
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
