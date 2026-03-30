import {configureStore} from '@reduxjs/toolkit'
import homeReducer from './modules/home.jsx'
import entireReducer from './modules/entire/index.jsx'
import detailReducer from './modules/detail.jsx' 

const store=configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer
  }
})

export default store