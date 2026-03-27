import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'



const Home = memo(() => {
  //从redux里获取数据
  const {goodPriceInfo,highScoreInfo}=useSelector(state=>({
      goodPriceInfo:state.home.goodPriceInfo,
      highScoreInfo:state.home.highScoreInfo
    }),shallowEqual)
    //shallowEqual的作用是避免useSelector在每次渲染时都调用一次selector函数，
    //如果state没有改变，那么selector函数就不会被调用

  //派发异步事件，发送网络请求
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        {/* 只有当 goodPriceInfo 确实有值（比如有 title）的时候才渲染组件 */}
        { goodPriceInfo && <HomeSectionV1 infoData={goodPriceInfo}/> }
        { highScoreInfo && <HomeSectionV1 infoData={highScoreInfo}/> }
      </div>

      
    </HomeWrapper>
  )
})

export default Home