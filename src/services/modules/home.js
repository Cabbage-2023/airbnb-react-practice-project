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
