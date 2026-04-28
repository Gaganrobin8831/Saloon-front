import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./adminuser.css";

function Adminuser() {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [status, setStatus] = useState("");

    async function getdata() {
        try {
            const response = await axios.get("http://localhost:3000/user/Users");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    async function delUser(id) {
        try {
            await axios.delete(`http://localhost:3000/user/del/${id}`);
            toast.success("Delete Successfully");
            getdata();
        } catch (error) {
            console.log(error);
            toast.error("Something Wrong");
        }
    }

    async function UpdateUser() {
        try {
            await axios.put(`http://localhost:3000/user/update/${id}`, { status });
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
        <div className="adminuser">
            <ToastContainer />
            <h1 style={{ color: "#333", borderBottom: "2px solid #D4AF37", paddingBottom: "10px", marginBottom: "20px",textAlign: "center"  }}>User Management</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((d) => (
                        <tr key={d._id}>
                            <td>{d._id}</td>
                            <td>{d.Name}</td>
                            <td>{d.email}</td>

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
                                        <button className="save-btn" onClick={UpdateUser}>
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

export default Adminuser;