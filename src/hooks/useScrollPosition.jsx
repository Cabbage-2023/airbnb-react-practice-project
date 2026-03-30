import { useEffect, useState } from 'react'
import {throttle} from 'underscore'

export default function useScrollPosition() {
  const[scrollX,setScrollX]=useState(0)
  const[scrollY,setScrollY]=useState(0)

  useEffect(()=>{
    // 1. 监听滚动事件, 并节流
    const handleScroll=throttle(()=>{
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    },200)
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return {
    scrollX,
    scrollY
  }
}
