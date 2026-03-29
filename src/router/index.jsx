import React from 'react' // 必须加上这一行，否则无法识别 React.lazy
import { Navigate } from "react-router-dom"

const Home=React.lazy(()=>import('@/views/home'))
const Detail=React.lazy(()=>import('@/views/detail'))
const Entire=React.lazy(()=>import('@/views/entire'))
const Demo=React.lazy(()=>import('@/views/demo'))
// import Home from '@/views/home'
// import Detail from '@/views/detail'
// import Entire from '@/views/entire'

const routes=[
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:'/home',
    element:<Home />
  },
  {
    path:'/detail',
    element:<Detail />
  },
  {
    path:'/entire',
    element:<Entire />
  },
  {
    path:'/demo',
    element:<Demo />
  }
]
export default routes
