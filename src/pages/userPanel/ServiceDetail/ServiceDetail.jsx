import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import {  useCart } from "react-use-cart";
function ServiceDetail() {
// const { addItem } = useCart();
  const { cat } = useParams();
    const[data,setData]=useState([])

    async function getdata(){
        try{
            const response=await axios.get("http://localhost:3000/service/Services")
            console.log(response.data);
            setData(response.data.filter(d=>d.category.toLowerCase() == cat.toLowerCase()));
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getdata()
    },[])
  
    //   function addtoCart(item) {
    //     console.log(item);
        
    //     addItem({
    //       ...item,
    //       id:item._id
    //     })
    //   }


  return (
    <div className="details-data">

      <h2>{cat.toUpperCase()}</h2>
      <div className="details-container">
        {data.map((item, index) => (
          <div key={item._id} className="details-card">

            <img src={item.imageUrl} alt={item.name} />

            <h3>{item.name}</h3>

            <p><strong>Price:</strong> {item.price}</p>

            <p>{item.description}</p>

             
             <Link to={`/book-appointment/${item._id}/${item.price}`}>
              <button onClick={() => Booking(item)}>Book Appointmnet</button>
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}

export default ServiceDetail;
