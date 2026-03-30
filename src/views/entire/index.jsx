import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'



import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchRoomList } from '@/store/modules/entire/actionCreator'
import { changeHeaderConfig } from '@/store/modules/main'


const Entire = memo(() => {
  //发送网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomList())
    dispatch(changeHeaderConfig({isFixed:true}))
  },[dispatch])



  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />  
    </EntireWrapper>
  )
})

export default Entire