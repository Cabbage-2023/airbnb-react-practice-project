import hyRequest from '../request/index'

export function getHomeGoodPriceData(params) {
  return hyRequest.get({
    url:'/home/goodprice',
  })
} 
