import { current } from "@reduxjs/toolkit"

const initialState={
  currentPage:3
}

function reducer(state=initialState,action){
  switch(action.type){
    case 'changeCity':
      return {...state,city:action.payload}
    default:
      return state
  }
}

export default reducer