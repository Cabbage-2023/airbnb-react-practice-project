import React, { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeHeaderConfig } from '@/store/modules/main'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
  

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeHeaderConfig({isFixed:false,topAlpha:false}))
  },[dispatch])




  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail