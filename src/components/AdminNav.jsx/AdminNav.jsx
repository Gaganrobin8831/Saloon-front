import { Link, useNavigate } from "react-router-dom";
import"./AdminNav.css"
import { authContext } from "../context/authContext";
import { useContext } from "react";

function AdminNav () {

    const{auth,setType,setAuth} =useContext(authContext)
    const navigate = useNavigate()
     function Logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("type")
        setAuth(null)
        setType(null)
        navigate("/")

     }


    return(
        <div className="Navbar">
          <div className="logo">
           <img src="/logo.jpg" alt="Beauty Hub Logo" className="logo-img"/>
           {/* <h2>  Beauty Hub</h2> */}
          </div>
        
         <ul className="menu">
            <Link to={'/'}><li>Admin</li></Link>

            <Link to={'/Adminuser'}><li>Users</li></Link>
            <Link to={'/Adminservice'}><li>Services</li></Link>
            <Link to={'/Adminproduct'}><li>Products</li></Link>
            <Link to={'/Adminpayment'}><li>Payments</li></Link>
            <Link to={'/Adminorder'}><li>Orders</li></Link>
            <Link to={'/Adminfeedback'}><li>Feedbacks</li></Link>
            <Link to={'/Service'}><li>Add Services</li></Link>
            <Link to={'/Product'}><li>Add Products</li></Link>

            





            
         <li onClick={Logout}><button>Logout</button></li>

            
       
           


         </ul>
            
        </div>
    )
}
export default AdminNav