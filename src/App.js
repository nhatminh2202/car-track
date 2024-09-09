import LoginForm from "./layout/LoginForm";
import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App
