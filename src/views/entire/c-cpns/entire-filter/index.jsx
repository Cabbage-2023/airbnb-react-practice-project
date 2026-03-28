import React, { memo,useState } from 'react'


import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems,setSelectItems]=useState([])

  function itemClickHandle(item){
    //解构赋值，创建一个新对象，让页面重新渲染，不然就不渲染了
    const newItems=[...selectItems]
    if(newItems.includes(item)){
      const itemIndex=newItems.findIndex(filterItem=>filterItem===item)
      newItems.splice(itemIndex,1)
    }
    else{
      newItems.push(item)
    }
    setSelectItems(newItems) 
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item,index)=>{
            return (
              <div 
                className={classNames("item",{active:selectItems.includes(item)})}
                key={item}
                onClick={e=>itemClickHandle(item)}
              >
                  {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper> 
  )
})


export default EntireFilter