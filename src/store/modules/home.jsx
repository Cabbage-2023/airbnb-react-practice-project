import { getHomeGoodPriceData } from "@/services";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction=createAsyncThunk('fetchdata',async ()=>{
  const res=await getHomeGoodPriceData()
  return res
})

const homeSlice=createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{}
  },
  reducers:{
    changeGoodPriceInfo(state,{payload}){
      state.goodPriceInfo=payload
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchHomeDataAction.fulfilled,
      (state,{payload})=>{
        console.log(payload)
        state.goodPriceInfo=payload
      })
  }
  
})

export const {changeGoodPriceInfo}=homeSlice.actions

export default homeSlice.reducer