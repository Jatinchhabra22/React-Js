import { use, useState } from 'react'


function App() {

  const[counter, myCounter] = useState(15)


  function addValue(){

     myCounter(counter + 1)
  }

  function removeValueby2(){
    myCounter(counter - 2)
  }

  return (
    <div className='w-full h-screen flex flex-col item-center justify-center ' 
        style={{backgroundColor:"black"}}>

    <button onClick={addValue}
      className='border-2 border-white p-3 w-[25%] '
      style={{color:'white'}}> Add Value : {counter}</button>

<button onClick={removeValueby2}
      style={{color:'white'}}> Remove Value by 2   : {counter}</button>

    </div>
  )
}

export default App
