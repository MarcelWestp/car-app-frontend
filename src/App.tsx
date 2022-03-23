import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Landingpage from "./pages/landingpage";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
