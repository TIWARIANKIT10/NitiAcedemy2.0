"use client";
import React, { useState } from "react";


export default function RegistrationPage() {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    query: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill out all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("https://niti-acedemy2-0.vercel.app/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("✅ Registration submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          query: "",
        });
      } else {
        setError(data.message || "Something went wrong!");
      }
    
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg || "Failed to connect to the server.");
    }
  };

  return (
    <section className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-transparent">
        {/* Left Side Text */}
        <div className="flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-4">
            Your registration is just one step away from becoming a reality.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hey there 👋 <br />
            Ready to join us? Fill out the form and share a few details about
            yourself. Our team will connect with you shortly and help you get
            started!
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send us a <span className="text-cyan-500">message</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Name *
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-cyan-400 outline-none py-2 text-gray-800"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-cyan-400 outline-none py-2 text-gray-800"
                placeholder="john@mail.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Phone *
              </label>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-cyan-400 outline-none py-2 text-gray-800"
                placeholder="+977 98xxxxxxx"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Address
              </label>
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-cyan-400 outline-none py-2 text-gray-800"
                placeholder="Your address"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Message / Query
              </label>
              <textarea
                name="query"
                rows={3}
                value={formData.query}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-cyan-400 outline-none py-2 text-gray-800"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 px-6 rounded-full transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
