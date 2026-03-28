import styled from 'styled-components';

export const LongForWrapper = styled.div`
  margin-top: 30px;

  .longfor-list {
    /* 这里通过 margin 抵消 LongforItem 内部的 padding */
    margin: 0 -8px; 
  }
`;