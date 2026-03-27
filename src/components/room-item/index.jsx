import React, { memo } from 'react'
import { ItemWrapper } from './style'
import PropTypes from 'prop-types'
import RateStar from '@/components/rate-star'

const RoomItem = memo((props) => {
  const {itemData,itemWidth="25%"}=props

  return (
    //加$是为了在style.js里使用verifyColor，不然HTML会觉得这是自己的属性
    <ItemWrapper 
      $verifyColor={itemData?.verify_info?.text_color||'#39C5BB'}
      $itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt=''/>
        </div>
        <div className="desc">
          {itemData.verify_info.messages.join(' . ')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
      </div>
      <div className="rateStar">
        <RateStar value={itemData.star_rating??3} />
        <span className="count">{itemData.reviews_count}</span>
        {
          // 如果后端有返回 bottom_info 且有内容，才渲染
          itemData.bottom_info && (
            <span className="extra">· {itemData.bottom_info.content}</span>
          )
        }
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes={
  itemData: PropTypes.object
}

export default RoomItem
