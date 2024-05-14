import { createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{name: 'suelen', email: 'suelenranucci@gmail.com'}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const Context = useContext(AuthContext);
    
    return Context;
}

export { AuthProvider, useAuth };