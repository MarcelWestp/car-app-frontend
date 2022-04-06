import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTheme from "./AppTheme";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/header/NewHeader";
import Footer from "./components/footer/NewFooter";
import Landingpage from "./pages/LandingPage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Search from "./pages/SearchPage";
import Cardetail from "./pages/CarDetailPage";
import ProfilePage from "./pages/ProfilePage";
import Hostacar from "./pages/HostACarPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {

  const [location,setLocation] = React.useState<string>("")

  const handleLocationChange = (e:any) => {
    //TODO: autokomplette läuft nicht auf onChange
    e.preventDefault();
    setLocation(e.target.value);
  }

  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landingpage handleLocationChange={handleLocationChange} />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="search" element={<Search handleLocationChange={handleLocationChange} />} />
            <Route path="profile/" element={<ProfilePage />} />
            <Route path="car/:id" element={<Cardetail />} />
            <Route path="hostacar" element={<Hostacar />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
