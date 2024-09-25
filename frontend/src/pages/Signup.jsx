import React, { useState } from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Label from "../components/Label";
import Input from "../components/Inp1";
import Button from "../components/Button";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom"


function Signup() {
  const [firstName,setfirstname]=useState("")
  const [lastName,setlastname]=useState("")
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  return (
<div className="bg-[#834da0] h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-[#cebce5] w-80 text-center p-2 h-max px-4 flex flex-col gap-5">
        <Heading title={"Sign Up"} />
          <Subheading lable={"Enter your info to create your account"} />
          <div className="flex flex-col gap-2"><Label label={"First Name"}/>
          <Input placeholder={"John Doe"} onchange={e=>{
            setfirstname(e.target.value)
          }}/></div>
          
          <div className="flex flex-col gap-2"><Label label={"Last Name"}/>
          <Input placeholder={"Smith"} onchange={e=>{
            setlastname(e.target.value)
          }}/></div>
          
          <div className="flex flex-col gap-2"><Label label={"Email"}/>
          <Input placeholder={"JohnDoe@gmail.com"} onchange={e=>{
            setusername(e.target.value)
          }}/></div>
          <div className="flex flex-col gap-2"><Label label={"Password"}/>
          <Input placeholder={"8-32 characters"} onchange={e=>{
            setpassword(e.target.value)
          }}/></div>
          
          <Button label={"Sign up"} onclick={async()=>{
            const response=await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
          }}/>
          <p>Already have account?<a href="#" onClick={()=>{navigate("/signin")}}><span className="underline">Sign in</span></a></p>
      </div></div></div>
      

  );
}

export default Signup;
