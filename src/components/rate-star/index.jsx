import React from 'react';
import { Rate } from 'antd';
const RateStar = ({value}) => <Rate allowHalf defaultValue={value} style={{fontSize:12,color:"#39c5bb" }}/>;
export default RateStar;
