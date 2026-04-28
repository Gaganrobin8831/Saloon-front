import React, { useState } from "react";
import "./BookAppointment.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookAppointment = () => {
  const { serviceId,payment } = useParams();
  const userId = JSON.parse(localStorage.getItem("token"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
   
    date: "",
    time: "",
    message: ""
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/order/", {
        UserId: userId,
        ServiceId: serviceId,
        appointmentDate: formData.date,
        time: formData.time,
        status: "booked",
        payment: payment, 
        paymentMethod: "cash",
        paymentStatus: "pending",
        phone: formData.phone
      });

      alert("Appointment Booked Successfully ✅");
      console.log(response.data);

    } catch (error) {
      console.log(error);
      alert("Booking Failed ❌");
    }
  };

  return (
    <section className="appointment">
      <div className="appointment-container">
        
        <h2>Book an Appointment</h2>
        <p>Get the best beauty services from our experts</p>

        <form className="appointment-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>

          
          <div className="form-group">
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="time" 
              name="time"
              value={formData.time}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Book Now
          </button>

        </form>
      </div>
    </section>
  );
};

export default BookAppointment;