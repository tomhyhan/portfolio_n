'use client';

import React from 'react'
import { FaUserCircle } from "react-icons/fa";

import { signIn } from "next-auth/react"

export default function LoginBtn() {
  return (
    <div className=' bg-slate-800 flex pt-4
     items-start lg:pt-0 lg:items-center text-white py-auto pr-5' 
     onClick={() => signIn()}>
        <FaUserCircle size="32px" className="cursor-pointer" />
    </div>
  )
}

