import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from './AuthContext';
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    }
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const userInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        signInGoogle,
        loading
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
