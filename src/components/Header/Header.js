import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation.js";
import PromoHeader from "../PromoHeader/PromoHeader.js";

function Header({ loggedIn }) {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);

  function openNavigation() {
    setIsNavigationOpen(true);
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  return (
    <>
      {loggedIn ? (
        <header className="header">
          <Link to="/" className="header__link">
            <img src={logo} alt="Логотип" className="header__logo" />
          </Link>
          <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
          <button onClick={openNavigation} className="header__burger-button" />
        </header>
      ) : (
        <PromoHeader />
      )}
    </>
  );
}

export default Header;
