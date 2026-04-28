import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/nav/Nav"
import Hero from "./pages/userPanel/Hero/Hero"
import About from "./pages/userPanel/About/About"
import Contact from "./pages/userPanel/Contact/Contact"

import Services from "./pages/userPanel/Services/Services"
import ServiceDetail from "./pages/userPanel/ServiceDetail/ServiceDetail"

import Products from "./pages/userPanel/Products/Products"
import ProductDetail from "./pages/userPanel/ProductDetail/ProductDetail"

import Register from "./pages/userPanel/Register/Register"
import BookAppointment from "./pages/userPanel/BookAppointment/BookAppointment"
import Login from "./pages/userPanel/login/login"

import { useContext } from "react"
import { authContext } from "./components/context/authContext"
import AdminNav from "./components/AdminNav.jsx/AdminNav"

import Adminuser from "./pages/AdminPanel/adminuser"
import Adminservice from "./pages/AdminPanel/adminservice"
import Adminpayment from "./pages/AdminPanel/adminpayment"
import Adminorder from "./pages/AdminPanel/adminorder"
import Adminfeedback from "./pages/AdminPanel/adminfeedback"
import Adminproduct from "./pages/AdminPanel/adminproduct"
import Service from "./pages/AdminPanel/Service/Service"
import  Checkout  from "./pages/userPanel/Checkout/Checkout"
import   Cart from "./pages/userPanel/Cart/Cart"
import Product from "./pages/AdminPanel/Product/Product"
import Order from "./pages/userPanel/Orders/Order"
import Feedback from "./pages/userPanel/Feedback/Feedback"
import Profile from "./pages/userPanel/Profile/Profile"









function App() {
  const {type}=useContext(authContext)
  console.log(type);
  return(
    <>
    {
      type? type =="admin" ? <AdminNav/>:<Navbar/>:<Navbar/>

    }
   
    <Routes>
      <Route path="/" element={ <Hero/>}/>

      <Route path="/about" element={ <About/>}/>
      <Route path="/services" element={ <Services/>}/>
      <Route path="/service-detail/:cat" element={ <ServiceDetail/>}/>
      <Route path="/products" element={ <Products/>}/>
      <Route path="/product-detail/:cat" element={ <ProductDetail/>}/>
      <Route path="/checkout" element={ <Checkout/>}/>
      <Route path="/order" element={ <Order/>}/>
      <Route path="/profile" element={ <Profile/>}/>
      

      

      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/register" element={ <Register/>}/>
      <Route path="/book-appointment/:serviceId/:payment" element={ <BookAppointment/>}/>
      <Route path="/cart" element={ <Cart/>}/>
      <Route path="/feedback" element={ <Feedback/>}/>

      <Route path="/login" element={ <Login/>}/>

      <Route path="/Adminuser" element={ <Adminuser/>}/>
      <Route path="/Adminservice" element={ <Adminservice/>}/>
      <Route path="/Adminproduct" element={ <Adminproduct/>}/>
      <Route path="/Adminpayment" element={ <Adminpayment/>}/>
      <Route path="/Adminorder" element={ <Adminorder/>}/>
      <Route path="/Adminfeedback" element={ <Adminfeedback/>}/>
      <Route path="/Service" element={ <Service/>}/>
      <Route path="/Product" element={ <Product/>}/>

     










    
    </Routes>
  
   

    </>
  )
}
export default App