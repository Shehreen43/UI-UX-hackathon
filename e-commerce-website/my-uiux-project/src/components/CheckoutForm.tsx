"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";

const CheckoutForm = () => {
  const [checkoutData, setCheckoutData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
  });

  const [orderDetails, setOrderDetails] = useState<any>(null);

  // Sample product details (you can replace with cart data)
  const products = [
    { id: 1, name: "Smartphone", price: 499, quantity: 2 },
    { id: 2, name: "Wireless Earbuds", price: 99, quantity: 1 },
    { id: 3, name: "Laptop", price: 899, quantity: 1 },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    for (let key in checkoutData) {
      if (!checkoutData[key as keyof typeof checkoutData]) {
        toast.error(`Please fill in your ${key}`, { position: "top-right" });
        return;
      }
    }

    // Calculate total amount
    const totalAmount = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderDate = new Date().toISOString();

    const orderData = {
      ...checkoutData,
      products,
      totalAmount,
      orderDate,
      _type: "order", // Important for Sanity schema
    };

    try {
      // Store order in Sanity
      const response = await client.create(orderData);
      setOrderDetails(orderData);
      toast.success("Order placed successfully!", { position: "top-right" });

      // Clear form
      setCheckoutData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
        city: "",
      });

      console.log("Sanity Response:", response);
    } catch (error) {
      console.error("Sanity Error:", error);
      toast.error("Failed to place order!", { position: "top-right" });
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />
      
      {/* Checkout Form */}
      <form 
        onSubmit={handleSubmit} 
        className="space-y-4 p-6 border rounded shadow-md max-w-2xl mx-auto bg-white"
      >
        <h2 className="text-2xl font-semibold text-center">Checkout</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={checkoutData.firstName} onChange={handleChange} className="border p-2 w-full rounded"/>
          <input type="text" name="lastName" placeholder="Last Name" value={checkoutData.lastName} onChange={handleChange} className="border p-2 w-full rounded"/>
        </div>

        <input type="email" name="email" placeholder="Email" value={checkoutData.email} onChange={handleChange} className="border p-2 w-full rounded"/>
        <input type="tel" name="phone" placeholder="Phone Number" value={checkoutData.phone} onChange={handleChange} className="border p-2 w-full rounded"/>
        <input type="text" name="address" placeholder="Address" value={checkoutData.address} onChange={handleChange} className="border p-2 w-full rounded"/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="city" placeholder="City" value={checkoutData.city} onChange={handleChange} className="border p-2 w-full rounded"/>
          <input type="text" name="zipcode" placeholder="Zip Code" value={checkoutData.zipcode} onChange={handleChange} className="border p-2 w-full rounded"/>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full text-lg font-semibold transition">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
