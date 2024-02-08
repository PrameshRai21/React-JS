import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "*@#+%";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //copying password to clip
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])
 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-screen h-auto flex justify-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
          <h1 className="text-white text-xl text-center font-bold my-3">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 px-4">
            <input
              type="text"
              placeholder="Password"
              value={password}
              className="outline-none rounded-lg w-full py-1 px-3 bg-slate-100"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipBoard}
            className="text-white bg-blue-700 text-md rounded-lg mx-2 hover:opacity-85 transition-opacity">
              Copy
            </button>
          </div>
          <div className="flex text-md font-semibold gap-x-2 mb-3">
              <div className="flex items-center gap-x-1">
                  <input type="range"
                          min={6}
                          max={50}
                          value={length}
                          className="cursor-pointer"
                          onChange={(e) => {setLength(e.target.value)}}/>
                    <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox" 
                         defaultChecked={numberAllowed}
                         id="innerInput"
                         onChange={() => {
                              setNumberAllowed((prev) => !prev)
                         }}/>
                  <label> Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox" 
                         defaultChecked={charAllowed}
                         id="charInput"
                         onChange={() => {
                              setCharAllowed((prev) => !prev)
                         }}/>
                  <label> Characters</label>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
