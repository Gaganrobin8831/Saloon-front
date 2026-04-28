// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/context/authContext.jsx'
// import { CartProvider } from 'CartContext'
import { CartProvider } from 'react-use-cart'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <CartProvider>


                <App />
            </CartProvider>

        </AuthProvider>
    </BrowserRouter>

)
