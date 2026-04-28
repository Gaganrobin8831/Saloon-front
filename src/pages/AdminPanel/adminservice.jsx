
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminservice.css";

function Adminservice() {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [status, setStatus] = useState("");

    async function getdata() {
        try {
            const response = await axios.get("http://localhost:3000/service/Services");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    async function delservice(id) {
        try {
            await axios.delete(`http://localhost:3000/service/del/${id}`);
            toast.success("Delete Successfully");
            getdata();
        } catch (error) {
            console.log(error);
            toast.error("Something Wrong");
        }
    }

    async function UpdateService() {
        try {
            await axios.put(`http://localhost:3000/service/update/${id}`, { status });
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
        <div className="adminservice">
            <ToastContainer />
           <h1 style={{ color: "#333", borderBottom: "2px solid #D4AF37", paddingBottom: "10px", marginBottom: "20px",textAlign: "center"  }}>Service Management</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                    <th>ServiceName</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Description</th>
                    <th>ImageUrl</th>

                    <th>Status</th>
                    <th>Action</th>

                    </tr>
                </thead>

                <tbody>
                    {data.map((d) => (
                        <tr key={d._id}>
                            <td>{d._id}</td>
                            <td>{d.serviceName}</td>
                            <td>{d.category}</td>
                            <td>{d.price}</td>
                            <td>{d.duration}</td>
                            <td>{d.description}</td>
                             <td><img src={d.imageUrl} alt="" srcset="" width={80} /></td>
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
                                        <button className="save-btn" onClick={UpdateService}>
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

export default Adminservice;