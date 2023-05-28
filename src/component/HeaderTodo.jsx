import React, { useState } from "react";
import "./headertodo.css";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiInfoCircle } from "react-icons/bi";
import SvgTodo from "./SvgTodo";
import { useLocation } from "react-router-dom";
import { useStore } from "../Store";
import trans from "../trans";

function HeaderTodo() {
  let location = useLocation();
  //   const [lang, setLang] = useState("en");
  //   console.log(location);
  const { lang, setLang } = useStore();

  return (
    <div className="Header">
      <div className="Todo-container">
        <div className="header-content">
          <div className="Logo">
            <SvgTodo />
          </div>

          {/* <h1 className="Logo">ToDo</h1> */}
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

            <a onClick={() => setLang(lang === "en" ? "ar" : "en")}>
            {trans[lang].nav_arabic}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTodo;
