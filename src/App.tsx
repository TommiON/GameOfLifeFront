import { useState } from 'react'
import './App.css'
import { PopulationGrid } from './components/PopulationGrid/PopulationGrid';
import { MainBar } from './components/MainBar/MainBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MainBar initializationDone={false} />
      <PopulationGrid numberOfRows={10} numberOfColumns={30} cells={null} />
    </>
    
  )
}

export default App
