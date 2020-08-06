import React, { createContext, useEffect, useState } from 'react';

import { auth } from '../services/firebase';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
