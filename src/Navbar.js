import React, { useState } from "react";
import NavbarImage from "./assets/img/avatar.webp";
import "./Navbar.css";

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = (namaMenu) => {
    const x = document.getElementsByClassName("menu");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(namaMenu).style.display = "block";
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="fixed">
        <a href="#">
          <img src={NavbarImage} alt="Zulfi-avatar" width="50px" />
        </a>
        <ul>
          <li>
            <button onClick={() => openMenu("Home")}>
              <a href="#">Home</a>
            </button>
          </li>
          <li>
            <button onClick={() => openMenu("Portfolio")}>
              <a href="#">Portfolio</a>
            </button>
          </li>
          <li>
            <button onClick={() => openMenu("Notion")}>
              <a href="#">Notion</a>
            </button>
          </li>
          <li>
            <button onClick={() => openMenu("Blog")}>
              <a href="#">Blog</a>
            </button>
          </li>
          <li>
            <button onClick={() => openMenu("Contact")}>
              <a href="#">Contact</a>
            </button>
          </li>
        </ul>

        <div className="menu-toggle">
          <input
            type="checkbox"
            id="check"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
