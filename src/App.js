import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}