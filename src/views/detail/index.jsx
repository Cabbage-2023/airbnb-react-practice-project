import React, { memo } from 'react'

import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
  

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail