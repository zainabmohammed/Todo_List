import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiInfoCircle } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useStore } from "../../../Store";
import trans from "../../../trans";
import AppLogo from "../SVG/Logo";

function MainHeader() {
  let location = useLocation();
  // const [lang, setLang] = useState("en");
  // console.log(location);
  const { lang, setLang } = useStore();

  return (
    <div className="Header">
      <div className="Todo-container">
        <div className="header-content">
          <div className="Logo">
            <AppLogo />
          </div>
          <div className="menu">
            <Link className={location?.pathname === "/" ? "active" : ""} to="/">
              <BiHomeAlt /> {trans[lang].nav_home}
            </Link>
            <Link
              className={location?.pathname === "/About" ? "active" : ""}
              to="/About "
            >
              <BiInfoCircle /> {trans[lang].nav_about}
            </Link>
            <a className="lang-btn" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
              {trans[lang].nav_arabic}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
