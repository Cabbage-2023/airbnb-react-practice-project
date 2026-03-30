import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1; /* 占据左侧空间 */
  display: flex;
  align-items: center;
  /* 统一交给父级控制颜色，子元素通过 currentColor 继承 */
  color:${props=>props.theme.isAlpha ? '#fff' : props.theme.color.primaryColor};; 

  .logo {
    cursor: pointer;
    /* 增加点击区域，提升用户体验 */
    padding: 10px; 
    display: flex;
    align-items: center;

    /* 选中 logo div 内部的 svg */
    svg {
      /* 高度决定整体大小，宽度会自动按 6332:1383 的比例缩放 */
      height: 32px;   
      /* 确保内部路径填充父级设定的 color */
      path {
        fill: currentColor;
      }
    }
      
  }
`