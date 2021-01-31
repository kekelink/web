import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './components/App';
import App from './JanShu/App';
import theme from '@chakra-ui/theme'
import { ChakraProvider } from "@chakra-ui/react"
import LaGouComponents from './LaGou'

// 1. 设置默认颜色模式
// theme.config.initialColorMode = 'dark'

// 2. 使用操作系统所使用的颜色模式
theme.config.useSystemColorMode = true

console.log(theme)

const myTheme = {
  ...theme,
  components: {
    ...theme.components,
    ...LaGouComponents
  }
}

console.log(myTheme)

ReactDOM.render(
  <Router>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
);