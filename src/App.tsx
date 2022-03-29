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
import Hostacar from "./pages/hostacar"



function App() {
  
  const user = {
    id: 1,
      firstName: "david",
      lastName: "drücke",
      username: "codingdavid",
      email: "coding@david.de",
      password: "coding123",
      dob: new Date(),
      picture: "bild",
      address: { 
        street: "langestraße",
        nr: "11a",
        zip: 38106,
        city: "braunschweig"
      },
      cars: [1,2,3],
      booked: [],
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profilepage user={user} />} />
          <Route path="car/:carid" element={<Cardetail />} />
          <Route path="hostacar" element={<Hostacar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
