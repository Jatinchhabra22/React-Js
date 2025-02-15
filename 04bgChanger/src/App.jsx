import { useState } from 'react'


function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
     
    <div className="w-full h-screen duration-200 "
    
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-2 py-1'> 

        <button 
        onClick={ () => setColor("red")}
        className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg'
        style={{backgroundColor: "red"}}> Red 
        </button>

        <button 
        onClick={ () => setColor("green")}
        className='outline-none px-4 py-1 rounded-`2xl text-white shadow-lg'
        style={{backgroundColor: "green"}}> green 
        </button>

        <button 
        onClick={ () => setColor("blue")}
        className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg'
        style={{backgroundColor: "blue"}}> blue 
        </button>

        <button 
        onClick={ () => setColor("black")}
        className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg'
        style={{backgroundColor: "black"}}> black  
        </button>


      </div>

       </div>


    </div>

    </>
  )
}

export default App
