import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles' // MUI 的

import { Provider } from 'react-redux'
import store from './store/index.jsx' 
import App from './App.jsx'
import 'normalize.css'
import './assets/css/index.less'
import theme from './assets/theme/index.js'

const muiTheme = createTheme()

createRoot(document.getElementById('root')).render(
  //provider放在suspense外面，是因为suspense是异步的，
  //而provider是同步的，要在suspense加载完成后再渲染provider，
  //不然会导致页面显示错误，比如header没有固定在顶部，
  //provider永远要作为基础组件，其他组件都要包裹在provider里面
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
    {/* 2. 使用 Suspense 包裹，fallback 属性必填，代表加载时的占位内容 */} 
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </MuiThemeProvider>          
    </Suspense>
  </Provider>
)
