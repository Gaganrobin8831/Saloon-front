import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {  useCart } from "react-use-cart";
function ProductDetail() {
const { addItem } = useCart();
  const { cat } = useParams();
   const[data,setData]=useState([])
  
      async function getdata(){
          try{
              const response=await axios.get("http://localhost:3000/product/products")
              console.log(response.data);
              setData(response.data.filter(d=>d.category.toLowerCase() == cat.toLowerCase() ));
          }catch(error){
              console.log(error);
          }
      }
      useEffect(()=>{
          getdata()
      },[])
  
      function addtoCart(item) {
        console.log(item);
        
        addItem({
          ...item,
          id:item._id
        })
        alert("Product add in cart🛍️")
      }


  return (
    <div className="detail-page">

      <h2>{cat.toUpperCase()}</h2>
      <div className="detail-container">
        {data.map((item, index) => (
          <div key={item._id} className="detail-card">

            <img src={item.imageUrl} alt={item.name} />

            <h3>{item.name}</h3>

            <p><strong>Price:</strong> {item.price}</p>

            <p>{item.description}</p>

              <Link >
              <button onClick={() => addtoCart(item)}>Add To Cart</button>
            </Link>
            


          </div>
        ))}
      </div>

    </div>
  );
}

export default ProductDetail;



