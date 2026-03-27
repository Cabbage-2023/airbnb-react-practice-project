import styled from 'styled-components'
import coverImg from '@/assets/img/cover_01.jpeg'

export const BannerWrapper = styled.div`
  //这里是字符串，所以只能使用变量代替
  background: url(${coverImg}) center/cover;
  height: 529px;
 `
