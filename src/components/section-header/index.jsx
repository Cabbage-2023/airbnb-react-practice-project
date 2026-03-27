import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import PropTypes from 'prop-types'

const SectionHeader = memo((props) => {
  const{title,subtitle}=props

  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      { subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
})

//用于检查传入的props是否符合要求，和TS类型检查功能类似
SectionHeader.propTypes={
  title:PropTypes.string,
  subtitle:PropTypes.string
}

export default SectionHeader