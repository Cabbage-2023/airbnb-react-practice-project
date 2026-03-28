import { func } from 'prop-types'
import hyRequest from '../request/index'

export function getHomeGoodPriceData(params) {
  return hyRequest.get({
    url:'/home/goodprice',
  })
} 

export function getHomeHighScoreData(){
  return hyRequest.get({
    url:'/home/highscore'
  })
}

export function getHomeDiscountData(){
  return hyRequest.get({
    url:'/home/discount'
  })
} 

export function getHomeHotRecommendData(){
  return hyRequest.get({
    url:'/home/hotrecommenddest'
  })
}

export function getHomeLongForData(){
  return hyRequest.get({
    url:'/home/longfor'
  })
}

export function getHomePlusData(){
  return hyRequest.get({
    url:'/home/plus'
  })
}