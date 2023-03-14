import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PolarisProvider } from "./components/providers";
import Navbar from "./components/Navbar";
import HomePage from "./pages/index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <PolarisProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </PolarisProvider>
  );
}
