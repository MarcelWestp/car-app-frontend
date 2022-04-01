import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/newheader";
import Footer from "./components/footer/newfooter";
import Landingpage from "./pages/landingpage";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Search from "./pages/searchpage";
import Cardetail from "./pages/cardetail";
import Profilepage from "./pages/profilepage";
import Hostacar from "./pages/hostacarpage"
import Checkoutpage from "./pages/checkoutpage";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="profile/:id" element={<Profilepage />} />
          <Route path="car/:id" element={<Cardetail />} />
          <Route path="hostacar" element={<Hostacar />} />
          <Route path="checkout" element={<Checkoutpage />} />
        </ Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
