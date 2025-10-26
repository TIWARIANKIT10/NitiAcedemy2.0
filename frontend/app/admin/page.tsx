// app/admin/page.tsx
import React from "react";

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

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("http://localhost:4080/api/user", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

// Function to filter users by time
const filterUsersByTime = (users: User[], period: "1d" | "1w" | "1m") => {
  const now = new Date();
  let threshold: Date;

  switch (period) {
    case "1d":
      threshold = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 1 day ago
      break;
    case "1w":
      threshold = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 1 week ago
      break;
    case "1m":
      threshold = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
      break;
    default:
      threshold = new Date(0); // all time
  }

  return users.filter(user => new Date(user.createdAt) >= threshold);
};

const AdminPage = async () => {
  const users = await fetchUsers();

  // Example: filter last 1 week users
  const recentUsers = filterUsersByTime(users, "1w");

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
