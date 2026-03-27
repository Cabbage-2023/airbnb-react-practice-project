import styled from 'styled-components';

const Rate = styled(Rate)`
  /* 这里的 & 代表当前组件 */
  .ant-rate-star {
    margin-inline-end: 4px !important; /* 修改右侧间距，4px 可以随你调 */
    
    &:last-child {
      margin-inline-end: 0; /* 最后一个星星不需要间距 */
    }
  }
`;

// 使用时：
