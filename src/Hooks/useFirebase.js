import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitialize from '../Firebase/firebaseInitialize';

firebaseInitialize();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const nameHandle= e =>{
        const nameValue = e.target.value;
        setName(nameValue);
      }
     
      
      const nameAdded = () =>{
        updateProfile(auth.currentUser, {
          displayName: name, /* photoURL: "https://example.com/jane-q-user/profile.jpg" */
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      }
      
    
      
        const emailHandle = e =>{
          const emailValue = e.target.value;
          setEmail(emailValue);
        }
        const passwordHandle = e =>{
          const passwordValue = e.target.value;
          setPassword(passwordValue);
        }
      
        const formHandle = e =>{
          e.preventDefault();
          if(password.length < 6){
            setError('Password length must be at least 6 characters');
            return;
          } 
          if(!/[a-z]/.test(password)){
            setError("Your password must contain at least one letter.");
            return;
          } 
      
          isLoggedIn ? processLogin(email,password) :createNewRegister(email,password);
          
      
        }
      
        const checkHandler = e =>{
            setIsLoggedIn(e.target.checked);
        }
      
        const processLogin = (email,password) =>{
          signInWithEmailAndPassword(auth, email, password)
          .then((result)=>{
            const user = result.user;
            setError('');
            console.log(user);
            alert("you are successfully login");
          }).catch((error)=>{
            setError(error.message);
          })
        }
      
        const createNewRegister = (email,password) =>{
          createUserWithEmailAndPassword(auth, email, password)
            .then((result)=>{
              const user = result.user;
              setError('');
              verifyEmail();
              nameAdded();
              alert("you are successfully login");
              console.log(user);
            }).catch((error)=>{
              setError(error.message);
            })
        }
      
        const verifyEmail = () =>{
          sendEmailVerification(auth.currentUser)
          .then(() => {
            
          });
        }
      
        const resetPasswordHandle = () =>{
          sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
         setError( error.message);
          // ..
        });
      
        }
      
    // handle google sign in button
    const signInzUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const {displayName,photoURL,email} = result.user;
            const loggedUser = {
              name:displayName,
              photo:photoURL,
              email:email
            }
            setUser(loggedUser);
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
        user,name,email,password,error,isLoggedIn,
        nameHandle,
        checkHandler,
        emailHandle,
        passwordHandle,
        formHandle,
        resetPasswordHandle,
        signInzUsingGoogle,
        logOut
    }
};

export default useFirebase;