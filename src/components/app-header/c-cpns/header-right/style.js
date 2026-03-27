import styled from 'styled-components'

export const RightWrapper=styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  align-items: center;

  font-weight: 600;
  color: ${props=>props.theme.text.primaryColor};

  .btns{
    display: flex;
    margin-right:20px;
    .btn{
      margin-right: 12px;
      padding: 5px 12px;
      border-radius: 9999px;
      cursor: pointer;

      &:hover{
        background-color: #ddd;
      }
    }
  }

  .profile{
    position: relative;

    display: flex;
    align-items: center;
    padding: 5px 12px;
    border: 1px solid #ddd;
    border-radius: 9999px;

    //封装hover阴影效果
    ${props=>props.theme.mixin.boxShadow}

    .panel{
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      position: absolute;
      right: 0;
      top:60px;

      font-weight: normal;
      .top{border-bottom: 1px solid #ddd;}
      .top,.bottom{padding:10px 0;}
      .item{
        height: 40px;
        line-height: 40px;
        padding: 0 12px;
        cursor: pointer;
      }
      .item:hover{
        background-color: #eee;
      }
    }
  }
`