import { useState, useContext } from "react";
import "./Feedback.css";
import { authContext } from "../../../components/context/authContext";
import axios from "axios";

function Feedback() {
  const [form, setForm] = useState({
    Name: "",
    email: "",
    message: "",
    rating: ""
  });

  const [success, setSuccess] = useState(false);

  const { auth } = useContext(authContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!auth) {
    alert("Please login first to submit feedback!");
    return;
  }

  try {
    await axios.post("http://localhost:3000/feedback", {
      Name: form.Name,
      email: form.email,
      message: form.message,
      rating: form.rating
    });

    setSuccess(true);
    setForm({ Name: "", email: "", message: "", rating: "" });

    setTimeout(() => setSuccess(false), 3000);

  } catch (err) {
    console.error(err);
    alert("Error submitting feedback");
  }
};

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Feedback</h2>

        <input 
          type="text"
          name="Name" 
          value={form.Name} 
          onChange={handleChange} 
          placeholder="Enter Your Name" 
          required 
        />

        <input 
          type="email"  
          name="email"
          value={form.email} 
          onChange={handleChange} 
          placeholder="Enter Your Email" 
          required 
        />
        
        <textarea 
          name="message" 
          value={form.message} 
          onChange={handleChange} 
          placeholder="Your feedback" 
          required 
        />

        <select 
          name="rating" 
          value={form.rating} 
          onChange={handleChange}
        >
          <option value="">Rate Us</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <button type="submit">Submit</button>

        {success && <p className="success-msg">✅ Feedback submitted!</p>}
      </form>
    </div>
  );
}

export default Feedback;