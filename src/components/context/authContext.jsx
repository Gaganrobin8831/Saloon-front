import{createContext,useEffect,useState} from "react";

export const authContext=createContext()

export function AuthProvider({children}){
    const[auth,setAuth]=useState(null)
    const[type,setType]=useState(null)

    useEffect(()=>{
        setAuth(JSON.parse(localStorage.getItem("token")))
        setType(JSON.parse(localStorage.getItem("type")))

    },[])
    return(
        <authContext.Provider value={{auth,setAuth,type,setType}}>
            {children}
        </authContext.Provider>
    )


}
