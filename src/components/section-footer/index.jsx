import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const {name}=props

  let showMessage="显示全部"
  if(name){
    showMessage=`显示更多${name}房源`
  }

  //跳转更多房源
  const navigate=useNavigate()
  function moreClickHandle(){
    navigate("/entire")
  }

  return (
    <FooterWrapper color={name?"#39C5BB":"#000"} onClick={moreClickHandle}>
      <div className="info">
        <div className="text">{showMessage}</div>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
 name:PropTypes.string
}

export default SectionFooter