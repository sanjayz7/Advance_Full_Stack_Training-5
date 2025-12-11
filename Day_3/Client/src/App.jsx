import './App.css'
import Home from './Home'
import Greeting from './Greeting'
import Counter from './Counter'

function App() {
 

  return (
    <>
     <h1>React</h1>
     <Home />
     <Greeting name="Rahul" age={20}   />
     <Counter />
    
    </>
  )
}

export default App
