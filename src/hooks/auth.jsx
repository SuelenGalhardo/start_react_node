import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password}) {

        try { const response = await api.post("/sessions", { email, password });
        const { user, token } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setData({ user, token });


        //console.log(user, token );
    } catch (error) {
        if (error.response){
            alert(error.response.data.error);
        }else{
            alert("Ocurrio un error");
        }

       
    }
}
    return (
        <AuthContext.Provider value={{ signIn,user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const Context = useContext(AuthContext);
    
    return Context;
}

export { AuthProvider, useAuth };