import  { useEffect } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router'
import Modal from '../ModalDrink'
import { useAppStore } from '../../stores/useAppStore'
import Notification from '../Notification'

export default function MainLayout() {

  const loadData = useAppStore((state)=> state.loadFromStorage)

  useEffect(()=>{

    loadData()

  },[])

  return (
    <>
    
      <Header/>

      <main className=' container mx-auto py-8 px-5'>

          <Outlet/>

      </main>

      <Modal/>
      
      <Notification/>

    </>
  )
}
