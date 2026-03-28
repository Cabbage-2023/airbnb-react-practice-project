import styled from 'styled-components';

export const ItemWrapper = styled.div`
  /* 假设一行显示 4-5 个，这里设置 flex-shrink 保证不被挤压 */
  flex-shrink: 0;
  width: 20%; /* 也可以根据需求改成固定宽度 */
  padding: 8px;
  box-sizing: border-box;

  .inner {
    width: 100%;
    overflow: hidden;
  }

  .item-info {
    position: relative;
    width: 100%;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .cover {
      width: 100%;
      vertical-align: top;
      /* 保证图片比例一致，防止变形 */
      aspect-ratio: 2/3; 
      object-fit: cover;
    }

    /* 核心：渐变暗色遮罩 */
    .bg-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%; /* 遮罩高度占 60%，从中间到底部渐变 */
      background: linear-gradient(
        to bottom, 
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0.7) 100%
      );
      z-index: 1;
    }

    .info {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 15px;
      z-index: 2; /* 确保文字在遮罩之上 */
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;

      .city {
        font-size: 18px;
        font-weight: 700;
      }

      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`;