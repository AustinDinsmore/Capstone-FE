import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import './App.css'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/items" /> */}
        <Route path="/register" element={<Auth />} />
        <Route path="/signin" element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App
