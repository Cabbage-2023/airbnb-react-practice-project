import React, { memo,useState } from 'react'


import Indicator from '@/base-ui/indicator'
import { DemoWrapper } from './style'
import { func } from 'prop-types'


const Demo = memo(() => {
  const names=['c','a','b','asda','asdadsa','冬马和纱','夏目蓝','牧濑红莉栖']
  const [selectIndex,setSelectIndex]=useState(0)

  function toggleClickHandle(isNext=true){
    let newIndex=isNext?selectIndex+1:selectIndex-1
    if(newIndex<0) newIndex=names.length-1
    if(newIndex>names.length-1) newIndex=0
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e=>toggleClickHandle(false)}>prev</button>
        <button onClick={e=>toggleClickHandle(true)}>next</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {
            names.map((item,index)=>{
              return <button key={index}>{item}</button>        
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo