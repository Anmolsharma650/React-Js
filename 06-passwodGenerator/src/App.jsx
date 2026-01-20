import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false);
  const [chr, setChr] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordGenerate = useCallback(() => {
    let password = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) {
      str += "0123456789";
    }
    if (chr) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    } for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length + 1);
      password += chars[randomIndex];
    }
    setPassword(password);
  }, [length, numbers, chr, Password]);


  return ( 
    <div className='flex justify-center flex-wrap mt-10'>
      <div className="box bg-gray-500 h-30 w-120 rounded-3xl m-20">
        <div className='button flex justify-center overflow-hidden rounded-lg pt-5'>
          <button className='bg-white h-10 w-90 px-4 py-2 rounded-l-lg'>Generate Password</button>
          <button className='bg-blue-500 h-10 w-20 px-4 py-2 rounded-r-lg'>Copy</button>
        </div>
        <div className="w-64 flex items-center ">
      <input
        type="range"
        min="0"
        max="50"
        className="w-50 h-2 ml-5 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
      /> length 

    </div>
      </div>
      </div>
   
  )
}

export default App
