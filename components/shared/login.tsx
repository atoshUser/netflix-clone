import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div className={`min-w-[390px] md:w-full h-screen `}>
        <div className="absolute  inset-0">
            <Image src={`https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4`}
             alt='Login' fill  className='object-cover'/>
        </div>
        <div className='relative z-40 bg-black/60 rounded-md max-w-[500px] left-1/2 top-1/2 -translate-x-1/2  
        -translate-y-1/2   h-[50vh] px-8 py-4'>
          <div className='flex flex-col space-y-4 h-full items-center justify-center'>
          <h1 className='text-4xl font-bold'>Login</h1>
          <Button className={`mt-4 w-full flex items-center gap-4 bg-red-600 hover:bg-red-500 text-white`}>
            Sign in with Github
             <FaGithub className='w-5 h-5'/>
          </Button>
          </div>
          
        </div>
    </div>
  )
}

export default Login