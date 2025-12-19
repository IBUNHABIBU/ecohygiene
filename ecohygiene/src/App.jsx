import { useState } from 'react'
import ChristmasCard from "./ChristmasCard";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChristmasCard />
    </>
  )
}

export default App
