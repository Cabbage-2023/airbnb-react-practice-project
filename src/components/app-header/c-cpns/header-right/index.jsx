import React, { memo } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
import { useState,useEffect } from 'react'

const HeaderRight = memo(() => {
  //定义组件内部的状态
  const [showPanel, setShowPanel]=useState(false)
  //副作用代码(点击其他地方关闭面板)
  useEffect(()=>{
    function windowHandleClick(){
      setShowPanel(false)
    }
      window.addEventListener('click',windowHandleClick,true)
      return ()=>{
        window.removeEventListener('click',windowHandleClick,true)
      }
  },[])
  function profileClickHandle(){
    setShowPanel(true)
    //点击以后，离开这块，面板依旧展开，需要点击其他地方才关闭、包括控制台
  }
  

  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {showPanel&&(<div className="panel">
          <div className="top2">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom">
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        </div>)}

      </div>

      
    </RightWrapper>
  )
})

export default HeaderRight