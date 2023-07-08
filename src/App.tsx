// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Menu from "./components/Menu"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
