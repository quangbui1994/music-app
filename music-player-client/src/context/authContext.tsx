import React, { useState, ReactNode } from 'react';

export const AuthContext = React.createContext({
    auth: false,
    setAuth: (auth: boolean) => {}
});

interface Context {
    auth: boolean,
    setAuth: (auth: boolean) => void
}

interface Props {
    children: ReactNode
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
    const setAuth = (auth: boolean): void => {
        setState({
            ...state,
            auth
        });
    };

    const initState: Context = {
        auth: localStorage.getItem('auth') !== '',
        setAuth
    }

    const [state, setState] = useState<Context>(initState);

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}
