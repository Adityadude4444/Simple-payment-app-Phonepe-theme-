import React, { useState } from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Label from "../components/Label";
import Input from "../components/Inp1";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom"

function Signin() {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  return (
    <div className="bg-[#834da0] h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-[#cebce5] w-80 text-center p-2 h-max px-4 flex flex-col gap-5">
      <Heading title={"Sign Up"} />
          <Subheading lable={"Enter your info to create your account"} />
          <div className="flex flex-col gap-2"><Label label={"Email"}/>
          <Input placeholder={""} onchange={e=>{
            setusername(e.target.value)
          }}/></div>
          
          <div className="flex flex-col gap-2"><Label label={"Password"}/>
          <Input placeholder={""} onchange={e=>{
            setpassword(e.target.value)
          }}/></div><button onClick={async()=>{
            const response=await axios.post("http://localhost:3000/api/v1/user/signin", {
              username,
              password
            });
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
          }} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign in</button></div>
          
        </div></div>
  );
}

export default Signin;
