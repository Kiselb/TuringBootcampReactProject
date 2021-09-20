import * as firebase from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAs7J1qyx2X-wMwCWkc53i9L_PJQGpEKjg",
    authDomain: "my-chat-app-project-847cb.firebaseapp.com",
    projectId: "my-chat-app-project-847cb",
    storageBucket: "my-chat-app-project-847cb.appspot.com",
    messagingSenderId: "523236115983",
    appId: "1:523236115983:web:420d861535933724a8457a",
    measurementId: "G-RERX3WBPG3"
  };

firebase.initializeApp(firebaseConfig)

export default async function auth(email, password) {
    try {
        console.log('API Auth')
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
    }
    catch(error) {
        throw error.message
    }
}
