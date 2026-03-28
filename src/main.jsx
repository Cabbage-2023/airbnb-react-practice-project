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
    <Suspense fallback={<div>Loading...</div>}>
    {/* 2. 使用 Suspense 包裹，fallback 属性必填，代表加载时的占位内容 */}
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>    
    </Suspense>
)
