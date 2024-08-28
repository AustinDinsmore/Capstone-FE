import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import NavBar from "./components/NavBar";
import './App.css'
import { useState } from "react";
import ItemList from "./components/Items";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/register" element={<AuthForm setToken={setToken} />} />
        <Route path="/login" element={<AuthForm setToken={setToken} />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  )
}

export default App
