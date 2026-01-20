import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const [color ,setcolor] = useState('white');

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-15 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-2 shadow-2xl bg-white px-3 py-2 rounded-3xl'>
        <button className="bg-red-500 text-white outline-none px-4 py-2 rounded-lg" onClick={() => setcolor('red')}>Red</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('green')}>Green</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('blue')}>Blue</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('yellow')}>Yellow</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('purple')}>Purple</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('orange')}>Orange</button>
        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('olive')}>Olive</button>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('teal')}>Teal</button>
        <button className="bg-red-950 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('maroon')}>Maroon</button>
        <button className="bg-blue-950 text-white px-4 py-2 rounded-lg" onClick={() => setcolor('navy')}>Navy</button>
        <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={() => setcolor('black')}>Black</button>
      </div>
    </div>
   </div>
  )
}

export default App
