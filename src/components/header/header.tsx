import { useState, useEffect } from "react";
import "./header.css"
import logo from "./../../res/img/logo.jpeg";

const Header = () => {

    const [hamburgerOpen, setHamburgerOben] = useState(false);
    const [headerBg, setHeaderBg] = useState({
      backgroundColor: 'rgba(31, 30, 30, 0.00)'
    });
  
    const hamburgerHandler = () => {
      setHamburgerOben(!hamburgerOpen);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
          setHeaderBg({ backgroundColor: "#3acbf7" });
        } else {
          setHeaderBg({ backgroundColor: "transparent" });
        }
      });
    });
  
    const menuItems = [
      { href: "#signup", dataAfter: "Become a host",className: "host"},
      { href: "#signup", dataAfter: "sign up",className: "signup"},
      { href: "#login", dataAfter: "login",className: "login"},
    ];
  
    return (
      <section id="header" style={headerBg}>
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                  <img src={logo} alt="Logo" style={{width:30,height:30}}/>
                <h1>
                  <span>C</span>ar<span>D</span>ealer
                </h1>
              </a>
            </div>
            <div className="nav-list">
              <div
                className={hamburgerOpen ? "hamburger active" : "hamburger"}
                onClick={hamburgerHandler}
              >
                <div className="bar"></div>
              </div>
              <ul className={hamburgerOpen ? "active" : undefined}>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      data-after={item.dataAfter}
                      className={item.className}
                      onClick={hamburgerHandler}
                    >
                      {item.dataAfter}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Header;