import { Link, useNavigate } from "react-router-dom";
import"./Nav.css";
import { authContext } from "../context/authContext";
import { useContext } from "react";
import { useCart } from "react-use-cart";

export function Navbar () {


       const {
          
            totalUniqueItems,
           
        } = useCart();

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
           
          </div>
        
         <ul className="menu">
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            
            {auth && <Link to={'/services'}><li>Services</li></Link>}
            <Link to={'/products'}><li>Products</li></Link>

            <Link to={'/contact'}><li>Contact</li></Link>
            <Link to={'/feedback'}><li>Feedback</li></Link>
            {auth && <Link to={'/profile'}><li>👤Profile</li></Link>}

            {/* <Link to={'/book-appointment'}><li>Book Appointment</li></Link> */}
           {auth && <Link to={'/cart'}><li>🛒 <span style={{background:"pink", borderRadius:"100%",padding:"10px"}}>{totalUniqueItems}</span></li></Link>}
           {/* {auth && <Link to={'/order'}><li>Order</li></Link>} */}
          


            

            {
                auth?
                (
                    <li onClick={Logout}><button>Logout</button></li>
                ):(
                    <>
                    
                    <Link to={'/login'}><li>Login</li></Link>
                    <Link to={'/register'}><li>Register</li></Link>


                    </>
                )
            }
       
           


         </ul>
            
        </div>
    )
}
export default Navbar
