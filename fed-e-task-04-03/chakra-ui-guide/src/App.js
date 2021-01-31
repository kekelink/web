import {chakra} from '@chakra-ui/react'
const LaGouButton = chakra("button", {
  themeKey: 'LaGouButton'
});


function App() {
  return (
    <div>
      <LaGouButton> 按钮 </LaGouButton>
    </div>
  )
}

export default App;