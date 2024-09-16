import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import NavBar from "./components/NavBar";
import './App.css'
import { useState } from "react";
import ItemList from "./components/Items";
import ItemDetail from "./components/ItemDetail";
import ReviewForm from "./components/ReviewForm";
import CommentForm from "./components/CommentForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/register" element={<AuthForm setToken={setToken} />} />
        <Route path="/login" element={<AuthForm setToken={setToken} />} />
        <Route path="/item/:id" element={<ItemDetail token={token} />} />
        <Route path="/review/:id" element={<ReviewForm token={token} setToken={setToken} />} />
        <Route path="/comment/:review_id/:id" element={<CommentForm token={token} setToken={setToken} />} />
      </Routes>
    </div>
  )
};

export default App
