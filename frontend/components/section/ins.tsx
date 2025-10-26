"use client";
import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";

type Instructor = {
  id: number;
  name: string;
  role: string;
  image: string;
  category: string;
};

const instructors: Instructor[] = [
  { id: 1, name: "Jenny Wilson", role: "UI Designer", image: "/jessy-pinkmen.jpg", category: "Web Development" },
  { id: 2, name: "John Doe", role: "Frontend Developer", image: "/jessy-pinkmen.jpg", category: "Web Development" },
  { id: 3, name: "Michael Smith", role: "Backend Developer", image: "/jessy-pinkmen.jpg", category: "IT & Software" },
  { id: 4, name: "Emily Johnson", role: "UI Designer", image: "/jessy-pinkmen.jpg", category: "Design" },
];

const categories = ["All", "Web Development", "IT & Software", "Design"];

export default function Instructors() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInstructors =
    selectedCategory === "All"
      ? instructors
      : instructors.filter((inst) => inst.category === selectedCategory);

  return (
    <section className="bg-gray-200 w-[90%] mx-auto py-16 px-6 md:px-12 lg:px-24 rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-pink-500 font-medium mb-2">Instructors</p>
        <h2 className="text-4xl font-bold mb-6">
          Our Expert <span className="text-pink-500">Instructors</span>
        </h2>

        {/* Category Dropdown */}
        <div className="mb-10">
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Instructor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredInstructors.map((inst) => (
            <div
              key={inst.id}
              className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={inst.image}
                  alt={inst.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <button className="absolute top-4 right-4 bg-gray-900 text-white p-2 rounded-full hover:bg-pink-500 transition-colors">
                <Plus className="w-4 h-4" />
              </button>

              <h3 className="text-lg font-semibold text-gray-900">{inst.name}</h3>
              <p className="text-gray-500 mt-1">{inst.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}