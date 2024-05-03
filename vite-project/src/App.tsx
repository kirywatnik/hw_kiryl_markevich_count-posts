import { useState } from 'react'

import './App.css'
import Count from './components/count';
import Text from './components/text';
import Post from './components/post';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count />
      <br />
      <br />
      <br />
      <Text />
      <Post />
      <Post />
      <Post />
    </>
  )
}

export default App
