import React from 'react'
import Heading from '../components/Heading'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import Button from '../components/Button'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-8 bg-[#cebce5] h-screen'>
      <div className='flex justify-between items-center'>
        <div className='pl-3'><Heading title={"Payments App"} /></div>
        
        <div className='flex p-6 items-center gap-2'><div className='font-semibold text-lg'>Hello,User</div><div className="flex flex-col justify-center rounded-full h-10  w-10 p-2 text-xl bg-gray-400 text-center">
                    U
                </div> </div>
              
      </div>
      <Balance value={"$5000"} />
      <Users/>
    </div>
  )
}

