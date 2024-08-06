import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Users1 from './Users1'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users1/>}></Route>
            <Route path="/create" element={<CreateUser/>}></Route>
            <Route path="/update" element={<UpdateUser/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
