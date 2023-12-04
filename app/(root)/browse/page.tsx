"use client"
import Login from '@/components/shared/login'
import ManageAccount from '@/components/shared/manage-account'
import { useStore } from '@/store'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const BrowsePage = () => {
    const {account} = useStore()

     const {data:session} = useSession()
   if(account == null) return <ManageAccount/>  
  if(session == null) return <Login/>
  console.log(session);
     
     
         
  return (
    <div>BrowsePage </div>
  )
}

export default BrowsePage