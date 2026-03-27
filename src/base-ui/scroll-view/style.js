import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  /* 这个容器负责把多出来的内容藏起来 */
  .scroll-wrapper {
    overflow: hidden;
  }

  .scroll-content {
    display: flex;
    transition: transform 250ms ease-in-out;

    & > * {
      flex-shrink: 0; /* 防止被挤压 */
      ${props => props.theme.mixin.boxShadow}
      /* 记得加点间距，否则阴影会重叠在一起看不清 */
      margin: 4px 8px; 
      background-color: #fff;
      border-radius: 3px;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    ${props=>props.theme.mixin.boxShadow}
    cursor: pointer;

    /* 让按钮悬浮在裁剪框的边缘，而不是被切掉 */
    &.left {
      left: -14px;
    }

    &.right {
      right: -14px;
    }
  }
`