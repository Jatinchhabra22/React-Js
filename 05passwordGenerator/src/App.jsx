import { useState, useCallback,useEffect, useRef} from 'react';

function App() {
  const [length, setLength] = useState(8); // default value of length 8
  const [numberAllowed, setNumberAllowed] = useState(true); // include numbers in pass // by default true
  const [charAllowed, setCharAllowed] = useState(true); // include special chars in the pass // by default true
  const [password, setPassword] = useState("");
  
  // ref hook

  const passwordRef = useRef(null)

  const copyPassToClipBoard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
 [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i <= length; i++) {

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()?><:|~`[]{}";

    
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass) // pass banake iss method mai daldo 
    
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()},
   [length,numberAllowed,charAllowed,passwordGenerator])  

  return (
    
<>
      <div className='w-full max-w-2xl shadow-lg rounded-2xl px-8 py-8 my-10 text-orange-500 bg-gray-900 mx-auto'>
        <h1 className='text-white text-center text-2xl font-bold my-4'>Password Generator</h1>

        <div className='flex shadow-lg rounded-xl overflow-hidden mb-4 bg-gray-800 p-3'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-3 px-4 bg-gray-800 text-white text-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg cursor-pointer '
          onClick={copyPassToClipBoard}
          >
          copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}>
            </input>
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
         <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
     </div>
       
      </div>
 </>
   
  );
}

export default App;
