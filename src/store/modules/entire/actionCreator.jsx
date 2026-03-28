import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'


export const changeCurrentPage=(currentPage)=>({
 type:actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
})
export const changeRoomList=(roomList)=>({
 type:actionTypes.CHANGE_ROOM_LIST,
    roomList, 
})
export const changeTotalCount=(totalCount)=>({
 type:actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
})

export const changeIsLoading=(isLoading)=>({
 type:actionTypes.CHANGE_IS_LOADING,
    isLoading,
})

export const fetchRoomList=(page=0)=>{
    return async (dispatch,gettate)=>{
        //更新当前页码
        dispatch(changeCurrentPage(page))
        //更新是否正在加载
        dispatch(changeIsLoading(true))
        
        //1.根据页码获取房间列表
        //const currentPage=getState().entire.currentPage
        const res=await getEntireRoomList(page*20)
        //更新是否正在加载
        dispatch(changeIsLoading(false))

        //2.更新房间列表
        const roomList=res.list
        const totalCount=res.totalCount
        dispatch(changeRoomList(roomList))
        dispatch(changeTotalCount(totalCount))
    }
}