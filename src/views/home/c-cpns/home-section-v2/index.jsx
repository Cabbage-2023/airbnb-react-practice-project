import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'


import { SectionV2Wrapper } from './styled'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  
  // 1. 定义初始索引
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // 2. 根据索引计算出初始的城市名
  // 这样 name 永远跟随 currentIndex 变化
  const tabNames = infoData.dest_address?.map(item => item.name) || []
  const name = tabNames[currentIndex] 

  // 3. 点击回调：同时更新索引
  const tabClickHandle = useCallback((index, name) => {
    setCurrentIndex(index) // 更新索引，触发重绘
    // 这里不需要再写 setName 了，因为 name 是根据 currentIndex 算出来的
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      {/* 传下去：当前该亮哪一个 */}
      <SectionTabs 
        tabNames={tabNames} 
        currentIndex={currentIndex} 
        tabClick={tabClickHandle}
      />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%"/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2