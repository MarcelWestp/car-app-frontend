import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTheme from "./AppTheme";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/header/NewHeader";
import Footer from "./components/footer/NewFooter";
import Landingpage from "./pages/LandingPage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import Cardetail from "./pages/CarDetailPage";
import ProfilePage from "./pages/ProfilePage";
import Hostacar from "./pages/HostACarPage";
import CheckoutPage from "./pages/CheckoutPage";
import { SelectChangeEvent } from "@mui/material/Select";

const App = () => {
  const [location, setLocation] = React.useState<string>("");
  const [type, setType] = React.useState<string>("");

  const handleLocationChange = (value: any) => {
    setLocation(value);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Landingpage
                  handleLocationChange={handleLocationChange}
                  location={location}
                  handleTypeChange={handleTypeChange}
                />
              }
            />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route
              path="search"
              element={
                <SearchPage
                  handleLocationChange={handleLocationChange}
                  location={location}
                  handleTypeChange={handleTypeChange}
                  type={type}
                />
              }
            />
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
