import React, { memo, useCallback } from 'react'
import { shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeDetailInfo } from '@/store/modules/detail'

import { RoomsWrapper } from './style'
import { useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'


const EntireRooms = memo(() => {
  const {roomList,totalCount,isLoading}=useSelector((state)=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
  }),shallowEqual)

  // 点击房间项跳转详情页
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const itemClickHandle =useCallback((itemData)=>{
    dispatch(changeDetailInfo(itemData))
    navigate("/detail")
  },[navigate,dispatch])

  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <div className="list">
        {
          roomList?.map(item=>{
            return (
              <RoomItem 
                itemData={item} 
                itemWidth="20%" 
                key={item._id}
                itemClick={itemClickHandle}
              />
            )
          })
        }
      </div>

      {isLoading&&<div className="cover"></div>}
      
    </RoomsWrapper>
  )
})

export default EntireRooms