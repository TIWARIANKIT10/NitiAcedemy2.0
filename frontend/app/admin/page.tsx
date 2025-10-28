"use client";

import React, { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  phone: number;
  email: string;
  address: string;
  interest: string;
  createdAt: string;
  __v: number;
}

async function fetchUsers(): Promise<User[]> {
  const token = localStorage.getItem('authToken');
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/user/`, {
    method: "GET",
    headers:{
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`
    },
   // ✅ this sends cookies automatically
  });

  if (!res.ok) {
    console.error("Fetch failed:", res.status, res.statusText);
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

// Function to filter users by time
const filterUsersByTime = (users: User[], period: "1d" | "1w" | "1m") => {
  const now = new Date();
  let threshold: Date;

  switch (period) {
    case "1d":
      threshold = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      break;
    case "1w":
      threshold = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    case "1m":
      threshold = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    default:
      threshold = new Date(0);
  }

  return users.filter((user) => new Date(user.createdAt) >= threshold);
};

const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  const recentUsers = filterUsersByTime(users, "1w");

  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">Recent Users (Last 1 Week)</h1>
      {recentUsers.length === 0 && <p>No users found.</p>}
      {recentUsers.map((user) => (
        <div key={user._id} className="border p-4 mb-4 rounded shadow-lg">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Interest:</strong> {user.interest}</p>
          <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
