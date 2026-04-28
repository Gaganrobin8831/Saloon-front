import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminproduct.css";

function Adminproduct() {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [status, setStatus] = useState("");

    async function getdata() {
        try {
            const response = await axios.get("http://localhost:3000/product/products");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    async function delproducts(id) {
        try {
            await axios.delete(`http://localhost:3000/product/del/${id}`);
            toast.success("Delete Successfully");
            getdata();
        } catch (error) {
            console.log(error);
            toast.error("Something Wrong");
        }
    }

    async function UpdateProduct() {
        try {
            await axios.put(`http://localhost:3000/product/update/${id}`, { status });
            toast.success("Update Successfully");
            setId("");
            setStatus("");
            getdata();
        } catch (error) {
            console.log(error);
            toast.error("Something Wrong");
        }
    }

    return (
        <div className="adminproduct">
            <ToastContainer />
          <h1 style={{ color: "#333", borderBottom: "2px solid #D4AF37", paddingBottom: "10px", marginBottom: "20px",textAlign: "center"  }}>Product  Management</h1>

            <table>
                <thead>
                    <tr>
                     <th>Id</th>
                    <th>ProductName</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>ImageUrl</th>
                    <th>Stock</th>

                    <th>Status</th>
                    <th>Action</th>

                    </tr>
                </thead>

                <tbody>
                    {data.map((d) => (
                        <tr key={d._id}>
                            <td>{d._id}</td>
                            <td>{d.productName}</td>
                            <td>{d.brand}</td>
                            <td>{d.price}</td>
                            <td>{d.category}</td>
                            <td><img src={d.imageUrl} alt="" srcset="" width={60} /></td>
                            <td>{d.stock}</td>
                            <td>
                                {d._id === id ? (
                                    <select onChange={(e) => setStatus(e.target.value)}>
                                        <option value="">Select Option</option>
                                        <option value="Deactivate">Deactivate</option>
                                        <option value="Activate">Activate</option>
                                    </select>
                                ) : (
                                    <span>{d?.status}</span>
                                )}
                            </td>

                            <td>
                                {d._id === id ? (
                                    <>
                                        <button className="save-btn" onClick={UpdateProduct}>
                                            Save
                                        </button>
                                        <button className="cancel-btn" onClick={() => setId("")}>
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="update-btn"
                                            onClick={() => setId(d._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={() => delUser(d._id)}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Adminproduct;