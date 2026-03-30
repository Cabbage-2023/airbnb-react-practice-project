import styled from 'styled-components'

export const HeaderWrapper=styled.div`
  
  &.fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .content{
    position: relative;
    padding: 0 30px;
    z-index: 99;
    // 如果这里用了 theme 里的 isAlpha，记得确保 ThemeProvider 传的是对象
    background-color: ${props => props.theme.isAlpha ? 'transparent' : '#fff'};
    border-bottom: ${props=>props.theme.isAlpha ? 'none' : '1px solid #eee'};

    .top{
      display: flex; 
      align-items: center;
      height: 80px;
    }
    
  }

  .cover{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9;
  }
`

export const SearchAreaWrapper=styled.div`
  transition: height 250ms ease;
  height: ${props=>props.$isSearch ? '100px' : '0px'};
` 