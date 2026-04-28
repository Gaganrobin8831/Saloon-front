import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Profile.css";

function Profile() {
    const [profile, setProfile] = useState({});
    const [visible, setVisible] = useState(false);

    const auth = JSON.parse(localStorage.getItem("token"));

    const [profileData, setProfileData] = useState({
        Name: "",
        email: "",
      
        password: "",

    });

    // =========================
    // GET USER
    // =========================
    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await axios.get(
                    `http://localhost:3000/user/one/${auth}`
                );

                setProfile(res.data);

                setProfileData({
                    Name: res.data.Name || "",
                    email: res.data.email || "",
                 
                    password: res.data.password || "",

                });
            } catch (err) {
                console.log(err);
            }
        }

        if (auth) fetchProfile();
    }, [auth]);

    // =========================
    // INPUT CHANGE
    // =========================
    const handleChange = (e) => {
        setProfileData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // =========================
    // UPDATE PROFILE (BACKEND MATCH)
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put(
                `http://localhost:3000/user/update/${auth}`,
                profileData
            );

            alert("Profile updated successfully");
            setProfile(res.data);
            setVisible(false);
        } catch (err) {
            console.log(err);
            alert("Update failed");
        }
    };

    return (
        <div className="min-h-screen flex items-centeer justify-center bg-gray-200">

           

            {/* PROFILE VIEW */}
            <div className="profile-data">
                 <h1>Profile</h1>
                 <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="profile"
            />
               

                <h2>Name -- {profile?.Name}</h2>
                <h3>Email -- {profile?.email}</h3>
              
                <h3>Password -- {profile?.password}</h3>

                <button onClick={() => setVisible(true)}>
                    Edit Profile
                </button>
                <Link to={"/order"}>
                    <button className="order-btn">My Orders</button>
                </Link>


            </div>

            {/* EDIT FORM */}
            <form
                style={{ display: visible ? "flex" : "none" }}
                onSubmit={handleSubmit}
                className="edit-form"
            >
                <h2>Edit Profile</h2>

                <input
                    name="Name"
                    value={profileData.Name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2"
                />

                <input
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2"
                />
               
                <input
                    type="password"
                    name="password"
                    value={profileData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border p-2"
                />

                <button type="submit" className="save-btn">
                    Save
                </button>

            </form>
        </div>
    );
}

export default Profile;