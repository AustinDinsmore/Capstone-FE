import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import NavBar from "./components/NavBar";
import './App.css'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/items" /> */}
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </div>
  )
}

export default App
