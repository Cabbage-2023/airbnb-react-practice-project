// HeaderCenter/index.jsx
import React, { memo,useState,useRef } from 'react'
import { CSSTransition } from 'react-transition-group' 

import SearchTitles from '@/assets/data/search_titles.json'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar' 


const HeaderCenter = memo((props) => {
  const {isSearch,searchBarClick}=props
  const titles=SearchTitles.map(item=>item.title)
  const [tabIndex,setTabIndex]=useState(0)

  // 1. 定义两个独立的 Ref
  const barRef = useRef(null)
  const detailRef = useRef(null)

  function searchBarClickHandle(){
    if(searchBarClick) searchBarClick()
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
        nodeRef={barRef} //必须传这个，否则它会去调用 findDOMNode
        onExited={() => setTabIndex(0)} // 动画退出后重置
      > 
        <div className="search-bar-rich" ref={barRef}>
          <div className="search-bar" onClick={searchBarClickHandle}>
              <div className="text">
                搜索房源和体验
              </div>
              <div className="icon">
                <IconSearchBar />
              </div>
            </div>
        </div>     
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
        nodeRef={detailRef} // 绑定另一个独立的 Ref
        onExited={() => setTabIndex(0)} // 动画退出后重置
      >
        <div className="search-bar-rich" ref={detailRef}>
          <div className="search-detail">
            <SearchTabs titles={titles} tabClick={setTabIndex}/>
            <div className="infos">
              <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}/>
            </div>
          </div>
        </div>    
      </CSSTransition>
      
    </CenterWrapper>
  )
})

export default HeaderCenter