import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export default function useScrollTop(){
  const Location=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[Location.pathname])
}