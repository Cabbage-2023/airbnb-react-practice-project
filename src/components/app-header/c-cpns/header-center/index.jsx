// HeaderCenter/index.jsx
import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar' 

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        {/* 文字：老版本的占位文字 */}
        <div className="text">
          搜索房源和体验
        </div>
        
        {/* 图标区：包括粉红圆圈和放大镜 */}
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter