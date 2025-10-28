"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Example() {
  const router = useRouter();
    const [formData , setFormData]= useState({
      email:"",
      password:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault(); 
     console.log(formData)
     try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/user/admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include" 
      });
      // handle response if needed
      const data = await res.json();

      console.log("response", data);
      if(data.success){
        localStorage.setItem('authToken', data.token);
        router.push("/admin")
   

      }
     } catch(errr){
        console.log(errr);
     }

  }
  return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form 
  onSubmit={handlesubmit}
  className="bg-white text-gray-700 w-full max-w-md mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login In </h2>

    

    <input
      id="email"
      className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
      type="email"
      placeholder="Email"
      onChange={handleChange}
      value={formData.email}
      name="email"
      
      
    />

    <input
      id="password"
      className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
      type="password"
      placeholder="Password"
      value={formData.password}
       onChange={handleChange}
       name="password"
     
      required
    />

    <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">
      Login Account
    </button>

  </form>
</div>

    );
};