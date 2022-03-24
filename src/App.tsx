import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Landingpage from "./pages/landingpage";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Search from "./pages/searchpage";
import Cardetail from "./pages/cardetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="car/:carid" element={<Cardetail />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
