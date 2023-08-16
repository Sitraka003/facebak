import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Landing from "./components/Landing";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </div>
  );
}