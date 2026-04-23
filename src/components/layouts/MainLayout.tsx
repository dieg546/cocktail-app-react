import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
    
        <Header/>

        <main className=' container mx-auto py-8 px-5'>

            <Outlet/>

        </main>

    </>
  )
}
