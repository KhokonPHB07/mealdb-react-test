import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MealDb from './MealDb/MealDb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MealDb></MealDb>
    </div>
  )
}

export default App
