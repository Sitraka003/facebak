import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login";
import Signin from "./components/Signin";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
