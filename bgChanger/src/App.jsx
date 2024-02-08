import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed bottom-10 flex flex-wrap justify-center inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
                <button onClick={()=>{setColor("red")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "red"}}>Red
                </button>
                <button onClick={() => {setColor("green")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "green"}}>Green
                </button>
                <button onClick={() => {setColor("blue")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "blue"}}>Blue
                </button>
                <button onClick={() => {setColor("gray")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "gray"}}>Gray
                </button>
                <button onClick={() => {setColor("yellow")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "yellow"}}>Yellow
                </button>
                <button onClick={() => {setColor("pink")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "pink"}}>Pink
                </button>
                <button onClick={() => {setColor("purple")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "purple"}}>Purple
                </button>
                <button onClick={() => {setColor("lavender")}}
                className="outline-none border-2 border-orange-600 text-black px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "lavender"}}>Lavender
                </button>
                <button onClick={() => {setColor("white")}}
                className="outline-none border-2 border-orange-600 text-black px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "white"}}>White
                </button>
                <button onClick={() => {setColor("black")}}
                className="outline-none border-2 border-orange-600 text-white px-4 py-3 rounded-full hover:opacity-75" style={{backgroundColor: "black"}}>Black
                </button>
            </div>
        </div>
    </div>
  )
}

export default App
