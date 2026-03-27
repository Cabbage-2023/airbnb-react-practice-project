import {configureStore} from '@reduxjs/toolkit'
import homeReducer from './modules/home.jsx'
import entireReducer from './modules/entire/index.jsx'

const store=configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer
  }
})

export default store