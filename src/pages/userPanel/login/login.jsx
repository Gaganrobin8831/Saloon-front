import { useContext, useState } from 'react';
import axios from 'axios'

import './login.css'
import { authContext } from '../../../components/context/authContext';
function Login() {

    const [email,setEmail] =useState("");
    const[password,setPassword]=useState("");
    const {setType,setAuth}= useContext(authContext)

    const handleLogin = async (e) =>{
        e.preventDefault();
        const  obj={
            email,
            password
        };
        console.log(obj);
        try {
              const response=await axios.post("http://localhost:3000/user/login", obj)
              console.log(response);
              localStorage.setItem("token",JSON.stringify(response.data._id))
              localStorage.setItem("type",JSON.stringify(response.data.userType))
              setType(response.data.usertype)
              setAuth(response.data._id)

              
              setEmail("")
              setPassword("")
              alert("Login Successfully")
              
            } catch (error) {
              console.log(error);
              alert("Something Wrong")
              
            }
    };
    return(
        <div className="login-container">

            <form className="login-form"onSubmit={(handleLogin)}>
                <h2>Login to Your Account</h2>
               

                <input 
                type="email" 
                placeholder="Enter Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                 <input 
                type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                
                <button type="submit">LOGIN</button>

               
            </form>
        </div>
    );
}

export default Login