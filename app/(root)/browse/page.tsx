"use client"
import Login from '@/components/shared/login'
import { useStore } from '@/store'
import { redirect } from 'next/navigation'
import React from 'react'

const BrowsePage = () => {
    const {name} = useStore()

   if(name !== 'Abdurahmon') return <Login/>
   
  return (
    <div>BrowsePage </div>
  )
}

export default BrowsePage