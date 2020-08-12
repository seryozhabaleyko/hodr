import React, { createContext, useEffect, useState } from 'react';
import { Pane, Spinner } from 'evergreen-ui';

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
        setCurrentUser(null);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <Pane display="flex" alignItems="center" justifyContent="center" height="100vh">
                <Spinner />
            </Pane>
        );
    }

    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
