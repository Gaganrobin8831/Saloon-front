import  { useState } from "react";
import axios from 'axios'
import "./Register.css";

function Register() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");   

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const obj={
      Name,email,password
    }
    console.log(obj);
    try {
      const response=await axios.post("http://localhost:3000/user",obj)
      console.log(response);
      alert("Register Successfully")
      setName("")
      setEmail("")
      setPassword("")

    } catch (error) {
      console.log(error);
      alert("Something Wrong")
      
    }
  }

    
  
  return(
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={Name}
          required
        />

         <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <button type="submit">Register</button>
    </form>
    </div>
  )
  
}




export default Register;