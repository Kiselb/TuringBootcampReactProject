import {} from '../firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default async function auth(email, password) {
    try {
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
    }
    catch(error) {
        throw error.message
    }
}
