import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { PicturesWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'


const DetailPicture = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)


  const {detailInfo}=useSelector((state)=>({
    detailInfo:state.detail.detailInfo
  }),shallowEqual)

  // console.log(detailInfo)

  return (
    <PicturesWrapper>
      <div className="pictures" >
        <div className="left">
          <div className="item" onClick={e=>setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>

        <div className="right" onClick={e=>setShowBrowser(true)}>
          {
            detailInfo?.picture_urls?.slice(1,5).map((item,index)=>(
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            ))
          }

        </div>
      </div>
      <div className="show-btn" onClick={e=>setShowBrowser(true)}>显示照片</div>
      {showBrowser && (
          <PictureBrowser 
            pictureUrls={detailInfo?.picture_urls} 
            closeClick={e=>setShowBrowser(false)} 
          />
        ) 
      } 
    </PicturesWrapper>
  )
})

export default DetailPicture