import React, { memo,  } from 'react'
import { useRoutes, } from 'react-router-dom'


import routes from '@/router'
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import useScrollTop from './hooks/useScrollTop'



//memo 的作用是让组件只有在自身的 props（属性）发生变化时 才会重新渲染
const App = memo(() => {
  useScrollTop()

  return (
    <div className='app'>
      <AppHeader />
      <div className="page">
          {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App