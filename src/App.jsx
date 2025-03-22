import { Routes, Route, Navigate } from 'react-router-dom'
import Propose from './pages/Propose'
import Accept from './pages/Accept'
import Think from './pages/Think'

function App() {

  return (
    <>  
        <Routes>
          <Route path="/" element={<Propose/>} />
          <Route path="/accept" element={<Accept/>} />
          <Route path="/think" element={<Think/>} />
        </Routes>
    </>
  )
}

export default App
