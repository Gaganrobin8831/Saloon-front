import axios from"axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


function Adminorder(){

    const[data,setData]=useState([])

    async function getdata(){
        try{
            const response=await axios.get("http://localhost:3000/order/orders")
            console.log(response.data);
            setData(response.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getdata()
    },[])

    async function delorder (id) {
        try {
            const response=await axios.delete(`http://localhost:3000/order/del/${id}`)
            console.log(response.data);
            toast.success("Delete Successfully")
            getdata()

        } catch (error) {
            console.log(error);
            toast.error("Something Wrong")
        }        
    }  

const[id,setId]=useState("")
    const [status,setStatus]=useState("")

   async function UpdateOrder() {
    console.log(status);
        try {
            const response=await axios.put(`http://localhost:3000/order/update/${id}`,{status})
            console.log(response.data);
            toast.success("Update Successfully")
            setId("")
            getdata()

        } catch (error) {
            console.log(error);
            toast.error("Something Wrong")
        }        
    }

    return(
        <div style={{ padding: "20px" }}>
            <ToastContainer/>
            <h1 style={{ color: "#333", borderBottom: "2px solid #D4AF37", paddingBottom: "10px", marginBottom: "20px",textAlign: "center",fontFamily:'Playfair' }}>Service Orders Management</h1>
            <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", backgroundColor: "#fff" }}>
                <thead>
                    <tr style={{ backgroundColor: "#ec3d92", color: "white", textAlign: "left" }}>
                        <th style={{ padding: "12px 15px" }}>ID</th>
                        <th style={{ padding: "12px 15px" }}>Customer</th>
                        <th style={{ padding: "12px 15px" }}>Service Name</th>
                        <th style={{ padding: "12px 15px" }}>Date & Time</th>
                        <th style={{ padding: "12px 15px" }}>Total Payment</th>
                        <th style={{ padding: "12px 15px" }}>Status</th>
                        <th style={{ padding: "12px 15px", textAlign: "center" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((d,index)=>(
                        <tr key={d._id} style={{ borderBottom: "1px solid #ddd" }}>
                            <td style={{ padding: "12px 15px" }}>{d._id.slice(-6)}</td>
                            <td style={{ padding: "12px 15px" }}>{d.UserId?.Name || 'Unknown'}</td>
                            <td style={{ padding: "12px 15px" }}>{d.ServiceId?.serviceName || 'N/A'}</td>
                            <td style={{ padding: "12px 15px" }}>{d.appointmentDate} <br/><small>{d.time}</small></td>
                            <td style={{ padding: "12px 15px" }}>₹{d.payment} <br/><small>({d.paymentMethod})</small></td>
                            <td style={{ padding: "12px 15px" }}>
                            {
                                d._id === id ? (
                                    <select name="status" style={{ padding: "5px", borderRadius: "4px" }} onChange={(e)=>setStatus(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="booked">Booked</option> 
                                        <option value="waiting">Waiting</option>                                  
                                        <option value="cancelled">Cancelled</option>                                  
                                    </select>
                                ) : (
                                    <span style={{ 
                                        padding: "4px 8px", borderRadius: "12px", fontSize: "0.85em", fontWeight: "bold",
                                        backgroundColor: d.status === 'booked' ? '#d4edda' : d.status === 'waiting' ? '#fff3cd' : '#f8d7da',
                                        color: d.status === 'booked' ? '#155724' : d.status === 'waiting' ? '#856404' : '#721c24'
                                    }}>{d?.status?.toUpperCase()}</span>
                                )
                            }
                            </td>
                            <td style={{ padding: "12px 15px", textAlign: "center" }}>
                            {
                                d._id === id ? (
                                    <button style={{ backgroundColor: "#28a745", color: "white", padding: "6px 12px", border: "none", borderRadius: "4px", marginRight: "5px", cursor: "pointer" }} onClick={UpdateOrder}>Save</button>
                                ) : (
                                    <button style={{ backgroundColor: "#007bff", color: "white", padding: "6px 12px", border: "none", borderRadius: "4px", marginRight: "5px", cursor: "pointer" }} onClick={()=>setId(d._id)}>Edit</button>
                                )
                            }
                            <button style={{ backgroundColor: "#dc3545", color: "white", padding: "6px 12px", border: "none", borderRadius: "4px", cursor: "pointer" }} onClick={()=>delorder(d._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}
export default Adminorder