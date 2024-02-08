
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className="text-3xl font-bold bg-green-500 text-slate-800 p-4 mb-5
     rounded-xl">Tailwind CSS</h1>
    <Card username="Hanna" />
    <Card username="Rosie" btnText="View Profile"/>
    </>
  )
}

export default App
