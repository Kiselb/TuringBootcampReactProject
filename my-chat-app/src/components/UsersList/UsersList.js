import React, { useState, useEffect } from "react";

import { initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAs7J1qyx2X-wMwCWkc53i9L_PJQGpEKjg",
    authDomain: "my-chat-app-project-847cb.firebaseapp.com",
    projectId: "my-chat-app-project-847cb",
    storageBucket: "my-chat-app-project-847cb.appspot.com",
    messagingSenderId: "523236115983",
    appId: "1:523236115983:web:420d861535933724a8457a",
    measurementId: "G-RERX3WBPG3"
  };

const UsersList = () => {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const firebaseApp = initializeApp(firebaseConfig)
        const db = getFirestore()
        const users = []

        const docs = await getDocs(collection(db, 'Users'))
        docs.forEach((doc) => users.push({ id: doc.id, ...doc.data() }))

        console.log(users)
        setUsers(users)
    }, [])
    return (
        <>
            <h1>Test</h1>
            { users.map((user) => <p>{user.NickName}</p>) }
        </>
    )
}

export default UsersList
