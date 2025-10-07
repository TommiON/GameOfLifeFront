import { useState } from 'react'
import './App.css'
import { Cell } from './components/Cell/Cell'
import { PopulationGrid } from './components/PopulationGrid/PopulationGrid'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <PopulationGrid numberOfRows={10} numberOfColumns={30} cells={null} />
  )
}

export default App
