import styled from 'styled-components'


export const TabsWrapper=styled.div`

  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    /* box-shadow: 0px 1px 2px rgb(0 0 0 / 15%); */
    white-space: nowrap;
    cursor: pointer;
    //封装hover阴影效果
    ${props=>props.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props=>props.theme.color.secondaryColor};
    }
  }

`