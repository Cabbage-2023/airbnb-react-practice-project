import PropTypes, { func } from 'prop-types'
import React, { memo, useState,useRef,useEffect } from 'react'


import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'


const ScrollView = memo((props) => {
  //定义状态，用于控制是否显示右侧按钮
  const [showLeft,setShowLeft]=useState(false)
  const [showRight,setShowRight]=useState(false)
  //定义状态，用于记录当前滚动到的位置
  const [posIndex,setPosIndex]=useState(0)
  //定义状态，用于记录滚动内容的宽度和滚动容器的宽度的差值
  const totalDistanceRef=useRef()
  //等到组件渲染完毕以后，判断是否需要显示右侧按钮
  const scrollContentRef=useRef()
  useEffect(()=>{
    //获取滚动内容的宽度和滚动容器的宽度
    //如果滚动内容的宽度大于滚动容器的宽度，那么就显示右侧按钮
    //否则就不显示右侧按钮
    const scrollWidth=scrollContentRef.current.scrollWidth
    const clientWidth=scrollContentRef.current.clientWidth
    const totalDistance=scrollWidth-clientWidth
    totalDistanceRef.current=totalDistance
    setShowRight(totalDistance>0)
  },[props.children])

  function controlClickHandle(isRight){
    const newIndex=isRight?posIndex+1:posIndex-1
    const newElement=scrollContentRef.current.children[newIndex]
    const newOffsetLeft=newElement.offsetLeft
    scrollContentRef.current.style.transform=`translateX(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    //如果右边超出去的距离大于左边滚出去的距离，那么就不显示右侧按钮
    setShowRight(totalDistanceRef.current>newOffsetLeft)
    setShowLeft(newOffsetLeft>0)
  }

  return (
    <ViewWrapper>
      {/* 按钮现在相对于 ViewWrapper 定位，而 ViewWrapper 没有 overflow: hidden */}
      {showLeft && (
        <div className="control left" onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
  
      {/* 新增一个 scroll-wrapper，专门负责裁剪内容 */}
      <div className="scroll-wrapper">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {

}

export default ScrollView