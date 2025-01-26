import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='max-w-7xl mx-auto'>
      <h1 className='text-2xl text-white underline'>Hello, Three.js</h1>
    </main>
  )
}

export default App
