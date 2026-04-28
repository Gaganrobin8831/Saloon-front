import React, { useEffect, useState } from 'react';
import './Order.css';
import axios from 'axios';

function Order() {
    const userId = JSON.parse(localStorage.getItem("token"));

    const [orders, setOrders]     = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function GetOrders() {
            try {
                const savedOrders    = await axios.get("http://localhost:3000/payment/payments");
                const savedServices  = await axios.get(`http://localhost:3000/order/GetUserOrders/${userId}`);

                // ✅ filter only current user product orders
                const userOrders = savedOrders.data.filter(
                    (order) => order.UserId?._id === userId
                );

                setOrders(userOrders);
                setServices(savedServices.data);

            } catch (error) {
                console.log(error);
            }
        }
        GetOrders();
    }, [userId]);

    // ──────────────────────────────────────────────
    // Cancel a service booking
    // ──────────────────────────────────────────────
    const handleCancel = async (serviceId) => {
        const confirmed = window.confirm("Are you sure you want to cancel this booking?");
        if (!confirmed) return;

        try {
            const res = await axios.put(`http://localhost:3000/order/cancel/${serviceId}`);
            // Update status locally without re-fetching
            setServices((prev) =>
                prev.map((s) =>
                    s._id === serviceId ? { ...s, status: res.data.status } : s
                )
            );
        } catch (error) {
            console.log(error);
            alert("Failed to cancel booking ❌");
        }
    };

    // ──────────────────────────────────────────────
    // Delete a (cancelled) service booking
    // ──────────────────────────────────────────────
    const handleDelete = async (serviceId) => {
        const confirmed = window.confirm("Delete this booking permanently?");
        if (!confirmed) return;

        try {
            await axios.delete(`http://localhost:3000/order/del/${serviceId}`);
            setServices((prev) => prev.filter((s) => s._id !== serviceId));
        } catch (error) {
            console.log(error);
            alert("Failed to delete booking ❌");
        }
    };

    return (
        <div className="orders-wrapper">

            <h1>My Orders</h1>

            {/* ================= PRODUCTS ================= */}
            <h2 className="section-title">🛒 Product Orders</h2>

            {orders.length === 0 ? (
                <p>No product orders</p>
            ) : (
                orders.map((order) => (
                    <div className="order-card" key={order._id}>

                        <div className="order-header">
                            <div>
                                <p>Order #{order._id}</p>
                                <small>
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </small>
                            </div>

                            <span className={`status ${order.paymentStatus}`}>
                                {order.paymentStatus}
                            </span>
                        </div>

                        {/* PRODUCTS */}
                        {order.items.map((item) => (
                            <div className="product-item" key={item._id}>

                                <img src={item.productId.imageUrl} alt="" />

                                <div>
                                    <h4>{item.productId.productName}</h4>
                                    <p>{item.productId.brand}</p>
                                    <span>₹{item.productId.price}</span>
                                </div>

                            </div>
                        ))}

                        <div className="order-footer">
                            <strong>Total: ₹{order.payment}</strong>
                        </div>

                    </div>
                ))
            )}

            {/* ================= SERVICES ================= */}
            <h2 className="section-title">💇 Service Bookings</h2>

            {services.length === 0 ? (
                <p>No service bookings</p>
            ) : (
                services.map((service) => (
                    <div className="order-card" key={service._id}>

                        <div className="order-header">
                            <div>
                                <p>Booking #{service._id}</p>
                                <small>
                                    {new Date(service.createdAt).toLocaleDateString()}
                                </small>
                            </div>

                            <span className={`status ${service.status}`}>
                                {service.status}
                            </span>
                        </div>

                        {/* SERVICE DETAILS */}
                        <div className="service-card">
                            <h3>{service.ServiceId?.serviceName}</h3>

                            <p><strong>Category:</strong> {service.ServiceId?.category}</p>
                            <p><strong>Price:</strong> ₹{service.ServiceId?.price}</p>
                            <p><strong>Date:</strong> {service.appointmentDate}</p>
                            <p><strong>Time:</strong> {service.time}</p>
                            <p><strong>Status:</strong> {service.status}</p>
                            <p><strong>Phone:</strong> {service.phone}</p>

                            {/* ── REFUND MESSAGE (shown only when cancelled) ── */}
                            {service.status === 'cancelled' && (
                                <div className="refund-notice">
                                    💰 Your payment of ₹{service.payment} will be refunded soon. Thank you for your patience!
                                </div>
                            )}
                        </div>

                        {/* ── ACTION BUTTONS ── */}
                        <div className="booking-actions">

                            {/* Cancel button — visible only when NOT already cancelled */}
                            {service.status !== 'cancelled' && (
                                <button
                                    className="btn-cancel"
                                    onClick={() => handleCancel(service._id)}
                                >
                                    ✖ Cancel Booking
                                </button>
                            )}

                            {/* Delete button — visible only when cancelled */}
                            {service.status === 'cancelled' && (
                                <button
                                    className="btn-delete"
                                    onClick={() => handleDelete(service._id)}
                                >
                                    🗑 Delete Booking
                                </button>
                            )}

                        </div>

                    </div>
                ))
            )}

        </div>
    );
}

export default Order;