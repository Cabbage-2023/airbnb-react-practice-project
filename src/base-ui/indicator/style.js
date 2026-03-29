import styled from 'styled-components'


export const IndicatorWrapper = styled.div`
    overflow: hidden; 

  .i-content{
    display: flex;
    display: relative;
    transition: transform 0.3s ease-in-out;

    > * {
      flex-shrink: 0;//不压缩
    }
  }

`