import { useState } from 'react';
import Chai from './chai'

 
function App() {
  const [count, setCount] = useState(0);

  const username = "by hitesh chaudhary "

  return (
    <>
    <Chai/>
    <h1> chai aur react {username}</h1>
    </>
  );
}

export default App;

// function naming should have a capital start (Chai , Main , )