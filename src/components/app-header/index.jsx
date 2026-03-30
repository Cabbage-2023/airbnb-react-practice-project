import React, { memo } from 'react'
import { useSelector,shallowEqual } from 'react-redux'
import classNames from 'classnames'


import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'

const AppHeader = memo(() => {
  const {headerConfig} = useSelector(state=>({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const {isFixed}=headerConfig
  // console.log(isFixed)
    
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader