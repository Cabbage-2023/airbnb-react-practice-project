import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'


import { IndicatorWrapper } from './style'


const Indicator = memo((props) => {
  const {selectIndex=0}=props 
  const contentRef=useRef()

  useEffect(()=>{
    //先获取selectIndex对应的item
    const selectItemElement=contentRef.current.children[selectIndex]
    const itemOffsetLeft=selectItemElement.offsetLeft
    const itemWidth=selectItemElement.clientWidth
    //获取content的宽度
    const contentWidth=contentRef.current.clientWidth
    const contentScroll=contentRef.current.scrollWidth
    //计算滚动距离
    let distance=itemOffsetLeft+itemWidth*0.5-contentWidth*0.5
    if(distance<0) distance=0//左边的特殊处理
    const totalDistance=contentScroll-contentWidth
    if(distance>totalDistance) distance=totalDistance//右边的特殊处理
    //上面这一段我是真没看懂

    contentRef.current.style.transform=`translateX(${-distance}px)`

  },[selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex:PropTypes.number,
}

export default Indicator