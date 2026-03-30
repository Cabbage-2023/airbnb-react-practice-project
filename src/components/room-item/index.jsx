import React, { memo } from 'react'
import { Carousel } from 'antd';
import { useRef,useState } from 'react'


import { ItemWrapper } from './style'
import PropTypes from 'prop-types'
import RateStar from '@/components/rate-star'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const {itemData,itemWidth="25%",itemClick}=props
  const [selectIndex,setSelectIndex]=useState(0)
  const sliderRef=useRef()

  // 点击控制按钮切换图片
  function controlClickHandle(isRight=true,event){
    if(isRight) sliderRef.current?.next()
    else sliderRef.current?.prev()

    //最新索引
    let newIndex=isRight? selectIndex+1:selectIndex-1
    const length=itemData.picture_urls.length-1
    if(newIndex<0) newIndex=length
    if(newIndex>length)newIndex=0
    setSelectIndex(newIndex)

    // 这里需要阻止事件冒泡,否则点击控制按钮会触发点击房间项的事件
    event.stopPropagation()
  }


  // 点击房间项跳转详情页
  function itemClickHandle(){
    if(itemClick) itemClick(itemData)
  }

  //子元素的赋值
  const pictureElement=(
    <div className="cover">
      <img src={itemData.picture_url} alt=''/>
    </div>
  )
  const sliderElement=(
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e=>controlClickHandle(false,e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={e=>controlClickHandle(true,e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>  
          {
            itemData?.picture_urls?.map((item,index)=>{
              return (
                <div className='dot-item' key={index}>
                  <span className={classNames('dot',{"active":selectIndex==index})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item=>{
            return(
              <div className="cover" key={item}>
                <img src={item} alt=''/>
              </div>
            )
          })
        
          }
      </Carousel>
    </div>
  )

  return (
    //加$是为了在style.js里使用verifyColor，不然HTML会觉得这是自己的属性
    <ItemWrapper 
      $verifyColor={itemData?.verify_info?.text_color||'#39C5BB'}
      $itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* 有图片时渲染轮播图，否则渲染单张图片 */}
        {itemData.picture_urls ?sliderElement : pictureElement} 
        <div className="desc">
          {itemData.verify_info.messages.join(' . ')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
      </div>
      <div className="rateStar">
        <RateStar value={itemData.star_rating??3} />
        <span className="count">{itemData.reviews_count}</span>
        {
          // 如果后端有返回 bottom_info 且有内容，才渲染
          itemData.bottom_info && (
            <span className="extra">· {itemData.bottom_info.content}</span>
          )
        }
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes={
  itemData: PropTypes.object
}

export default RoomItem
