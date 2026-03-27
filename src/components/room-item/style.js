import styled from 'styled-components'

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${props=>props.$itemWidth};
  padding: 8px;

  .inner{
    width: 100%;
  }

  .cover{
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;  
    }
  }

  

  .desc{
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props=>props.$verifyColor};
  }

  .name{
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    min-height: 36.8px;
  }

  .price{
    font-size: 14px;
    font-weight: 700;
    color: #39C5BB;
  }

  .rateStar {
    display: flex;
    align-items: center;
    margin-top: 4px;
    flex-wrap: wrap;    /* 响应式：如果名字太长，允许它换行而不撑破容器 */

    /* 关键代码：通过深度选择器修改 antd 组件内部样式 */
    .ant-rate {
      display: flex;     /* 确保 antd 内部也是 flex 布局 */
      font-size: 10px;   /* 你之前设置的 12px 如果觉得大可以再调小 */
      
      .ant-rate-star {
        margin-inline-end: 1px; /* 你刚才调的紧凑间距 */
      }
    }
  }

  /* 如果你想让星星后的文字对齐，可以在这里加 */
  /* 评论数量的样式 */
  .count {
      margin-left: 4px;   /* 与星星保持一点距离 */
      font-size: 10px;    /* 爱彼迎的评论数通常很小 */
      font-weight: 600;   /* 加粗一点点更有质感 */
      color: #484848;     /* 深灰色 */
      
      /* 这里的 line-height 很关键，有时能解决 1px 的对齐偏差 */
      line-height: 1;
    }

    .extra {
      margin-left: 4px;   /* 与评论数保持一点距离 */
      font-size: 11px;
      /* font-weight: 600; */
      color: #484848;     /* 这里的颜色可以根据 UI 稿微调 */
      
      /* 细节：有时候超赞房东的文字比较多，可以通过这种方式防止它太突兀 */
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;
    }
    

`