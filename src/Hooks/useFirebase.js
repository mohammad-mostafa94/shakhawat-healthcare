import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitialize from '../Firebase/firebaseInitialize';

firebaseInitialize();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});

    // handle google sign in button
    const signInzUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
        })
    }

    // handle logout button
    const logOut = ()=> {
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    },[])

    return {
        user,
        signInzUsingGoogle,
        logOut

    }
};

export default useFirebase;