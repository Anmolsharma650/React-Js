import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
    if (counter >= 20) {
      setCounter(20)
    }
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Anmol Sharma or React</h1>
      <h2>Counter: {counter}</h2>
      <div ><button style={{marginBottom: '10px'}} onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button></div>

    </>
  )
}

export default App
