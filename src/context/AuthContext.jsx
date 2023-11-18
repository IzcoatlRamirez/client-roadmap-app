import { createContext, useState,useContext } from "react";
export const AuthContext = createContext()

export const  useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("Use auth must be used within an AuthProvider");
    return context;
}

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null)

    const saveDataUser = (data) => {
        setUser(data);
      };
    return (
        <AuthContext.Provider 
        value={{
            user,
            saveDataUser}}>
            {children}
        </AuthContext.Provider>
    )

}
