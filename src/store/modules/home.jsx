import { getHomeGoodPriceData,getHomeHighScoreData,getHomeDiscountData,getHomeHotRecommendData } from "@/services";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction=createAsyncThunk('fetchdata', (payload,{dispatch})=>{
  //为了在一个thunk内处理多个请求，所以外面没用async包裹
  getHomeGoodPriceData().then(res=>{
    dispatch(changeGoodPriceInfo(res))
    }
  )
  getHomeHighScoreData().then(res=>{
    dispatch(changeHighScoreInfo(res))
  })
  getHomeDiscountData().then(res=>{
    dispatch(changeDiscountInfo(res))
  })
  getHomeHotRecommendData().then(res=>{
    dispatch(changeRecommendInfo(res))
  })
})

const homeSlice=createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{},
    highScoreInfo:{},
    discountInfo:{},
    recommendInfo:{},
  },
  reducers:{
    changeGoodPriceInfo(state,{payload}){
      state.goodPriceInfo=payload
    },
    changeHighScoreInfo(state,{payload}){
      state.highScoreInfo=payload
    },
    changeDiscountInfo(state,{payload}){
      state.discountInfo=payload
    },
    changeRecommendInfo(state,{payload}){
      state.recommendInfo=payload
    }
  },
  // extraReducers:(builder)=>{
  //   builder.addCase(fetchHomeDataAction.fulfilled,
  //     (state,{payload})=>{
  //       console.log(payload)
  //       state.goodPriceInfo=payload
  //     })
  // }
  
})

export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendInfo,
}=homeSlice.actions

export default homeSlice.reducer