import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '@/components/room-item'
import { RoomsWrapper } from './style.js'

const SectionRooms = memo((props) => {
  const {roomList=[]}=props

  return (
    <RoomsWrapper>
        {
          roomList.slice(0,8)?.map((item)=>{
            return <RoomItem key={item.id} itemData={item}/>
          })
        }
      </RoomsWrapper>
  )
})

SectionRooms.propTypes={
  roomList:PropTypes.array
}

export default SectionRooms

