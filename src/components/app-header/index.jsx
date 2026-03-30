import React, { memo,useRef,useState } from 'react'
import { useSelector,shallowEqual } from 'react-redux'
import classNames from 'classnames'


import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { SearchAreaWrapper } from './style'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'


const AppHeader = memo(() => {
  const [isSearch,setIsSearch]=useState(false)

  const {headerConfig} = useSelector(state=>({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const {isFixed,topAlpha}=headerConfig 
  // console.log(isFixed)

  // 2. 监听滚动事件,判断是否需要固定
  const {scrollY}=useScrollPosition()
  const prevY=useRef(scrollY)
  // 非搜索框时,更新 prevY
  if(!isSearch) prevY.current=scrollY
  // 搜索框关闭时,判断是否需要固定
  if(isSearch && Math.abs(scrollY-prevY.current)>30) setIsSearch(false)

  // 3. 处理顶部透明度
  const isAlpha=topAlpha && scrollY===0
    
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper $isAlpha={isAlpha} className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha||isSearch} searchBarClick={e=>setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper $isSearch={isAlpha||isSearch}/>
        </div>
        {isSearch && <div className="cover" onClick={()=>setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader