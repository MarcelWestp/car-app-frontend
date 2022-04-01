import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/newheader";
import Footer from "./components/footer/newfooter";
import Landingpage from "./pages/LandingPage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Search from "./pages/SearchPage";
import Cardetail from "./pages/CarDetailPage";
import Profilepage from "./pages/ProfilePage";
import Hostacar from "./pages/HostACarPage"
import Checkoutpage from "./pages/CheckoutPage";


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
