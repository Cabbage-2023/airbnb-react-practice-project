import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { useSelector,shallowEqual,useDispatch } from 'react-redux';
import { fetchRoomList } from '@/store/modules/entire/actionCreator'


import { PaginationWrapper } from './style'



const EntirePagination = memo((props) => {
  const {totalCount,currentPage,roomList}=useSelector((state)=>({
    totalCount:state.entire.totalCount,
    currentPage:state.entire.currentPage,
    roomList:state.entire.roomList
  }),shallowEqual)
  const startCount=currentPage*20+1
  const endCount=(currentPage+1)*20
  //总页数
  const totalPage=Math.ceil(totalCount/20)

  const dispatch = useDispatch()
  function pageChangeHandle(event,pageCount){
    //回顶
    window.scrollTo(0,0)
    dispatch(fetchRoomList(pageCount-1))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList?.length &&(
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startCount}-{endCount}个房源，共超过{totalCount}个
          </div>
        </div>)
      }
    </PaginationWrapper>
  )
})



export default EntirePagination