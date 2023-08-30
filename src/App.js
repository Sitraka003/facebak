import { Routes, Route } from "react-router-dom";
import Signup from "./components/sign_up";
import Login from "./components/Login";
import Landing from "./components/Landing";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}