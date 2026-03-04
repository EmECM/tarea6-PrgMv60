import { createContext, useContext, useState } from "react";

type User = {
    role?: 'admin' | 'common'
} | null;

type AuthContextType = {
    user: User;
    isAllowed: boolean;
    login: (role: any)=>boolean;
    logout: boolean;
}

//1. Definir contexto
const AuthContext = createContext<AuthContextType | null>(null)

//2. Utilizar el contexto: Hook personalizado
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error ('useAuth debe usarse dentro del AuthProvider');
    return context;
};

//3. definicion de Context Provider
//apartir de authprovider el estado del componente se convierte en un estado global 
export const AuthProvider = ({children}: {children: React.ReactNode})=>{
   


    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}