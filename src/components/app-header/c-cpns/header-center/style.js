// HeaderCenter/style.js
import styled from 'styled-components'

export const CenterWrapper = styled.div`
  /* 确保在 Header 组件中水平居中 */
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;
  /* 关键：给搜索区域一个固定高度，防止子元素脱离文档流导致父级塌陷 */
  height: 80px;

  /* 统一搜索栏和小搜索条的基础样式，防止动画切换时位置跳动 */
  .search-bar, .search-detail {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 完美的水平垂直居中方案 */
    z-index: 999;
  }

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    /* 1. 加大尺寸：匹配老版本的宽大气感 */
    width: 380px;  /* 从 300px 增加到 380px 左右 */
    height: 60px;  /* 从 48px 增加到 60px */
    
    /* 2. 边框与阴影 */
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 30px; /* 高度的一半 */

    cursor: pointer;
    
    //封装hover阴影效果
    ${props=>props.theme.mixin.boxShadow}



    .text {
      flex: 1;
      /* 3. 文字细节：内边距加大，颜色稍浅，字重加粗 */
      padding: 0 24px; /* 从 16px 增加到 24px */
      font-size: 16px; /* 文字稍微大一点点 */
      color: #484848; /* 爱彼迎经典的深灰文本色 */
      
      /* 防溢出省略号 */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      
      /* 4. 粉红圆圈尺寸：在 60px 的外层下，48px 看起来比较协调 */
      width: 48px;  /* 从 32px 增加到 48px */
      height: 48px;
      border-radius: 50%;
      
      /* 关键：老版本图标不是贴边的，需要一个右间距 */
      margin-right: 8px; 
      
      /* 使用之前在 main.jsx 配置好的主题色，兜底为爱彼迎粉红 */
      background-color: ${props => props.theme.color.primaryColor || '#FF385C'};
      color: #fff;
      
      /* 放大镜 SVG */
      svg {
        width: 20px; /* 图标稍大一点点，对应大圆圈 */
        height: 20px;
        path {
          /* 1. 彻底禁止填充 */
          fill: none; 
          /* 2. 设置线条颜色为白色 */
          stroke: #fff; 
          /* 3. 强制线条宽度，确保在大圆圈里清晰 */
          stroke-width: 4px; 
          }
      }
    }    
  }

  .search-detail {
    top: 40px;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      z-index: 20;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`

