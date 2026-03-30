import styled from 'styled-components'
// 1. 关键：把 RoomItem 用到的样式组件导进来
import { ItemWrapper } from '@/components/room-item/style' 

export const RoomsWrapper = styled.div`
  padding: 30px 20px;
  position: relative;
  margin-top: 128px;
  
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    /* 这里的 margin 通常用来抵消 item 的 padding，保持边缘对齐 */
    margin: 0 -8px; 

    /* 2. 直接针对 ItemWrapper 组件进行样式覆盖 */
    ${ItemWrapper}  {
      /* 只有卡片区域会有手型，间隙不会 */
      .cover, .name{
        cursor: pointer;
      }
    }
  }

  > .cover{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: rgba(255,255,255,0.8);
  }
`;