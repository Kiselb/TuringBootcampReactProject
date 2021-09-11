import { initializeApp } from "firebase/app"
import { collection, query, getDocs, getFirestore, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAs7J1qyx2X-wMwCWkc53i9L_PJQGpEKjg",
    authDomain: "my-chat-app-project-847cb.firebaseapp.com",
    projectId: "my-chat-app-project-847cb",
    storageBucket: "my-chat-app-project-847cb.appspot.com",
    messagingSenderId: "523236115983",
    appId: "1:523236115983:web:420d861535933724a8457a",
    measurementId: "G-RERX3WBPG3"
  };

const getUser = async (email, password) => {
    initializeApp(firebaseConfig)
    const db = getFirestore()
    const usersquery = query(collection(db, 'Users'), where("EMail", "==", email), where("Password", "==", password))
    const snapshot = await getDocs(usersquery)
    const users = snapshot.docs.map(doc => doc.data())
    return (users.length === 1) ? (users[0]) : (null)
}

const getUsersList = async () => {
    initializeApp(firebaseConfig)
    const db = getFirestore()
    const users = []
    const docs = await getDocs(collection(db, 'Users'))
    docs.forEach((doc) => users.push({ id: doc.id, ...doc.data() }))
    return users
}

export { getUser, getUsersList }
