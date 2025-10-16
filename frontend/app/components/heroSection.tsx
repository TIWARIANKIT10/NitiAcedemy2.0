"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {LaptopMinimalCheck,BookOpenCheck,UserStar,FolderKanban,LaptopMinimal} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#c6d3e6] to-[#79b4f3] overflow-hidden py-20 flex flex-col items-center ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-25 gap-45">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f3c88] leading-tight ">
            Your First Step <br />
            Into the World of <br />
            <span className="text-[#ff6b6b]">IT Starts Here!</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-lg">
            Niti Academy is your ultimate destination to proceed into the tech
            world. We offer beginner to advanced courses designed to build strong
            foundations in the tech field.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#1f3c88] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#162a5f] transition">
              Explore More →
            </button>
            <button className="border-2 border-[#1f3c88] text-[#1f3c88] px-6 py-3 rounded-full hover:bg-[#1f3c88] hover:text-white transition">
              View All Services
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 mt-12 md:mt-0 relative flex justify-center"
        >
          <div className="absolute -z-10 w-[400px] h-[400px] bg-[#1f3c88]/10 rounded-full blur-3xl"></div>
          <Image
            src="/niti.jpg"
            alt="Hero Image"
            width={450}
            height={450}
            className="object-contain rounded-xl"
          />
        </motion.div>

        
      </div>
      <div className="relative py-16  overflow-hidden">
      {/* Circular Overlays (Background Decor) */}
     

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h3 className="font-semibold text-2xl text-blue-700 mb-8">Why Choose Our Courses</h3>
        <div className="flex flex-wrap justify-center gap-6 bg-blue-600 px-12 py-7 rounded-3xl">
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center w-48 h-24 justify-center bg-opacity-90">
            <LaptopMinimal className="w-8 h-8 text-gray-600 mb-2" />
            <p className="text-gray-700 text-sm font-medium">Beginner-Friendly Learning</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center w-48 h-24 justify-center bg-opacity-90">
            <FolderKanban className="w-8 h-8 text-gray-600 mb-2" />
            <p className="text-gray-700 text-sm font-medium">Hands-On Projects</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center w-48 h-24 justify-center bg-opacity-90">
            <UserStar className="w-8 h-8 text-gray-600 mb-2" />
            <p className="text-gray-700 text-sm font-medium">Expert Instructors</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center w-48 h-24 justify-center bg-opacity-90">
            <BookOpenCheck className="w-8 h-8 text-gray-600 mb-2" />
            <p className="text-gray-700 text-sm font-medium">Career-Focused Skills</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
