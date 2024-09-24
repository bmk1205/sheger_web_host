// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as R,Route,Routes} from 'react-router-dom'
import { Home } from './Components/Main Components/Home/Home'
// import { Error } from './Components/Main Components/Error/Error'
// import { About_As } from './Components/Sub Components/Home/About As/About_As'
// import {Button} from 'react-bootstrap'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <Button className='bg-success'>umpa</Button>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <R>
         <Routes>
            <Route path='/' element={<Home/>}>
                {/* <Route path='about_as' element={<About_As/>}/> */}
                {/* <Route path='contact_developer'/>
                <Route path='help'/> */}
            </Route>
            <Route path='*' element={<Home/>}/>
         </Routes>
      </R>
    </>
  )
}

export default App
