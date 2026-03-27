import classNames from 'classnames'
import { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { TabsWrapper } from './styled.js'


const SectionTabs = memo((props) => {
  // 从 props 接收 currentIndex，而不是自己定义
  const { tabNames = [], tabClick, currentIndex = 0 } = props

  function itemClickHandle(index, item) {
    // 自己不改状态，而是通过回调“请示”父组件去改
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => {
          return (
            <div
              key={index} 
              // 这里的 active 判断完全依赖父组件传来的 currentIndex
              className={classNames("item", { active: currentIndex === index })}
              onClick={e => itemClickHandle(index, item)}
            >
              {item}
            </div>
          )
        })         
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs