import "./Checkout.css";
import { useCart } from "react-use-cart";
import axios from "axios";
import { useState } from "react";

function Checkout() {

  const { items, cartTotal, emptyCart } = useCart();

  const token = JSON.parse(localStorage.getItem("token"));

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "cash",
    upiId: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        items: items.map(item => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          total: item.price * item.quantity,
          image: item.imageUrl
        })),
        UserId: token,
        payment: cartTotal,
        paymentMethod: form.paymentMethod,
        paymentStatus: form.paymentMethod === "cash" ? "pending" : "complete",
        address: form.address
      };

      const res = await axios.post(
        "http://localhost:3000/payment/",
        payload
      );
      if (res.status === 200 || res.status === 201) {
        // 3. IMPORTANT: LocalStorage vich save karo taaki Order.jsx read kar sake
        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        localStorage.setItem("orders", JSON.stringify([payload, ...existingOrders]));

        alert("Order Confirmed Successfully!");
        emptyCart(); // Cart khali karo
        window.location.href = "/orders"; // Orders page te bhejo
      }
      // console.log(res.data);
      // alert("Order Confirmed Successfully");

      // emptyCart();

    } catch (error) {
      console.log(error);
      alert("Error placing order");
    }
  };

  return (
    <div className="checkout-data" >
      <div className="checkout">
        <h2>Checkout</h2>

        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))}

        <h3>Total: ₹{cartTotal}</h3>

        <form className="checkout-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          {/* ✅ Payment Method Select */}
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
          >
            <option value="cash">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="card">Card</option>
          </select>

          {/* ✅ Conditional Fields */}

          {form.paymentMethod === "UPI" && (
            <input
              type="text"
              name="upiId"
              placeholder="Enter UPI ID (e.g. abc@upi)"
              onChange={handleChange}
              required
            />
          )}

          {form.paymentMethod === "card" && (
            <>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                onChange={handleChange}
                required
              />
            </>
          )}

          {form.paymentMethod === "cash" && (
            <p style={{ color: "green" }}>
              Pay when delivered 🚚
            </p>
          )}

          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;