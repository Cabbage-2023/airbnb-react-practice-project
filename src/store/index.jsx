import {configureStore} from '@reduxjs/toolkit'
import homeReducer from './modules/home.jsx'
import entireReducer from './modules/entire/index.jsx'
import detailReducer from './modules/detail.jsx' 
import mainReducer from './modules/main.jsx'


const store=configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer,
    main:mainReducer,
  }
})

export default store