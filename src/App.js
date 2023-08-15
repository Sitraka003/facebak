import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Home/SignUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}